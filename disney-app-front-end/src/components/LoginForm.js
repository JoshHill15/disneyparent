import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useHistory } from 'react-router-dom';
import * as yup from "yup";
import { axiosWithAuth } from '../utils/axiosWithAuth';


//import {DummyData} from "../dummyData"
import { connect } from 'react-redux';
import { login } from '../actions';
import "./login.css";
import styled from "styled-components";


const StyledWrapper = styled.div`
display:grid;
grid-template-columns:2fr 3fr;
height:100vh;
`;

const LoginSchema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required()
})

const LoginForm = (props) => {
    const history = useHistory()
    const [error, setError] = useState("")

    //const mockData = DummyData;

    const { register, handleSubmit, errors } = useForm({
        validationSchema: LoginSchema
    })


    // const [isAuth,setIsAuth] = useState(false);

    // const [userData, setUserData] = useState({
    //     username:"",
    //     password:"",
    //     comments:[]
    // })

    const onSubmit = data => {
        axiosWithAuth()
            .post('/api/users/login', data)
            .then(response => {
                localStorage.setItem('token', response.data.token);
                props.login(data);
                history.push('/profile');
            })
            .catch(error => {
                console.log('Error', error);
                setError("Invalid Username or Password.")
                props.login(data)
            });
    }

    return (
        <StyledWrapper className="loginWrapper">
            <div className="left__container">
                <div className="logo" />
                {error && <p>{error}</p>}
                <h1>The Happiest Place on Earth for Everyone</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="username">Username
                <input
                            type="text"
                            name="username"
                            id="username"
                            ref={register} />
                        {errors.username && <p>{errors.username.message}</p>}
                    </label>
                    <label htmlFor="password">Password
                <input
                            type="password"
                            name="password"
                            id="password"
                            ref={register} />
                        {errors.password && <p>{errors.password.message}</p>}
                    </label>
                    <button>Sign In</button>
                </form>
                <button className="signup__button"><Link to="/signup">Sign Up</Link></button>
            </div>
            <div className="right__container" />
        </StyledWrapper>

    );
};

const mapStateToProps = state => {
    return (
        state
    );
};

export default connect(mapStateToProps, { login })(LoginForm);
