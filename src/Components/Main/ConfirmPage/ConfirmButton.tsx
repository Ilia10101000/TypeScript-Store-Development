import React from "react";
import { useNavigate } from "react-router-dom";


interface ConfirmButton{
    city: string
    address: string
    type: string
}
export default function ConfirmButton({city, address, type}: ConfirmButton){

    const navigate = useNavigate()

    if(city && address && type){

        const makeOrder = () => {
            navigate('/finish-page',{state:{city,address,type}})
        }

        return (
            <button onClick={makeOrder} className="confirm-button">Make order</button>
        )
    } else {
        return null
    }
}