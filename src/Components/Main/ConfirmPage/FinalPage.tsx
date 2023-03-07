import React from "react";
import { useLocation, Navigate, NavLink } from "react-router-dom";

export default function FinalPage(){

    const location = useLocation();

    if(location.state.type === 'pickup'){
        return(
            <div className="final-page-container">
                <div>Order number: <b>{new Array(6).fill(0).map(number => number + Math.floor(Math.random() * (10)) )}</b></div>
                <div>Total: <b>{location.state.total}$</b></div>
                <div>Pick up address: <b>{location.state.city}, {location.state.address}</b></div>
                <div><NavLink to='/' replace><button className="confirm-button">Home</button></NavLink></div>
            </div>
        )
    } else if(location.state.type === 'delivery'){
        return(
            <div className="final-page-container">
                <div>Order number: <b>{new Array(6).fill(0).map(number => number + Math.floor(Math.random() * (10)) )}</b></div>
                <div>Total: <b>{location.state.total}$</b></div>
                <div>Delivery address: <b>{location.state.city}, {location.state.address}</b></div>
                <div>Wait info details from delivery office</div>
                <div><NavLink to='/' replace><button className="confirm-button">Home</button></NavLink></div>
            </div>
        )
    } else {
        return <Navigate to='/' replace/>
    }

}