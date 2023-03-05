import React from "react";
import OptionCity from "./Option";
import ShopsAddress from "./ShopAddress";

const cityes = ['Kyiv', 'Kharkiv', 'Kherson','Donetsk','Sevastopol','Lugansk','Lviv']
export default function PickUp(){

    const [toCity, setToCity] = React.useState('')
    
    function chooseCity(e:any){
        setToCity(e.target.value)
    }

    return (

        <div>
            <select onChange={chooseCity}>
               {cityes.map( (city, index) => <OptionCity key={index} name={city}/>)}
            </select>
            {toCity? <ShopsAddress/> : null}
        </div>
    )
}