import React from "react";

interface OptionCityProps{
    name: string
}

export default function Option({name}: OptionCityProps){

    return <option>{name}</option>
}