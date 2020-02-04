import React, {useState,useEffect} from 'react';
import { Link } from "react-router-dom";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import axios from "axios";




const LoginSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required()
  })






const LoginForm = () => {

    const {register,handleSubmit,errors} = useForm({
        validationSchema: LoginSchema
    })
    const onSubmit = data =>{
        console.log(data)
        useEffect(() =>{
            axios.post("https://sqlite3-test.herokuapp.com/api/auth/login",data)
            .then(response =>{
                console.log(response)
            })
            .catch(error =>{
                console.log(error)
            })
        })
    }

    return (
        <form onSubmit = {handleSubmit(onSubmit)}>
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
};
export default LoginForm;