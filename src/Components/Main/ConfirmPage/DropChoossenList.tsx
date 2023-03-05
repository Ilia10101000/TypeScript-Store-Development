import React from "react";

interface ListProps{
    description? : string
    present?: string
    city?: string
    setCity?: (name:string, city:string) => void
    setDeliveryPoint?: (name:string) => void
}

export default function DropChoossenList({description,present,city, setCity, setDeliveryPoint}: ListProps){

    if(present && city && setCity){
        return (
            <div onClick={() => setCity(present,city)}>{present}</div>
        )
    }
     else if(description && setDeliveryPoint){
        return (
            <div onClick={() => setDeliveryPoint(description)}>{description}</div>
        )
    }
}