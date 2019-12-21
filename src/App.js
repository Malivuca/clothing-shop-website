import React from 'react';

import { Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component.jsx';

import shopPage from './pages/shop/shop.component.jsx';

import Header from './components/header/header.component.jsx';

/*const HatsPage = () => (
  <div>
    <h1> Hats Page </h1>
  </div>
);
*/

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact={true} path='/' component={HomePage} />
        <Route exact={true} path='/shop' component={shopPage} />
      </Switch>
    </div>
  );
}

export default App;
