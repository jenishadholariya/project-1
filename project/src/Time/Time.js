import React, { Component } from 'react';

class Time extends Component {

    constructor(props) {
        super(props);
        
        // 1. Used to set initial value to the component.
        this.state ={
            time:new Date()
        }

    }

    tick=()=>{
        this.setState({
            time:new Date()
        })
    }

    componentDidMount =() =>{

        //3. Used to request data from server

        this.timeI=setInterval(()=>this.tick(),1000);
    }

    componentDidUpdate =(prevprops,prevstate)=>{

        //4. called whenever particular state/props updated

        if(this.state.time != prevstate.time){
            console.log("componentDidUpdate");
        }
    }

    componentWillUnmount =()=>{

        //5.called whenever we move another component (used to release the resourses) 
        
        clearInterval(this.timeI)
    }
   


    render() {

        // 2.called whenever state value changed

        return (
            <div>
                <p>{this.state.time.toLocaleTimeString()}</p>
            </div>
        );
    }
}

export default Time;
