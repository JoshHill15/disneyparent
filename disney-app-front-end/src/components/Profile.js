import React, {useState,useEffect} from "react";
import Header from "./header"


export default function Profile(props){
    console.log("in the profile")
    return(
        
        <div className="profile__info">
            <Header/>
            <h1>Hello {props.user.email}</h1>
            {props.user.posts?props.user.posts.map(post =>{
                return(
                    <div className="post__wrapper">
                        <h2>{post.title}</h2>
                        <p>{post.location}</p>
                    </div>
                )
            }):<p>Posts go Here</p>}
        </div>

    )

}