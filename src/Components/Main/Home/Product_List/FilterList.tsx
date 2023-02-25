import React from "react";
import FilterCheckbox from "./FilterCheckbox";

type Category = {
    [index:string]: string
}
interface FilterListProps{
    category: Category
    handlerCheckboxChange: (action: string) => void
    selectedCategotyOfProducts: string[]
}
export default function FilterList({category,selectedCategotyOfProducts, handlerCheckboxChange}: FilterListProps){
    
    const [visibilityFilterList, setVisibilityFilterList] = React.useState<boolean>(false)

    function toogleVisibilityFilterList(){
        setVisibilityFilterList(state => !state)
    }

    return (
        <div className="filter-list-container">
            <div className="filter-button-container">
                <button className="filter-button" onClick={toogleVisibilityFilterList}>Filter</button>
            </div>
            {/* <div className="filter-list"> */}
            <div className={`filter-list ${visibilityFilterList?'':'hidden-filter-list'}`}>
                {Object.keys(category).map((item:string, index) => <FilterCheckbox 
                key={index} 
                action={category[item]} 
                description={item} 
                checked={selectedCategotyOfProducts.includes(category[item])}
                handlerOnclick={handlerCheckboxChange}/>)}
             </div>
         </div>
    )
}