import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { retreiveMessages } from '../actions';
import Header from './Header';

const ViewAllPosts = props => {
    useEffect(() => {
        props.retreiveMessages();
        
    },[]);

    
    return (
        
        <>
        <Header />
        <h1>Available Care Requests</h1>
        {props.allPosts ? props.allPosts.map(post => {
            return(
                <div className="post__wrapper">
                    <h2>{post.title}</h2>
                    <p>{post.contents}</p>
                    <p>Posted by: {post.postedBy}</p>
                    <button>Reply</button>
                </div>
            )}):<p>No Requests Available</p>}
        
        </>
    )
};

const mapStateToProps = state => {
    return {
        allPosts: state.allPosts
    }
};

export default connect(mapStateToProps, {retreiveMessages})(ViewAllPosts);