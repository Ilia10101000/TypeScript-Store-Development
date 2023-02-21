import React from 'react';
import {IProduct, IShoppingProduct} from '../interface'

interface ContextProps{
    children: React.ReactNode[] | React.ReactNode
}

function handlerFetchResponse (arr : IProduct[]): IShoppingProduct[]{
    return arr.map( (product:IProduct) => ({...product, count:0}))
}
const url = 'https://fakestoreapi.com/products';

interface IProductContext{
    data: IShoppingProduct[]
    shopBasketData: IShoppingProduct[]
    addToShopBasket: (id:number) => void
}

export const ProductListData = React.createContext<IProductContext>({} as IProductContext);

export const ProductContext = ({children}:ContextProps) => {

    const [data, setData] = React.useState<IShoppingProduct[]>([]);

    const [shopBasketData, setShopBasketData] = React.useState<IShoppingProduct[]>([]);
    React.useEffect(() => console.log(shopBasketData),[shopBasketData])

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
    },[]);
    React.useEffect(() => {
        loadStorageShoppingData()
    },[])

    function loadStorageShoppingData(){
        if(localStorage.getItem('shopProductData')){
            let data = JSON.parse(localStorage.getItem('shopProductData') || '');
            setShopBasketData(data)
        }
    }

    const addToShopBasket = (id:number) => {

        let ordedProduct = data.filter( product => product.id === id)[0];
        let copyShopBasketData = [...shopBasketData];

        if(copyShopBasketData.some(item => item.id === ordedProduct.id)){

            copyShopBasketData = copyShopBasketData.map(item => {

                if(item.id = ordedProduct.id){
                    return {...item, count: item.count + 1}
                } else {
                    return item
                }
            });
            setShopBasketData(copyShopBasketData)
        } else {
            ordedProduct.count = ordedProduct.count + 1
            copyShopBasketData.push(ordedProduct)
            setShopBasketData(copyShopBasketData)
        }
        localStorage.setItem('shopProductData', JSON.stringify(copyShopBasketData))
    }


    return (
        <ProductListData.Provider value={{data, addToShopBasket, shopBasketData}}>
            {children}
        </ProductListData.Provider>
    )

}