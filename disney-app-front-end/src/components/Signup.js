import React from "react";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import { connect } from 'react-redux';
import { registerUser } from '../actions';


const function Signup = () => {


    const SignUpSchema = yup.object().shape({
        userName:yup.string().required(),
        email:yup.string().email().required(),
        password:yup
        .string()
        .required()
        .matches(/(?=.*[0-9]))/, "Password should contain a number")
        .min(8,"Requires 8 or more characters"),
    }) 

//Form needs to take input so it matches the shape of the expected user object
    return(
        <div>
        <h1>Join our Family</h1>
        <form>
            <label htmlFor="email">Email</label>
        </form>
        </div>
    )

    const mapStateToProps = state => {
        return {
            state
        }
    };
};

export default connect(mapStateToProps, {registerUser})(Signup);