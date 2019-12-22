import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import { signInSuccess } from './redux/user/user.actions';

import Header from './components/header/Header.component';
import HomePage from './pages/homepage/Homepage.components';
import ShopPage from './pages/shop/Shop.component';
import AuthenticationPage from './pages/authentication/Authentication.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data
            }
          })
        })
      } else {
        this.setState({ currentUser: null })
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/auth" component={AuthenticationPage} />
        </Switch>
      </>
    );
  }
}

export default connect(null, { signInSuccess })(App);