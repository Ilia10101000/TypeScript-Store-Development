import React from "react";
import { useNavigate } from "react-router-dom";


interface ConfirmButton{
    city: string
    address: string
    type: string
    total: string
}
export default function ConfirmButton({city, address, type, total}: ConfirmButton){

    const navigate = useNavigate()

    if(city && address && type){

        const makeOrder = () => {
            navigate('/final-page',{state:{city,address,type,total}, replace:true})
        }

        return (
            <div><button onClick={makeOrder} className="confirm-button">Make order</button></div>
        )
    } else {
        return null
    }
}