import React, {useState} from 'react';
import logo from './logo.svg';
import {Route,Redirect} from "react-router-dom"
import './App.css';

import Header from "./components/header";
import useForm from "./hooks/useForm";
import DummyData from "./DummyData";
import Profile from "./components/Profile";
import LoginForm from "./components/loginForm";


function App() {
  let isAuth = false
  const [{email, password }, handleChange] = useForm({
    email: "",
    password: ""
  });
  const authenticate = (email,password) =>{
      console.log("Authenticating")
      if(email===DummyData.email && password===DummyData.password){
        isAuth = true
        console.log(isAuth)

      }
    
  }
  const handleSubmit = (event) =>{
    console.log("submitting")
    event.preventDefault();
    authenticate(email,password)
  }


  return (
    <>
    <Header/>
    <h1>The Happiest Place on Earth for Everyone</h1>
    <LoginForm/>
        

 
    </>
  );
}

export default App;
