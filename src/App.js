import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/Homepage.components';
import ShopPage from './pages/shop/Shop.component';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage} />
      <Route path="/shop" component={ShopPage} />
    </div>
  );
}

export default App;
