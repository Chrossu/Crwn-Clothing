import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

import Header from './components/header/Header.component';
import HomePage from './pages/homepage/Homepage.components';
import ShopPage from './pages/shop/Shop.component';
import AuthenticationPage from './pages/authentication/Authentication.component';
import CheckoutPage from './pages/checkout/Checkout.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.props.setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          }
          )
        })
      } else {
        this.props.setCurrentUser(null);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/auth" render={() =>
            this.props.currentUser ? <Redirect to="/" /> : <AuthenticationPage />}
          />
        </Switch>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

export default connect(mapStateToProps, { setCurrentUser })(App);