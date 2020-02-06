import React from 'react';
import {BrowserRouter as Router, Route , Link, Switch } from "react-router-dom"
import './App.css';

import Signup from "./components/Signup";
import Profile from "./components/Profile";
import LoginForm from "./components/LoginForm";
import PrivateRoute from './components/PrivateRoute';
import ViewAllPosts from './components/ViewAllPosts';

function App() {
    /*const [isAuth, setIsAuth] = useState(false)
    const [userData, setUserData] = useState({
      email:"billnye@yahoo.com",
      password:"bill",
      posts:["Hello"]
    })*/

  return (
    <>
      <Router>
        <Switch>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path='/view-all' component={ViewAllPosts} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <Route path="/signup/" component={Signup}/>
          <Link to="/signup"> <button>Sign Up</button></Link>
        </Switch>
      </Router>
    </>
  );
}

export default App;
