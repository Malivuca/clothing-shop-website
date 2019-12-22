import React from 'react';

import { Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component.jsx';

import shopPage from './pages/shop/shop.component.jsx';

import Header from './components/header/header.component.jsx';

import SignInAndSignUpPage from './pages/signIn-and-signUp/signIn-and-signUp.component.jsx';

import { auth } from './firebase/firebase.utils.js';

/*const HatsPage = () => (
  <div>
    <h1> Hats Page </h1>
  </div>
);
*/

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact={true} path='/' component={HomePage} />
          <Route path='/shop' component={shopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    )
  };
}

export default App;
