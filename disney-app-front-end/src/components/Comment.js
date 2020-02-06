import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { retreiveMessageById, postComment } from '../actions';

const Comment = props => {
    const [comment, setComment] = useState({
        contents: ''
    });

    const { id } = useParams();

    const handleChanges = e => {
        setComment([e.target.name] = e.target.value);
    };

    useEffect(()=>{
        props.retreiveMessageById(id);
    },[id]);

    const onSubmit = e => {
        e.preventDefault();
        props.postComment(id, comment);
        props.history.push('/profile');
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type='text-area'
                name='contents'
                value={comment}
                onChange={handleChanges}
            />    
            <button>Post</button>
        </form>
    )
};

const mapPropsToState = state => {
    return {
        state
    }
};

export default connect(mapPropsToState, {retreiveMessageById, postComment})(Comment);