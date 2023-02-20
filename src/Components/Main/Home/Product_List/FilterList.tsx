import React from "react";
import FilterCheckbox from "./FilterCheckbox";

type Category = {
    [index:string]: string
}
interface FilterListProps{
    category: Category
    handlerCheckboxChange: (action: string) => void
}
export default function FilterList({category, handlerCheckboxChange}: FilterListProps){
    
    return (
        <div className="filter-list-container">
        {Object.keys(category).map((item:string, index) => <FilterCheckbox 
        key={index} 
        action={category[item]} 
        description={item} 
        handlerOnclick={handlerCheckboxChange}/>)}
        </div>
    )
}