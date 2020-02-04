import React from "react";
import useForm from "../hooks/useForm"

export default function Signup(){
    const initialState = {
        email:"",
        password:"",
        numberOfKids:0
    }

    const [values,handleChange] = useForm(initialState)


    return(
        <div>
        <h1>Join our Family</h1>
        <form>
            <label htmlFor="email">Email</label>
        </form>
        </div>
    )
}