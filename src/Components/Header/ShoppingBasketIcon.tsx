import React from "react";
import shoppingBasket from '../../img/shopping_basket.png';
import { NavLink } from "react-router-dom";
import { ProductListData } from "../../Hook/ProductContext"; 

export function ShoppingBasketIcon(){
    
    const {shopBasketData} = React.useContext(ProductListData)

    return (
        <div className="shopping-basket-container">
            <div className="shopping-basket">
            <NavLink to='basket'><img src={shoppingBasket}/></NavLink>
            <div className="ordered-count">{shopBasketData.length?shopBasketData.length:null}</div>
            </div>
        </div>
    )
}