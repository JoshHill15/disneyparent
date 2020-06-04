import React from "react";
import { useForm } from "react-hook-form";
import { connect } from 'react-redux';
import { postMessage } from '../actions';
import styled from "styled-components";


// const postFormSchema = yup.object().shape({
//     addTitle:yup.string().required(),
//     addDesc:yup.string().required().max(256,"Your post cannot exceed 256 characters")
// })

const StyledPost = styled.div`
margin-top:2%;
    & button{
        text-align:center;
        margin-top:4%;
    }
`;




const PostForm = (props) => {
    //const {userData,setShowPostForm, setPosts} = props
    const { register, handleSubmit, errors, reset } = useForm({
        // validationSchema:postFormSchema
    });
    console.log("post porops", props)
    // const charCount = 256-document.getElementById("addDesc").length();
    const addPost = event => {
        /*console.log(userData,userData.posts)
        setPosts([...userData.posts, event]);
        console.log(`after` +userData + userData.posts)
        console.dir(userData.posts)*/
        const message = {
            title: event.title,
            contents: event.content
        }
        props.postMessage(message);
        props.posts.push(message)
        reset();
        props.setShowPostForm(false);

    }

    return (
        <StyledPost>
            <form>
                <label htmlFor="title">Title
            <input
                        type="text"
                        ref={register}
                        name="title"
                    // id="addTitle"
                    />
                </label>
                {errors.title && <p>{errors}</p>}

                <label htmlFor="content">content
            <input
                        type="textarea"
                        ref={register}
                        name="content"
                    // id="addDesc"
                    />
                </label>
                {errors.content && <p>{errors.content.message}</p>}
                <button onClick={handleSubmit(addPost)}>Add Post</button>
                <br></br>
                <button onClick={e => props.setShowPostForm(false)}>Cancel</button>

            </form>
        </StyledPost>
    )
}

const mapStateToProps = state => {
    return {
        name: state.user.name
    }
};

export default connect(mapStateToProps, { postMessage })(PostForm);