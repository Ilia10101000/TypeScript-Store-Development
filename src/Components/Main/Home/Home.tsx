import React from "react";
import FilterList from "./Product_List/FilterList";
import { ProductList } from "./Product_List/ProductList";
import { ProductListData } from '../../../Hook/ProductContext';
import { IShoppingProduct } from "../../../interface";

const category = {
    'одяг для чоловіків':`men's clothing`,
    'прикраси':`jewelery`,
    'електроніка':`electronics`,
    'одяг для жінок':`women's clothing`
}

type CategoryType = Array<string> 

export default function Home(){

    const data = React.useContext(ProductListData);
    
    const [displayedProductList, setDisplayedProductList] = React.useState<IShoppingProduct[]>([])
    const [typeofCategory, setTypeofCategory] = React.useState<CategoryType>([])
    
    React.useEffect(()=>{ setDisplayedProductList(data) },[data])
    React.useEffect(() => { updateDisplayedProductList(typeofCategory); console.log(typeofCategory) },[typeofCategory])

    function updateDisplayedProductList(updatedArrayOfCategory:string[]){
        if(!updatedArrayOfCategory.length){
            setDisplayedProductList(data) 
            return
        }
        setDisplayedProductList(displayedProductList.filter( product => updatedArrayOfCategory.includes(product.category))) 
        console.log(data)
    }

    function setCategory(kindofCategory: string){

        let copyOfSettedCategory = [...typeofCategory];

        if(copyOfSettedCategory.includes(kindofCategory)){
            let position = copyOfSettedCategory.indexOf(kindofCategory);
            copyOfSettedCategory.splice(position, position + 1);
        } else {
            copyOfSettedCategory.push(kindofCategory)
        }
        setTypeofCategory(copyOfSettedCategory)
    }

    return (
        <div className="home-container">
            <ProductList data={displayedProductList}/>   
            <FilterList handlerCheckboxChange={setCategory} category={category}/>
        </div>
    )
}