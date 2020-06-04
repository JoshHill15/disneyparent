import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { retreiveMessageById, postComment } from '../actions';
import { useHistory } from "react-router-dom"
const Comment = props => {
    const [contents, setContents] = useState('');
    const History = useHistory()
    const { id } = useParams();

    const handleChanges = e => {
        setContents(e.target.value);
    };

    useEffect(() => {
        props.retreiveMessageById(id);
        console.log(props.post)
    }, [id]);

    const onSubmit = e => {
        e.preventDefault();
        props.postComment(id, contents);
        History.push('/profile');
    }

    return (
        <>
            <div className='post-wrapper'>
                <h2>{props.post.title}</h2>
                <p>{props.post.content}</p>
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

export default connect(mapPropsToState, { retreiveMessageById, postComment })(Comment);