import React, { useState } from 'react';
import Countryfun from './Countryfun';

function Cityfun (props){

    const [CityName,setCityName]=useState('Surat');

        const changeCity=()=>{
            setCityName('Rajkot');
        }
    

    return (
        <div>
            <p>{CityName}</p>
            <button onClick={()=>changeCity()}>Change City</button>
            
        </div>
    );
}

export default Cityfun;
