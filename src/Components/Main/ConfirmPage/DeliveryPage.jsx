import React from "react";
import DropChoossenList from './DropChoossenList';


const key = 'd6109a921ad8b4db9eb42ea743a3d0c6';
const url = 'https://api.novaposhta.ua/v2.0/json/';

export const CityResponseContext = React.createContext('')


export default function DeliveryPage({children}){

    const [cityName, setCityName] = React.useState('');
    const [selectedCity, setSelectedCity] = React.useState('')
    const [cityesResultList, setCityesResultList] = React.useState([])
    const [isShownCityesList, setIsShownCityesList] = React.useState(false);


    const ref = React.useRef();

    const getCityes = async () => {

        const myHeaders = new Headers();

        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "apiKey": key,
            "modelName": "Address",
            "calledMethod": "searchSettlements",
            "methodProperties": {
            "CityName": cityName,
            "Limit": "15",
            "Page": "1"
        }
        });
        
        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            // redirect: 'follow'
        };
        try{
            const data = await fetch(url, requestOptions);
            const response = await data.json();
            if(response.success == true && response.data[0].Addresses.length){
                setCityesResultList(response.data[0].Addresses)
                // console.log(response.data[0].Addresses)
            }
        } catch(e){
            console.log(e)
        }

    }

    function chooseCityName(name,city){
        setCityName(name)
        setSelectedCity(city)
        setIsShownCityesList(false)
    }
    function handlerInputChange(e){
        setCityName(e.target.value);
        setIsShownCityesList(true)
        setSelectedCity('')
    }

    React.useEffect(() => {
        getCityes()
        console.log(cityesResultList)
    },[cityName])

    return (
        <CityResponseContext.Provider value={selectedCity}>
            <div>
                <div className='form-group'>
                    <input className="form-input" value={cityName} onChange={handlerInputChange} placeholder=' '/>
                    <label className="form-label">City name</label>
                </div>
                <div style={!isShownCityesList?{display: 'none'}:null} ref={ref}  className='cityesList'>{cityesResultList.map( city => <DropChoossenList key={city.Present} city={city.MainDescription} present={city.Present} setCity={chooseCityName}/>)}</div>
                {children}
            </div> 
        </CityResponseContext.Provider>
    )
}