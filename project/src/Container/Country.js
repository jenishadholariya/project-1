import React, { Component } from 'react';
import City from './City';

class Country extends Component {
    constructor(props) {
        super(props);
        
        this.state={
            CountryName:'India'
        }
        
    }

    changeCountry=()=>{
        this.setState({
            CountryName:'USA'
        });
    }

    render() {
        
        return (
            <div>
                <p>{this.state.CountryName}</p>
                <button onClick={()=> this.changeCountry()}>Change Country</button>
                <City id="101" Country_Name={this.state.CountryName}/>
            </div>
        );
    }
}

export default Country;
