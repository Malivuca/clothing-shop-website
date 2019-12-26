import React from 'react';

import { Route, Switch } from 'react-router-dom';

import { connect } from 'react-redux';

import { setCurrentUser } from './redux/user/user.actions';

import HomePage from './pages/homepage/homepage.component.jsx';

import shopPage from './pages/shop/shop.component.jsx';

import Header from './components/header/header.component.jsx';

import SignInAndSignUpPage from './pages/signIn-and-signUp/signIn-and-signUp.component.jsx';

import { auth } from './firebase/firebase.utils.js';

import { createUserProfileDocument } from './firebase/firebase.utils.js';

import './App.css';

/*const HatsPage = () => (
  <div>
    <h1> Hats Page </h1>
  </div>
);
*/

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
        });
      }
      else {
        setCurrentUser(null);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header  />
        <Switch>
          <Route exact={true} path='/' component={HomePage} />
          <Route path='/shop' component={shopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    )
  };
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
