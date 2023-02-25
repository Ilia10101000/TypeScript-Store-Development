import React from "react";
import {GoTriangleDown, GoTriangleRight} from 'react-icons/go'
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
    const [screenWidth, setScreenWidth] = React.useState(window.screen.width);

    React.useEffect(() => {
        
        function handleResize(){
            setScreenWidth(window.innerWidth)
        }
        
        window.addEventListener('resize', handleResize)
        setScreenWidth(window.innerWidth)
        
        return () => window.removeEventListener('resize', handleResize)
    },[])

    function toogleVisibilityFilterList(){
        setVisibilityFilterList(state => !state)
    }

    return (
        <div className="filter-list-container">
            <div className={screenWidth < 767?'filter-button-container':'hidden-element'}>
                <button className="filter-button" onClick={toogleVisibilityFilterList}>Filter {visibilityFilterList?<GoTriangleDown/>:<GoTriangleRight/>}</button>
            </div>
            <div className={screenWidth < 767?'hidden-element':'filter-category'}>Category</div>
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