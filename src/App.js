import React, {useState} from 'react'
import Login from './Components/Login/Login';
import {loginFetch} from './Apis/Login';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from './Components/Register/Register'
import {AppContext} from './Contexts/AppContext'

function App() {

  return (
    <AppContext.Provider>
      <Router>
        

        <Switch>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/">
              <Login loginApi={loginFetch}></Login>
            </Route>
        </Switch>
      </Router>
    </AppContext.Provider>
    
  );
}

export default App;
