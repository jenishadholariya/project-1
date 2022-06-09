import React, { useState } from 'react';
import City from './Container/City';
import Cityfun from './Container/Cityfun';
import Country from './Container/Country';
import Countryfun from './Container/Countryfun';
import Timefun from './Container/Timefun';
import Counter from './Time/Counter';
import Counterc from './Time/Counterc';
import Time from './Time/Time';

//  homewithloading = combine 

// const Homewithloading = (home);

function App(props){
  
  const [ loading , setloading ] = useState (false);

  const [ data , setData ] = useState ([]);

  let orgdata=[
    {
      id:101,
      name:'jeni'
    }
    ,
    {
      id:102,
      name:'jenisha'
    }
    
  ]
  // console.log(orgdata);

  useEffect(() => {
    setloading(true);
    setTimeout(()=>{setloading(false);setData()},)
    setInterval(() => {
      setloading(false);
      setData()}
    , 2000);
  }, []);

  return (
    <div>
      
    </div>
  );
}

export default App;
