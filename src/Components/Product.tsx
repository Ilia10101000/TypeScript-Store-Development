import React from 'react';
import { IProduct } from '../interface';

interface TemplateProductData{
    product:IProduct
}

export default function Product({product}:TemplateProductData){
    return(

        <div className='productItem'>
            <img src={product.image} alt={product.title}/>
            <p>{product.description}</p>
            <p>{product.price}</p>
        </div>
    )
}