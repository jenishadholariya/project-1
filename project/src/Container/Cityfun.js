import React, { useState } from 'react';

function Cityfun (props){

    const [CityName,setCityName]=useState('Surat');

        const  changeCity=()=>{
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
