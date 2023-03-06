import React, { useState, useEffect } from 'react';
import DeliveryPage from './DeliveryPage';
import DeliveryPoints from './DeviveryPoints';
import PickUp from './PickUp';
import './confirm-list.css'



export default function ConfirmPage(){
    
    const [typeDelivery, setTypeDelivery] = React.useState();

    let result;

    if(typeDelivery === 'pickup') result = <PickUp/>;
    if(typeDelivery === 'service') result = <DeliveryPage><DeliveryPoints/></DeliveryPage>;
    function chooseDelivery(e){
        setTypeDelivery(e.target.value)
    }
    return (
        <div className='confirm-page'>
            <div className='deliveryType-container'>
                <h4>Choose delivery type</h4>
                <label className='label-wrapper'><input type='radio' name='delivery' value='pickup' onChange={chooseDelivery}/><span className='custom-radio-checkbox'></span>Pick up</label>
                <label className='label-wrapper'><input type='radio' name='delivery' value='service' onChange={chooseDelivery}/><span className='custom-radio-checkbox'></span>Delivery by Nova Poshta</label>
            </div>
            {result}
        </div>
       
    )
}
































































//     const data = await fetch(url, JSON.stringify({
//                                     method: "POST",
//                                     apiKey: key,
//                                     modelName: "Address",
//                                     calledMethod: "searchSettlements",
//                                     methodProperties: {
//                                         CityName : value,
//                                         Limit : "10",
//                                         Page : "1"
//                                     }
//                                 }));
//      const response = await data.json()
//      console.log(response)



