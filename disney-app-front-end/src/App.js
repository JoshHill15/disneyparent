import React, {useState} from 'react';
import {Route,Redirect} from "react-router-dom"
import './App.css';

import Header from "./components/header";
import Profile from "./components/Profile";
import LoginForm from "./components/LoginForm";


function App() {
    let isAuth = false;


  return (
    <>
    {isAuth?
      <Redirect to="/profile"/>:
      <Redirect to="/login"/>}

    <Route path="/login"><LoginForm/></Route>
    <Route path="/profile" component={Profile}/>
    <button onClick ={() => isAuth=true}>Login{isAuth}</button>
      
        

 
    </>
  );
}

export default App;
