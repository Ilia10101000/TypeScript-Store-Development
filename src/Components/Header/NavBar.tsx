import React from "react";
import { Links } from "./Links";
import { NavbarBrand } from "./NavbarBrand";

export function NavBar(){

    return (
        <React.Fragment>
            <NavbarBrand/>
            <Links/>
        </React.Fragment>
    )
}