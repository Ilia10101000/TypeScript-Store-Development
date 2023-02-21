import React from "react";
import { IShoppingProduct } from "../../../interface";
import { VscAdd, VscRemove } from "react-icons/vsc";
import './shopBasket.css'

interface AddedProductProps{
    product:IShoppingProduct
}

export default function AddedProduct({product}:AddedProductProps){

    return (
        <div className='addedProduct-item-container'>
            <div className='addedProduct-item'>
                <img src={product.image} alt={product.title}/>
                <div className='description optional-description'>{product.title}</div>
            </div>
            <div className='product-price-container'>
                <div>
                    <div>{product.price}</div>
                </div>
                <div className="product-count-container">
                    <div><VscRemove/></div>
                    <div>{product.count}</div>
                    <div><VscAdd/></div>
                </div>
            </div>
            <div>
                <div>{product.count * product.price}</div>
            </div>
        </div>
    )
}