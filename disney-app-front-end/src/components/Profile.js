import React, {useState,useEffect} from "react";
import Header from "./header"


export default function Profile(props){

    return(
        <>
        <div className="profile__info">
            <h1>Hello {props.user.email}</h1>
        </div>
        </>
    )

}