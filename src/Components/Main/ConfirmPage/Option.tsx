import React from "react";

interface OptionCityProps{
    name: string
    setValue: (name:string) => void
}

export default function Option({name, setValue}: OptionCityProps){

    return <div onClick={() => setValue(name)}>{name}</div>
}