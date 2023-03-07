import React from "react";
import OptionCity from "./Option";
import ConfirmButton from "./ConfirmButton";

interface ShopAddressProps{
    city: string
    total: string
}

const availableAddress = [
    'Ukrainian Victori str 24, Glory to Ukraine 8',
    'Independenсe ave, Glory to the Heroes 1991',
    'Death to the enemies PL, >150k'
]

export default function ShopsAddress({city, total}:ShopAddressProps){
    const [address, setAddress] = React.useState('Choose address');
    const [isShow, setIsShow] = React.useState(false);

    function toogleVisiableOptions(){
        setIsShow( value => !value)
    }
    function setAddressName(name:string){
        setAddress(name);
        setIsShow(false)
    }
    return (
        <div className="final-confirm-wrapper">
            <div className="custom-select">
                <div onClick={toogleVisiableOptions} className="selected-option">{address}</div>
                <div style={{display: isShow?'block':'none'}} className="options">{availableAddress.map( (address, index) => <OptionCity key={index} setValue={setAddressName} name={address}/>)}</div> 
            </div>
            {address && address !== 'Choose address' && !isShow? <ConfirmButton total={total} city={city} address={address} type='pickup'/>: null}
        </div>
    )
}