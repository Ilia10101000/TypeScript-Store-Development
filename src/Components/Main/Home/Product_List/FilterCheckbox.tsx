import React from "react";

interface FilterCheckboxProps{
    action: string
    description: string
    handlerOnclick: (category:string) => void
    checked: boolean
}

export default function FilterCheckbox({action, description, checked, handlerOnclick}:FilterCheckboxProps){

    return <div className="checkbox-item"><label><input type='checkbox' onClick={() => handlerOnclick(action)} checked={checked}/> {description}</label></div>
}