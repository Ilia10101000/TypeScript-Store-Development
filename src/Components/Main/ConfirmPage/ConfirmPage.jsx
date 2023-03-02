import React, { useState, useEffect } from 'react';

const key = 'd6109a921ad8b4db9eb42ea743a3d0c6';
const url = 'https://api.novaposhta.ua/v2.0/json/';

export default function ConfirmPage(){
    
    const [value, setValue] = React.useState('')

    const getCityes = async () => {

        const myHeaders = new Headers();

        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "apiKey": "d6109a921ad8b4db9eb42ea743a3d0c6",
            "modelName": "Address",
            "calledMethod": "searchSettlements",
            "methodProperties": {
            "CityName": value,
            "Limit": "5",
            "Page": "1"
        }
        });
        
        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        
        const data = await fetch("https://api.novaposhta.ua/v2.0/json/", requestOptions);
        const response = await data.json();
        console.log(response.data[0]);
    }
    React.useEffect(() => {
        getCityes()
        console.log(value)
    },[value])
    
    return (

        <div>
            <input value={value} onChange={e => setValue(e.target.value)}/>
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



