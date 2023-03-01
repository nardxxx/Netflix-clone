
import React, { useEffect } from 'react';
import './App.css';
import LoginScreen from './screens/LoginScreen';


import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { loading, login, logout, selectLoadingStatus, selectUser } from './features/userSlice';

import {
  // BrowserRouter as Router,
  HashRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import ProfileScreen from './screens/ProfileScreen';
import LoadingScreen from './screens/LoadingScreen';
import HomeScreen from './screens/HomeScreen';

function App() {
  const user = useSelector(selectUser);
  const loadingStatus = useSelector(selectLoadingStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        const { uid, email } = userAuth;

        dispatch(login({
          uid,
          email
        }))
      } else {
        // Logged out
        dispatch(logout());
      }
    })

    return unsubscribe;
  }, [dispatch])


  const renderContent = () => {
    if (loadingStatus === true) { return <LoadingScreen /> }
    else return (
      !user
        ? (<LoginScreen />)
        : (
          <Switch>
            <Route path='/profile'>
              <ProfileScreen />
            </Route>
            <Route exact path="/">
              <HomeScreen />
            </Route>
          </Switch>
        )
    )
  }

  return (
    <div className="app">
      <Router>
        {renderContent()}
      </Router>
    </div>
  );
}

export default App;
