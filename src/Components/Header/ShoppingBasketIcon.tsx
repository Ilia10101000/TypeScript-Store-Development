import React from "react";
import shoppingBasket from '../../img/shopping_basket.png';
import { NavLink } from "react-router-dom";

export function ShoppingBasketIcon(){

    return (
        <div className="shopping-basket-container">
            <div className="shopping-basket">
            <NavLink to='basket'><img src={shoppingBasket}/></NavLink>
            <div className="ordered-count"></div>
            </div>
        </div>
    )
}