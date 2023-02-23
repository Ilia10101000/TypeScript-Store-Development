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
    updateProductCount: (id:number, action:string) => void
    deleteProductFromShopBasket:(id: number) => void
}

export const ProductListData = React.createContext<IProductContext>({} as IProductContext);

export const ProductContext = ({children}:ContextProps) => {

    const [data, setData] = React.useState<IShoppingProduct[]>([]);

    const [shopBasketData, setShopBasketData] = React.useState<IShoppingProduct[] | []>([]);
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
    },[]);

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

                copyShopBasketData = [...copyShopBasketData].map(item => {

                    if(item.id = ordedProduct.id){
                        return {...item, count: item.count + 1}
                    } else {
                        return item
                    }
                });

            } else {
                copyShopBasketData.push({...ordedProduct, count: ordedProduct.count + 1})
            }

        localStorage.setItem('shopProductData', JSON.stringify(copyShopBasketData))
        setShopBasketData(copyShopBasketData)
    }

    function updateProductCount(id: number, action:string){
        
        let copyShopBasket = [...shopBasketData];
                // @ts-ignore
                copyShopBasket = copyShopBasket.map( product => {
                    if(product.id === id){
                        if(action === 'increase'){
                        return {...product, count: product.count + 1}
                    } else if(action === 'decrease'){
                        if(product.count > 1){
                            return {...product, count: product.count - 1}
                        } else {
                            return product
                        }
                    }
                } else {
                    return product
                }
                 })
                localStorage.setItem('shopProductData', JSON.stringify(copyShopBasket))
                setShopBasketData(copyShopBasket)
    }
    
    function deleteProductFromShopBasket(id: number){
        if(window.confirm('Видалити вибрану позицію?')){
            let copyBasketData = [...shopBasketData].filter( product => product.id !== id);
            localStorage.setItem('shopProductData', JSON.stringify(copyBasketData));
            setShopBasketData(copyBasketData)
        }
    }

    return (
        <ProductListData.Provider value={{data, addToShopBasket, shopBasketData, updateProductCount, deleteProductFromShopBasket}}>
            {children}
        </ProductListData.Provider>
    )

}