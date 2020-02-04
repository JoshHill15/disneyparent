import React, {useState,useEffect} from 'react';
import { Link } from "react-router-dom";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import axios from "axios";








const LoginSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required()
  })



function OnSubmit(data){
    console.log(data)
  
}


const LoginForm = () => {

    const {register,handleSubmit,errors} = useForm({
        validationSchema: LoginSchema
    })
 

    return (
        <div className="loginWrapper">
        <h1>The Happiest Place on Earth for Everyone</h1>
        <form onSubmit = {handleSubmit(OnSubmit)}>
            <label htmlFor="Email">Email
                <input 
                    type="text" 
                    name="email" 
                    ref={register}/>
                {errors.email && <p>{errors.email.message}</p>}
            </label>
            <label htmlFor="password">password
                <input 
                    type="password" 
                    name="password" 
                    ref={register}/>
                {errors.password && <p>{errors.password.message}</p>}
            </label>
            <button>Sign In</button>
        </form>);
        </div>
    )
};
export default LoginForm;