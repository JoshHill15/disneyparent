import React, {useState}from "react";
import Header from "./Header"
import {useRouteMatch} from "react-router-dom";
import {useForm} from "react-hook-form"
import PostForm from "./PostForm";


export default function Profile({user}){
    const [posts,setPosts] = useState(user.posts);

    console.log("in the profile")
    let {path,url} = useRouteMatch();
    const [showPostForm,setShowPostForm] = useState(false)
    const {register,handleSubmit,errors} = useForm();
    return(
        <div className="profile__info">
            <Header/>
            <h1>Hello {user.name}</h1>
            <button onClick={()=> setShowPostForm(true)}>Add New Post</button>
            {showPostForm?<PostForm userData={user} setShowPostForm={setShowPostForm} setPosts={setPosts}/>:null}                    
                
            {posts?posts.map(post =>{
                return(
                    <div className="post__wrapper">
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                    </div>
                )
            }):<p>No current requests</p>}
        </div>

    )

}