import React, { useState } from 'react';
import Country from './Country';

function Countryfun (props){
    const [CountryName,setCountryName]=useState('India');

        const changeCountry = () => {
            setCountryName('USA-A');
        }
    return (
        <div>
            <p>{CountryName}</p>
            <button onClick={() => changeCountry()}>Change Country</button>
            <Country Country_Name={this.state.CountryName}/>
            <City id="101" Country_Name={this.state.CountryName}/>
        </div>
    );
}

export default Countryfun;
 