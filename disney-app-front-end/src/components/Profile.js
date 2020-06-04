import React, { useState, useEffect } from "react";
import Header from "./Header"

import { connect } from 'react-redux';
import PostForm from "./PostForm";
import EditPostForm from './EditPostForm';
import { getUserData, deleteMessage } from '../actions';
import styled from "styled-components";


const StyledProfile = styled.div`
display:grid;
grid-template columns: 50% 50%;
grid-template-rows: 20% 1fr 60%;
grid-template-areas: 
    "header  header"
    "button button"
    "posts  posts";
    

  

    & h1{
        grid-area:header;
        

    }
    & .edit__post{
        font-size:.7rem;
        grid-area:button;
        margin:5vw;
        width:50%;
        & button{
            height:4vh;
            width:30%;
        }
    }
    & .post__container{
        height:75vh;
        grid-area:posts;
        display:flex;
        flex-wrap:wrap;
       
      
        & button{
            font-size:.8rem;
            height:3vh;
            width:5vw;
            margin: 0 3% 0 3%;
        }

        & .post__wrapper{
            box-shadow:1px 0 3px #453db0;
            border:1px solid blue;
            width:25%;
            min-width:25%;
            height:25vh;
            margin:3%;
            position:relative;
            padding:1%;
         

            & p{
                text-align:left;
                font-size:1.4rem;
                color: #453db0;
                margin:3%;
            }
         
        }
    }
`;

const Profile = props => {
    //const [posts,setPosts] = useState(user.posts);
    console.log("props", props)

    const [showPostForm, setShowPostForm] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);

    useEffect(() => {
        console.log("lfjd")
        props.getUserData();
    }, [showPostForm, showEditForm]);



    const sendToComment = id => {
        props.history.push(`/comment/${id}`)
    }

    return (
        <>
            <Header />
            <StyledProfile className="profile__info">

                <h1>Hello {props.name}</h1>
                <div className="edit__post">
                    <button onClick={() => setShowPostForm(true)}>Add New Post</button>
                    {showPostForm ? <PostForm setShowPostForm={setShowPostForm} posts={props.posts} /> : null}
                </div>
                <div className="post__container">
                    {props.posts ? props.posts.map((post, i) => {
                        return (

                            <div className="post__wrapper">
                                <h2>{post.title}</h2>
                                <p>{post.contents}</p>
                                <p>Posted by: {post.postedBy}</p>
                                <button onClick={(e) => {
                                    setShowEditForm(true)
                                    e.stopPropagation()
                                }}>Edit</button><button onClick={() => props.deleteMessage(post.id)}>Delete</button>
                                <button
                                    onClick={() => sendToComment(post.id)}>Reply
                            </button>
                                <div>{showEditForm ? <EditPostForm setShowEditForm={setShowEditForm} post={post} /> : null}</div>
                            </div>

                        )
                    }) : <p>No current requests</p>}
                </div>
            </StyledProfile>
        </>
    )

};

const mapStateToProps = state => {
    return {
        name: state.user.name,
        posts: state.posts
    }
};

export default connect(mapStateToProps, { getUserData, deleteMessage })(Profile);