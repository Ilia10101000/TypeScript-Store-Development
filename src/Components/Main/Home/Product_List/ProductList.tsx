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
        return <div>{data.map((product, index) => <Product key={index} product={product} addToShop={addToShopBasket}/>)}</div>
    } else{
        return  <div>Data hasn`t receive</div>
    }

}