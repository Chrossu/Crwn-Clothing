import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Header from './components/header/Header.component';
import HomePage from './pages/homepage/Homepage.components';
import ShopPage from './pages/shop/Shop.component';
import AuthenticationPage from './pages/authentication/Authentication.component';

function App() {
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

export default App;
