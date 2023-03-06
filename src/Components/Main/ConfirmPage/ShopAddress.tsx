import React from "react";
import OptionCity from "./Option";
import ConfirmButton from "./ConfirmButton";

interface ShopAddressProps{
    city: string
}

const availableAddress = ['123','432','234']

export default function ShopsAddress({city}:ShopAddressProps){
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
        <div>
            <div className="custom-select">
                <div onClick={toogleVisiableOptions} className="selected-option">{address}</div>
                <div style={{display: isShow?'block':'none'}} className="options">{availableAddress.map( (address, index) => <OptionCity key={index} setValue={setAddressName} name={address}/>)}</div> 
            </div>
            {address && address !== 'Choose address'? <ConfirmButton city={city} address={address} type='pickup'/>: null}
        </div>
    )
}