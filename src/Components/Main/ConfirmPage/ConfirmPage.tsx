import React from "react";
import { useLocation, Navigate } from "react-router-dom";

export default function ConfirmPage(){

    const location = useLocation()
    if(!location.state.total){
        return <Navigate to='/' replace/>
    } else {

        return (
            <div>{location.state.total}</div>
        )
    }
}