import React from "react";
import { IShoppingProduct } from "../../../interface";
import { VscAdd, VscRemove } from "react-icons/vsc";
import delete_icon from '../../../img/delete.png'
import './shopBasket.css'

interface AddedProductProps{
    product:IShoppingProduct
    updateCount: (id:number, action: string) => void
    deleteProduct:(id:number) => void
}

export default function AddedProduct({product, updateCount, deleteProduct}:AddedProductProps){
    
    return (
        <div className='addedProduct-item-container'>
            <div className='addedProduct-item'>
                <img className="addedproduct-image" src={product.image} alt={product.title}/>
                <div className='description'>{product.title}</div>
            </div>
            <div className='addedProduct-item-count_price-container'>
                <div className="addedProduct-price">
                    {product.price} $
                </div>
                <div className="addedproduct-count">
                    <div className="change-count-icon" onClick={() => updateCount(product.id, 'decrease')}><VscRemove/></div>
                    <div className="count">{product.count}</div>
                    <div className="change-count-icon" onClick={() => updateCount(product.id, 'increase')}><VscAdd/></div>
                </div>
            </div>
            <div className="delete-icon-container" onClick={()=>deleteProduct(product.id)}>
                <img className="delete-icon" src={delete_icon} alt='delete_icon'/>
            </div>
        </div>
    )
}