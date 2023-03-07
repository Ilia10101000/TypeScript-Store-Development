import React from "react";
import { NavLink } from "react-router-dom";

export default function PageHasNotFound(){

    return (
        <>
        <div style={{color: '#ff0000', fontFamily: 'sans-serif', marginBottom:'15px'}} className="not-fount">Page has not found</div>
        <NavLink to='/'><button className="confirm-button">Home</button></NavLink>
        </>
    )
}