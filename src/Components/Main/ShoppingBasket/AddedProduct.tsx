import React from "react";
import { IShoppingProduct } from "../../../interface";
import { VscAdd, VscRemove } from "react-icons/vsc";
import { MdDelete } from "react-icons/md";
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
                <img src={product.image} alt={product.title}/>
                <div className='description optional-description'>{product.title}</div>
            </div>
            <div className='product-price-container'>
                <div>
                    <div>{product.price}</div>
                </div>
                <div className="product-count-container">
                    <div style={{border: '1px solid red'}} onClick={() => updateCount(product.id, 'decrease')}><VscRemove/></div>
                    <div>{product.count}</div>
                    <div style={{border: '1px solid red'}} onClick={() => updateCount(product.id, 'increase')}><VscAdd/></div>
                </div>
            </div>
            <div>
                <div>{(product.count * product.price).toFixed(2)}</div>
            </div>
            <div onClick={()=>deleteProduct(product.id)}><MdDelete/></div>
        </div>
    )
}