import React, {useState} from "react";
import {useForm} from "react-hook-form";
import { connect } from 'react-redux';
import { updateMessage } from '../actions';


const EditPostForm = (props) =>{
    
    const [newMessage, setNewMessage] = useState({
        title: props.post.title,
        content: props.post.contents
    });

    const handleChanges = e => {
        setNewMessage({[e.target.name] : e.target.value})
    }
    
    const addPost = newMessage =>{
        props.updateMessage(props.post.id, newMessage);
        props.setShowEditForm(false);
    }

    return(
        <form onSubmit={addPost}>
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
                name="content"
                value={newMessage.content}
                onChange={handleChanges}
            />
            </label>

            <button>Update Post</button>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        name: state.user.name
    }
};

export default connect(mapStateToProps, {updateMessage})(EditPostForm);