import React from "react";
import { ProductListData } from "../../../Hook/ProductContext";
import AddedProduct from './AddedProduct'

export default function ShoppingBasket(){

    const {shopBasketData, updateProductCount, deleteProductFromShopBasket} = React.useContext(ProductListData);

    if(!shopBasketData.length){

        return (
            <div>You dont choose any product</div>
        )
    } else {

        return (
            <div>
                {shopBasketData.map(item => <AddedProduct key={item.id} product={item} updateCount={updateProductCount} deleteProduct={deleteProductFromShopBasket}/>)}
            </div>
        )
    }
}