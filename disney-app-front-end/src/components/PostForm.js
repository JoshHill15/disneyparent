import React from "react";
import {useForm} from "react-hook-form";
import { connect } from 'react-redux';
import * as yup from "yup";
import { postMessage } from '../actions';


const postFormSchema = yup.object().shape({
    addTitle:yup.string().required(),
    addDesc:yup.string().required().max(256,"Your post cannot exceed 256 characters")
})


const PostForm = (props) =>{
    //const {userData,setShowPostForm, setPosts} = props
    const {register,handleSubmit,errors,reset} = useForm({
        // validationSchema:postFormSchema
    });

    // const charCount = 256-document.getElementById("addDesc").length();
    const addPost = event =>{
        /*console.log(userData,userData.posts)
        setPosts([...userData.posts, event]);
        console.log(`after` +userData + userData.posts)
        console.dir(userData.posts)*/
        const message = {
            title: event.title,
            contents: event.content
        }
        props.postMessage(message);

        reset();
        props.setShowPostForm(false);

    }

    return(
        <form onSubmit={handleSubmit(addPost)}>
            <label htmlFor="title">Title
            <input 
                type="text" 
                ref={register} 
                name="title"
                // id="addTitle"
            />
            </label>
            {errors.title && <p>{errors}</p>}

            <label htmlFor="content">Title
            <input 
                type="textarea" 
                ref={register} 
                name="content"
                // id="addDesc"
                />
            </label>
            {errors.content && <p>{errors.content.message}</p>}

            <p>256</p>
            <button>Add Post</button>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        name: state.user.name
    }
};

export default connect(mapStateToProps, {postMessage})(PostForm);