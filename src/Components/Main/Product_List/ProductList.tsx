import React, {useContext} from 'react';
import Product from './Product';
import { ProductListData } from '../../../Hook/ProductContext';

const category = { 
    [`Одежа для чоловіків`]:`men's clothing`,
    [`Прикраси`]:`jewelery`,
    [`Електроніка`]:`electronics`,
    [`Одежа для жінок`]:`women's clothing`
}
export const ProductList = () => {
    
    const data = useContext(ProductListData);
    
    let result;

    if(data.length){
        result = data.map((product, index) => <Product key={index} product={product}/>)
    } else{
        result = <div>Data hasn`t receive</div>
    }

    return(
        <div>
            {result}
        </div>
    )

}