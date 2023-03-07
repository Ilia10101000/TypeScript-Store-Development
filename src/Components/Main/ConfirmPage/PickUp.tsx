import React from "react";
import OptionCity from "./Option";
import ShopsAddress from "./ShopAddress";

interface PickUpProps{
    total: string
}
const cityes = ['Kyiv', 'Kharkiv', 'Kherson','Donetsk','Sevastopol','Lugansk','Lviv'];


export default function PickUp({total}: PickUpProps){

    const [toCity, setToCity] = React.useState('Choose city');
    const [selectedCity, setSelectedCity] = React.useState('')
    const [isShow, setIsShow] = React.useState(false)
    

    function toogleVisiableOptions(){
        if(!isShow && !selectedCity){
            setIsShow(true)
        } else if(!isShow && selectedCity){
            setIsShow(true)
            setSelectedCity('')
        } else if(isShow && toCity !== 'Choose city'){
            setIsShow(false)
            setSelectedCity(toCity)
        }
    }
    function setCityName(name:string){
        setToCity(name);
        setSelectedCity(name)
        setIsShow(false)
    }
    return (

        <div className="pickup-container">
            <div className="custom-select">
                <div onClick={toogleVisiableOptions} className="selected-option">{toCity}</div>
                <div style={{display: isShow?'block':'none'}} className="options">{cityes.map( (city, index) => <OptionCity key={index} setValue={setCityName} name={city}/>)}</div>
            </div>
            {selectedCity? <ShopsAddress total={total} city={selectedCity}/> : null}
        </div>
    )
}