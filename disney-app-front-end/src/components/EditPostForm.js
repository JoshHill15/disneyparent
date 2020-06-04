import React, { useState } from "react";
import { connect } from 'react-redux';
import { updateMessage, getUserData } from '../actions';
import styled from "styled-components";



const StyledEdit = styled.form`
position:absolute;
left: 0;
top:5%;
width: 100%;
background-color: white;
    & input{
        font-size: 1rem;
        line-height: 2.5rem;
        padding: 0 5%;
       
    }
   
    & label {
        margin: 0 auto 5%;
    }
    &  .update__button{
        width: 7vw !important;
        margin: 0 3% 0 12% !important;
    }
`;


const EditPostForm = (props) => {

    const [newMessage, setNewMessage] = useState({
        title: props.post.title,
        contents: props.post.contents
    });

    const handleChanges = e => {
        setNewMessage({ [e.target.name]: e.target.value })
        console.log(e.target.name);
    }

    const addPost = e => {
        e.preventDefault();
        props.updateMessage(props.post.id, newMessage);
        props.setShowEditForm(false);
    }

    return (
        <StyledEdit onSubmit={addPost}>
            <label htmlFor="title">Title
            <input
                    type="text"
                    name="title"
                    value={newMessage.title}
                    onChange={handleChanges}
                />
            </label>

            <label htmlFor="content">Title
            <input
                    type="textarea"
                    name="contents"
                    value={newMessage.contents}
                    onChange={handleChanges}
                />
            </label>

            <button className="update__button">Update Post</button>
        </StyledEdit>

    )
}

const mapStateToProps = state => {
    return {
        name: state.user.name
    }
};

export default connect(mapStateToProps, { updateMessage })(EditPostForm);