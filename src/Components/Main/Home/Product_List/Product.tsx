import React from 'react';
import { IShoppingProduct } from '../../../../interface';
import './product.css'

interface ProductDataProps{
    product:IShoppingProduct,
}

export default function Product({product}:ProductDataProps){

    return(
        <div className='product-item-container'>
        <figure className='productItem'>
            <img src={product.image} alt={product.title}/>
            <figcaption className='description optional-description'>{product.description}</figcaption>
        </figure>
        <div className='product-price-container'>
            <div className='product-price'>
                <p>{product.price}$</p>
                <p>{product.rating.rate}</p>
                <p>{product.rating.count}</p>
            </div>
        </div>
        </div>
    )
}