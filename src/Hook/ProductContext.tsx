import React from 'react';
import {IProduct, IShoppingProduct} from '../interface'

interface ContextProps{
    children: React.ReactNode[] | React.ReactNode
}

function handlerFetchResponse (arr : IProduct[]): IShoppingProduct[]{
    return arr.map( (product:IProduct) => ({...product, count:0}))
}
const url = 'https://fakestoreapi.com/products';

export const ProductListData = React.createContext<IShoppingProduct[]>([]);

export const ProductContext = ({children}:ContextProps) => {

    const [data, setData] = React.useState<IShoppingProduct[] | []>([]);

    const fetchStoreData = React.useCallback(() => {
        if(localStorage.getItem('StoreDataValue')){
            setData(JSON.parse(localStorage.getItem('StoreDataValue') || ''));
            return;
        } 
        fetch(url).then(data => data.json()).then(response => {
            setData(response)
            return response
            
        }).then(response => localStorage.setItem('StoreDataValue', JSON.stringify(handlerFetchResponse(response)))).catch( err => console.log(err.message))
    },[])


    React.useEffect(() => {
        fetchStoreData();
    },[])

    return (
        <ProductListData.Provider value={data}>
            {children}
        </ProductListData.Provider>
    )

}