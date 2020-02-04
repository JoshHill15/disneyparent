import React from "react";
import {NavLink,Route} from "react-router-dom";

export default function Header() {
    return(
        <header>
            <nav>
             <NavLink to="/">Home</NavLink>
             <NavLink to="/profile">Profile</NavLink>     
            </nav> 
        </header>
    );
}
