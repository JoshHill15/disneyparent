import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { retreiveMessageById, postComment } from '../actions';

const Comment = props => {
    const [contents, setContents] = useState('');

    const { id } = useParams();

    const handleChanges = e => {
        setContents(e.target.value);
    };

    useEffect(()=>{
        props.retreiveMessageById(id);
    },[id]);

    const onSubmit = e => {
        e.preventDefault();
        props.postComment(id, contents);
        props.history.push('/profile');
    }

    return (
        <>
        <div className='post-wrapper'>
            <h2>{props.post.title}</h2>
                <p>{props.post.contents}</p>
                <p>Posted by: {props.post.postedBy}</p>
        </div>
        <form onSubmit={onSubmit}>
            <input
                type='text-area'
                name='contents'
                value={contents}
                onChange={handleChanges}
            />    
            <button>Post</button>
        </form>
        </>
    )
};

const mapPropsToState = state => {
    return {
        post: state.commentPost
    }
};

export default connect(mapPropsToState, {retreiveMessageById, postComment})(Comment);