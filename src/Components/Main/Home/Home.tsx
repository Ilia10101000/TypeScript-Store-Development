import React from "react";
import FilterList from "./Product_List/FilterList";
import { ProductList } from "./Product_List/ProductList";
import { ProductListData } from '../../../Hook/ProductContext';
import { IShoppingProduct } from "../../../interface";
import './home.css'

const category = {
    'Для чоловіків':`men's clothing`,
    'Прикраси':`jewelery`,
    'Електроніка':`electronics`,
    'Для жінок':`women's clothing`
}

type CategoryType = Array<string> 

export default function Home(){

    const {data} = React.useContext(ProductListData);
    
    const [displayedProductList, setDisplayedProductList] = React.useState<IShoppingProduct[]>([])
    const [typeofCategory, setTypeofCategory] = React.useState<CategoryType>([])
    
    React.useEffect(()=>{ setDisplayedProductList(data) },[data]);
    React.useEffect(() => {
        if(sessionStorage.getItem('SelectedCategoryOfProducts')){
            setTypeofCategory(JSON.parse(sessionStorage.getItem('SelectedCategoryOfProducts') || ''))
        }
    },[])

    React.useEffect(() => { updateDisplayedProductList(typeofCategory)},[typeofCategory]);
    
    function updateDisplayedProductList(updatedArrayOfCategory:string[]){
        if(!updatedArrayOfCategory.length){
            setDisplayedProductList(data) 
            return
        }
        setDisplayedProductList(data.filter( product => updatedArrayOfCategory.includes(product.category))) 
    }

    function setCategory(kindofCategory: string){
        let copyOfSettedCategory = [...typeofCategory];

        if(copyOfSettedCategory.includes(kindofCategory)){
            copyOfSettedCategory = copyOfSettedCategory.filter(item => item !== kindofCategory);
        } else {
            copyOfSettedCategory.push(kindofCategory)
        }
        sessionStorage.setItem('SelectedCategoryOfProducts', JSON.stringify(copyOfSettedCategory))
        setTypeofCategory(copyOfSettedCategory)
    }

    return (
        <div className="home-container">
            <FilterList handlerCheckboxChange={setCategory} category={category} selectedCategotyOfProducts={typeofCategory}/>
            <ProductList data={displayedProductList}/>   
        </div>
    )
}