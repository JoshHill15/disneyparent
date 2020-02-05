import React from 'react';
import {useForm} from "react-hook-form";
import * as yup from "yup";

//import {DummyData} from "../dummyData"
import { connect } from 'react-redux';
import { login } from '../actions';

const LoginSchema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required()
  })
  
const LoginForm = (props) => {

    //const mockData = DummyData;

    const {register,handleSubmit,errors} = useForm({
        validationSchema: LoginSchema
    })
    

    // const [isAuth,setIsAuth] = useState(false);

    // const [userData, setUserData] = useState({
    //     username:"",
    //     password:"",
    //     comments:[]
    // })

    const onSubmit = data =>{
        /*console.log("submitting")
        if(data.username===mockData.username && data.password===mockData.password){
            props.setUserData(mockData);
            props.setIsAuth(true);
        }*/
        props.login(data);
        props.history.push('/profile')
    }

    //Documentation says that login information is username and password
    return (
        <div className="loginWrapper">
        <h1>The Happiest Place on Earth for Everyone</h1>
        <form onSubmit = {handleSubmit(onSubmit)}>
            <label htmlFor="username">Username
                <input 
                    type="text" 
                    name="username" 
                    id="username"
                    ref={register}/>
                {errors.username && <p>{errors.username.message}</p>}
            </label>
            <label htmlFor="password">password
                <input 
                    type="password" 
                    name="password" 
                    id="password"
                    ref={register}/>
                {errors.password && <p>{errors.password.message}</p>}
            </label>
            <button>Sign In</button>
        </form>
        </div>
    );
};

const mapStateToProps = state => {
    return (
        state
    );
};

export default connect(mapStateToProps, {login})(LoginForm);