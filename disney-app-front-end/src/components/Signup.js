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
        .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, "Password should contain a number")
        .min(8,"Requires 8 or more characters"),
        noOfChildren:yup.number().moreThan(0).positive()
        
    }) 
    const{ register, handleSubmit,errors} = useForm({
        validationSchema: SignUpSchema
    });
    const createUser = event =>{
        console.log(event)
    }

    return(
        <div>
            <h1>Join our Family</h1>
            <form onSubmit={handleSubmit(createUser)}>
                <label htmlFor="userName">Username</label>
                <input 
                    type="text" 
                    name="userName" 
                    ref={register} 
                    placeholder="Family Name"
                />
                {errors.userName && <p>{errors.userName.message}</p>}
                <label htmlFor="email">E-mail</label>
                <input 
                    type="email" 
                    name="email" 
                    ref={register} 
                    placeholder="Enter E-mail"
                />
                {errors.email && <p>{errors.email.message}</p>}
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    name="password" 
                    ref={register} 
                    placeholder="password"
                />
                {errors.password && <p>{errors.password.message}</p>}
                <label htmlFor="password">Number of Children</label>
                <input 
                    type="text" 
                    name="noOfChildren" 
                    ref={register} 
                    placeholder="noOfChildren"
                />
                {errors.noOfChildren && <p>{errors.noOfChildren.message}</p>}
                <button>Create Account</button>
            </form>
        </div>
    )
}