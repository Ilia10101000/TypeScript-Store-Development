import React from "react";
import { NavLink } from "react-router-dom";

export function Links(){

    return (
        <div className="navbar-links-container">
        <div className="navbar-links">
            <div><NavLink to="/">Home</NavLink></div>
            <div><NavLink to="about">About</NavLink></div>
            <div><NavLink to="reviews">Reviews</NavLink></div>
        </div>
        </div>
    )
}