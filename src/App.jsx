import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import { signInSuccess } from './redux/user/user.actions';

import Header from './components/header/Header.component';
import HomePage from './pages/homepage/Homepage.components';
import ShopPage from './pages/shop/Shop.component';
import AuthenticationPage from './pages/authentication/Authentication.component';

import { auth } from './firebase/firebase.utils';

const App = () => {
  const unsuscribeFromAuth = null;

  useEffect(() => {
    unsuscribeFromAuth = auth.onAuthStateChanged(user => {
      signInSuccess(user);
      console.log(user);
    })

    return unsuscribeFromAuth();
  }, [])

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/auth" component={AuthenticationPage} />
      </Switch>
    </>
  );
}

export default connect(null, { signInSuccess })(App);