import React from "react";
import { useLocation } from "react-router-dom";

export default function ImageOfProduct(){
    const location = useLocation()

    console.log(location.state)
    return (
        <div className="opened-img">
            <img src={location.state.src} alt={location.state.alt}/>
        </div>
    )
}