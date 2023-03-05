import React from "react";
import OptionCity from "./Option";

const address = ['123','432','234']

export default function ShopsAddress(){
    
    return (
        <div>
            <select>
                {address.map( (address, index) => <OptionCity key={index} name={address}/>)}
            </select>
        </div>
    )
}