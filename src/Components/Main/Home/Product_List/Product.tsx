import React from 'react';
import { IShoppingProduct } from '../../../../interface';
import { useNavigate } from 'react-router-dom';
import {SlBasket} from 'react-icons/sl'

interface ProductDataProps{
    product:IShoppingProduct,
    addToShop: (id:number) => void
}

export default function Product({product, addToShop}:ProductDataProps){

    const navigate = useNavigate()

    function openImg(){
        navigate('/img', {state: {src: product.image, alt: product.title}})
    }

    return(
        <div className='product-item-container'>
            <div className='img-wrapper'>
                <img onClick={openImg} src={product.image} alt={product.title}/>
            </div>
            <div className='description'>{product.description}</div>
            <div className='product-price-container'>
                <div className='product-price'>{product.price}$</div>
                <button className='buy-button' onClick={() => addToShop(product.id)}>{<SlBasket/>}</button>
            </div>
        </div>
    )
}