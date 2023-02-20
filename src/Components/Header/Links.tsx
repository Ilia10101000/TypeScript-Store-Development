import React from "react";
import { NavLink } from "react-router-dom";

export function Links(){

    return (
        <div className="navbar-links-container">
        <div className="navbar-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="reviews">Reviews</NavLink>
        </div>
        </div>
    )
}