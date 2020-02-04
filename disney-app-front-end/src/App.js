import React, {useState} from 'react';
import logo from './logo.svg';
import {Route,Link,Redirect} from "react-router-dom"
import './App.css';

import Header from "./components/header";
import useForm from "./hooks/useForm";
import DummyData from "./DummyData";
import Profile from "./components/Profile";
import SignUp from "./components/SignUp";


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
        
      <form onSubmit ={handleSubmit}>

        <label htmlFor="email">Email
        <input
          type="email"
          name="email"
          id="email"
          placeholder="E-mail"
          value={email}
          onChange={handleChange}
        />
        </label>
        <label htmlFor="password">Password
          <input 
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange = {handleChange} 
            onBlur = {handleChange} 
            />
        </label>
        <button>Sign In </button>
        <button> <Link to="/signup">Sign Up</Link> </button>
        
      </form>
      <Route path="/signup" component={SignUp}/>
      <Route path="/profile" component={Profile}/>
    </>
  );
}

export default App;
