import React from 'react';
import { IShoppingProduct } from '../../../../interface';

interface ProductDataProps{
    product:IShoppingProduct,
    addToShop: (id:number) => void
}

export default function Product({product, addToShop}:ProductDataProps){

    return(
        <div className='product-item-container'>
            <div className='productItem'>
                <div className='img-wrapper'><img src={product.image} alt={product.title}/></div>
                <div className='description'>{product.description}</div>
            </div>
            <div className='product-price-container'>
                <div className='product-price'>{product.price}$</div>
                <button onClick={() => addToShop(product.id)}>Click</button>
            </div>
        </div>
    )
}