import React, { useState } from 'react';
import Countryfun from './Countryfun';

function Cityfun (id,Country_Name){

    const [CityName,setCityName]=useState('Surat');

        const changeCity=()=>{
            setCityName('Rajkot');
        }
    

    return (
        <div>
            <p>{CityName}</p>
            <button onClick={()=>changeCity()}>Change City</button>
            <p>{props.id}{props.Country_Name}</p>
        </div>
    );
}

export default Cityfun;
