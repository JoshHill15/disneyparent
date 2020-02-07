import React from "react";
import {NavLink} from "react-router-dom";

export default function Header() {
    return(
        <header>
            <nav>
             <NavLink to="/">Home</NavLink>
             <NavLink to="/login">Log In</NavLink>
             <NavLink to="/profile">Profile</NavLink>
             <NavLink to="/view-all">Current Listings</NavLink>
            </nav> 
        </header>
    );
}
