import React from "react";
import { ProductListData } from "../../../Hook/ProductContext";
import AddedProduct from './AddedProduct'
import { useNavigate, NavLink} from "react-router-dom";

export default function ShoppingBasket(){

    const {shopBasketData, updateProductCount, deleteProductFromShopBasket} = React.useContext(ProductListData);

    const navigate = useNavigate();

    if(!shopBasketData.length){

        return (
            <div className="empty-shopBasket">You dont choose any product</div>
        )
    } else {

        const total = shopBasketData.reduce((acc, product) => acc + (product.price * product.count),0).toFixed(2)

        const confirmOrder = () => {
            navigate('/confirm', {state:{total,shopBasketData}})
        }

        return (
            <div className="shop-basket-container">
                <div className="products-container">
                    {shopBasketData.map(item => <AddedProduct key={item.id} product={item} updateCount={updateProductCount} deleteProduct={deleteProductFromShopBasket}/>)}
                </div>
                <div className="total-container">
                    <div className="total">
                        <div>Total:</div>
                        <div className="total-sum">{total} $</div>
                    </div>
                    <button onClick={confirmOrder} className="confirm-button">Confirm</button>
                </div>
            </div>
        )
    }
}