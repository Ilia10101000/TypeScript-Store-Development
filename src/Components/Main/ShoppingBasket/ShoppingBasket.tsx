import React from "react";
import { ProductListData } from "../../../Hook/ProductContext";
import AddedProduct from './AddedProduct'

export default function ShoppingBasket(){

    const {shopBasketData} = React.useContext(ProductListData);

    if(!shopBasketData.length){

        return (
            <div>You dont choose any product</div>
        )
    } else {

        return (
            <div>
                {shopBasketData.map(item => <AddedProduct product={item}/>)}
            </div>
        )
    }
}