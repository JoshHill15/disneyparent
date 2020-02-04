import React from "react";
import {useForm} from "react-hook-form"
import * as yup from "yup"


export default function Signup(){


    const SignUpSchema = yup.object().shape({
        userName:yup.string().required(),
        email:yup.string().email().required(),
        password:yup
        .string()
        .required()
        .matches(/(?=.*[0-9]))/, "Password should contain a number")
        .min(8,"Requires 8 or more characters"),
    }) 


    return(
        <div>
        <h1>Join our Family</h1>
        <form>
            <label htmlFor="email">Email</label>
        </form>
        </div>
    )
}