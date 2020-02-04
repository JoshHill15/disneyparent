import React, {useState} from 'react';
import {Route,Redirect} from "react-router-dom"
import './App.css';

import Header from "./components/header";
import Profile from "./components/Profile";
import LoginForm from "./components/LoginForm";


function App() {
    const [isAuth, setIsAuth] = useState(false)
    const [userData, setUserData] = useState({
      email:"billnye@yahoo.com",
      password:"bill"
    })

    console.log(isAuth);
    console.log(`userData: ${userData.email}, ${userData.password}`)
  return (
    <>
    {isAuth?
      <Redirect to="/profile"/>:
      <Redirect to="/login"/>}

    <Route path="/login">
      <LoginForm setUserData={setUserData}setIsAuth={setIsAuth}/>
    </Route>
    <Route path="/profile">
      <Profile user={userData}/>
    </Route>
    <button onClick ={() => setIsAuth(true)}>Login</button>
      
        

 
    </>
  );
}

export default App;
