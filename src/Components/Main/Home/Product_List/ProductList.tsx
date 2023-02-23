import React, {useContext} from 'react';
import { IShoppingProduct } from '../../../../interface';
import Product from './Product';
import { ProductListData } from '../../../../Hook/ProductContext';

interface ProductListProps{
    data: IShoppingProduct[]
}

export const ProductList = ({data}: ProductListProps) => {

    const {addToShopBasket} = useContext(ProductListData)

    if(data.length){
        return <div className='product-list'>{data.map( product => <Product key={product.id} product={product} addToShop={addToShopBasket}/>)}</div>
    } else{
        return  <div className='product-list-error'>Data hasn`t receive</div>
    }

}