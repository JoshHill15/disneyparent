import React, { useState, useEffect }from "react";
import Header from "./Header"
import {useRouteMatch} from "react-router-dom";
import {useForm} from "react-hook-form";
import { connect } from 'react-redux';
import PostForm from "./PostForm";
import EditPostForm from './EditPostForm';
import { getUserData, deleteMessage } from '../actions';


const Profile = props => {
    //const [posts,setPosts] = useState(user.posts);

     useEffect(() => {
        props.getUserData();
    },[]);

    const { path, url } = useRouteMatch();
    const [showPostForm,setShowPostForm] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);

       
    return(
        <div className="profile__info">
            <Header/>
            <h1>Hello {props.name}</h1>
            <button onClick={()=> setShowPostForm(true)}>Add New Post</button>
            {showPostForm?<PostForm setShowPostForm={setShowPostForm}/>:null}                    
                
            {props.posts?props.posts.map(post =>{
                return(
                    <>
                    <div className="post__wrapper">
                        <h2>{post.title}</h2>
                        <p>{post.contents}</p>
                        <p>Posted by: {post.postedBy}</p>
                        <button onClick={() => setShowEditForm(true)}>Edit</button><button onClick={() => props.deleteMessage(post.id)}>Delete</button>
                    </div>
                    <div>{showEditForm?<EditPostForm setShowEditForm={setShowEditForm} post={post}/>:null}</div>
                    </>
                )
            }):<p>No current requests</p>}
        </div>

    )

};

const mapStateToProps = state => {
    return {
        name: state.user.name,
        posts: state.posts
    }
};

export default connect(mapStateToProps, {getUserData, deleteMessage})(Profile);