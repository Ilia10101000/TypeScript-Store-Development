import React from "react";
interface FilterListProps{
    action: string
    handlerInputChange: (action: string) => void
}
export default function FilterList({action, handlerInputChange}: FilterListProps){
    
    return (
        <label>{action}<input type='checkbox' onClick={() => handlerInputChange(action)}/></label>
    )
}