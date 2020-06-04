import React from "react";
import { useForm } from "react-hook-form"
import * as yup from 'yup';
import { connect } from 'react-redux';
import { registerUser } from '../actions';
import styled from "styled-components";
import { useHistory } from "react-router-dom"

const StyledWrapper = styled.div`
    display:grid;
    grid-template-columns:2fr 3fr;
    & .left__container{
        height:100vh;
        font-size:.8rem;
        grid-template-rows: 5% 95%;
        grid-template-areas:
            "... header ..."
            "... form ...";
            & h1{
                grid-area:header;
            }
            & form{
                
                font-size:1rem;
                grid-area:form;
                grid-template-rows:none;
                grid-template-rows:repeat(15 max-content) 20vh;
            }
            & label{
                font-size:.8rem;
            }
            & input{
                font-size:.8rem;
                height:3vh;
                line-height:1rem;
                width:80%;
                margin: 0 auto;
            }
            & .radio__group{
                display:grid;
                grid-template-columns:20% 20% 20% 20% 20%;
                
                
                align-items:center;
                & p{
                    display:block;
                }
                & label{
                    width:10%;
                }
                
            }
            & .create__button{
                height:8vh;
            }
   
    }
    `;
const Signup = (props) => {
    const History = useHistory()
    const SignUpSchema = yup.object().shape({
        username: yup.string().required(),
        email: yup.string().email().required(),
        password: yup
            .string()
            .required()
            // .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, "Password should contain a number")
            .min(8, "Requires 8 or more characters"),
        location: yup.string().required(),
        role: yup.string().required("You must select a Role"),
        noOfChildren: yup.number().moreThan(0).positive(),
        phone: yup.number().min(10, "You must enter a valid Phone Number")



    })
    const { register, handleSubmit, errors } = useForm({
        validationSchema: SignUpSchema
    });
    const createUser = event => {
        props.registerUser(event);
        History.push("/")
        /*
 
         axios
             // .post('https://backendci-disneyparents.herokuapp.com/api/users/register',event)
             .then(response=>{
             })
             .catch(error =>{
                 console.log(error)
             })*/
    }


    return (
        <StyledWrapper>
            <div className="left__container">
                <h1>Join our Family</h1>
                <form onSubmit={handleSubmit(createUser)}>
                    <label htmlFor="username">username</label>
                    <input
                        type="text"
                        name="username"
                        ref={register}
                        placeholder="Family Name"
                        id="username"
                    />
                    {errors.username && <p>{errors.username.message}</p>}

                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        ref={register}
                        id="name"
                    />
                    {errors.name && <p>{errors.name.message}</p>}

                    <label htmlFor="email">E-mail</label>
                    <input
                        type="email"
                        name="email"
                        ref={register}
                        placeholder="Enter E-mail"
                        id="email"
                    />
                    {errors.email && <p>{errors.email.message}</p>}

                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        ref={register}
                        placeholder="password"
                        id="password"
                    />
                    {errors.password && <p>{errors.password.message}</p>}

                    <label htmlFor="location">Location</label>
                    <input
                        type="text"
                        name="location"
                        ref={register}
                        placeholder="location"
                        id="location"
                    />
                    {errors.location && <p>{errors.location.message}</p>}
                    <div className="radio__group">
                        <p>Are you a</p>
                        <label htmlFor="parent">Parent</label>
                        <input
                            type="radio"
                            name="role"
                            ref={register}
                            id="parent"
                        />
                        <label htmlFor="caregiver">Caregiver</label>
                        <input
                            type="radio"
                            name="role"
                            ref={register}
                            id="caregiver"
                        />
                        {errors.role && <p>{errors.role.message}</p>}
                    </div>
                    <label htmlFor="numberOfChildren">Number of children</label>
                    <input
                        type="text"
                        name="numberOfChildren"
                        ref={register}
                        placeholder="numberOfChildren"
                    />
                    {errors.numberOfChildren && <p>{errors.numberOfChildren.message}</p>}

                    <label htmlFor="phone">Phone Number</label>
                    <input
                        type="text"
                        name="phone"
                        ref={register}
                        placeholder="phone"
                    />
                    {errors.phone && <p>{errors.phone.message}</p>}

                    <button className="create__button" type='submit'>Create Account</button>
                </form>
            </div>
            <div className="signup__right__container" />
        </StyledWrapper>
    )



};

const mapStateToProps = state => {
    return {
        state
    }
};



export default connect(mapStateToProps, { registerUser })(Signup);