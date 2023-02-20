import React from "react";
import { NavBar } from "./NavBar";
import { ShoppingBasketIcon } from "./ShoppingBasketIcon";
import './header.css'

export function Header(){

    return(
        <header>
            <NavBar/>
            <ShoppingBasketIcon/>
        </header>
    )
}