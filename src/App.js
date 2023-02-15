<<<<<<< HEAD
import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
=======
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import './App.css';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import LoadingScreen from './screens/LoadingScreen';

import { auth } from './firebase';
import { loading, login, logout, selectLoadingStatus, selectUser } from './features/userSlice';



function App() {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  const loadingStatus = useSelector(selectLoadingStatus);

  useEffect(() => {
    dispatch(loading(true));

    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {

        const { uid, email } = userAuth;
        dispatch(login({
          uid,
          email
        }));

      } else {
        // Logged out
        dispatch(logout());
      }
    })

    return unsubscribe;
  }, [dispatch])


  const renderContent = () => {
    return !user ?
      <LoginScreen /> :
      <Switch>
        <Route path='/profile'>
          <ProfileScreen />
        </Route>
        <Route exact path="/">
          <HomeScreen />
        </Route>
      </Switch>;
  }

  return (
    <div className="app">
      <Router>
        {
          loadingStatus === false ?
            renderContent() :
            <LoadingScreen />
        }
      </Router>
>>>>>>> e7a7532 (preReleaseWithoutStipe)
    </div>
  );
}

export default App;
