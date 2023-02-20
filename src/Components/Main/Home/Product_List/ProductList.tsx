import React, {useContext} from 'react';
import { IShoppingProduct } from '../../../../interface';
import Product from './Product';

interface ProductListProps{
    data: IShoppingProduct[]
}

export const ProductList = ({data}: ProductListProps) => {

    if(data.length){
        return <div>{data.map((product, index) => <Product key={index} product={product}/>)}</div>
    } else{
        return  <div>Data hasn`t receive</div>
    }

}