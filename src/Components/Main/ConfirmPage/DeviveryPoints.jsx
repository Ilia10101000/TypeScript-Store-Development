import React from "react";
import DropChoossenList from './DropChoossenList';
import { CityResponseContext } from "./DeliveryPage";
import ConfirmButton from "./ConfirmButton";

const key = 'd6109a921ad8b4db9eb42ea743a3d0c6';
const url = 'https://api.novaposhta.ua/v2.0/json/';

export default function DeliveryPoints({total}){

    const [deliveryPoint, setDeliveryPoint] = React.useState('');
    const [pointsResultList, setPointsResultList] = React.useState([])
    const [selectDeliveruPoint, setSelectDeliveryPoint] = React.useState('')
    const [isShownDeliveryPointsList, setIsShownDeliveryPointsList] = React.useState(false);

    const city = React.useContext(CityResponseContext);

    React.useEffect(() => {
        if(!city.length){
            setDeliveryPoint('');
            setPointsResultList([])
        }
    },[city]);
    React.useEffect(() => {
        if(!deliveryPoint.length){
            setSelectDeliveryPoint('')
        }
    },[deliveryPoint])

    const getDeliveryPoints = async () => {
        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        const raw = JSON.stringify({
                "apiKey": key,
                "modelName": "Address",
                "calledMethod": "getWarehouses",
                "methodProperties": {
                    "CityName" : city,
                    "Page" : "1",
                    "Limit" : "15",
                    "Language" : "UA",
                    "FindByString": deliveryPoint,
                }
        })
        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            // redirect:'follow'
        }
        if(city.trim().length){

            try{
                const data = await fetch(url, requestOptions);
                const response = await data.json();
                if( response.success == true && response.data.length){
                    setPointsResultList(response.data)
                    // console.log(response.data)
                }
            } catch(e){
                console.log(e)
            }
        }
            
    }

    React.useEffect(() => {
        getDeliveryPoints()
    },[deliveryPoint]);

    function hundlerInputChange(e){
        setDeliveryPoint(e.target.value);
        setIsShownDeliveryPointsList(true);
    };

    function chooseDeliveryPoint(name){
        console.log(name)
        setDeliveryPoint(name);
        setSelectDeliveryPoint(name)
        setPointsResultList([]);
        setIsShownDeliveryPointsList(false)
    }

    return (
            <>
            <div style={city.length?null:{display:'none'}} className='form-group'>
                <input className="form-input" value={deliveryPoint} onChange={hundlerInputChange} placeholder=' '/>
                <label className="form-label">Delivery point</label>
            </div> 
                <div style={!isShownDeliveryPointsList? {display:'none'}:null} className='pointsList'>{pointsResultList.map( point => <DropChoossenList key={point.SiteKey} description={point.Description} setDeliveryPoint={chooseDeliveryPoint}/>)}</div>
                {selectDeliveruPoint.length && !isShownDeliveryPointsList? <ConfirmButton total={total} city={city} address={selectDeliveruPoint} type='delivery'/>:null}
            </>
    )
}