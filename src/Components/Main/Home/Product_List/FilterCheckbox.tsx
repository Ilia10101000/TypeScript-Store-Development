import React from "react";

interface FilterCheckboxProps{
    action: string
    description: string
    handlerOnclick: (category:string) => void
}

export default function FilterCheckbox({action, description, handlerOnclick}:FilterCheckboxProps){

    return <label><input type='checkbox' onClick={() => handlerOnclick(action)}/> {description}</label>
}