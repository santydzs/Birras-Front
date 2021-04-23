import React, {useState} from 'react'
import Login from './Components/Login/Login';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from './Components/Register/Register'
import {AppContext} from './Contexts/AppContext'
import Main from './Components/Main/Main'

function App() {
  const [auth, setAuth] = useState({});

  return (
    <AppContext.Provider value={auth}>
      <Router>
        

        <Switch>
            <Route path="/main">
              <Main />
            </Route>
            <Route path="/register">
              <Register setAuth={setAuth}/>
            </Route>
            <Route path="/">
              <Login setAuth={setAuth}></Login>
            </Route>
        </Switch>
      </Router>
    </AppContext.Provider>
    
  );
}

export default App;
