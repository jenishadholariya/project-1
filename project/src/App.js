import React, { useEffect, useState } from 'react';
import Home from './Container/Home';
import Loading from './Container/Loading';



const Homewithloading = Loading(Home)

function App(props){
  
  const [ loading , setLoading ] = useState (false);

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

  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{setLoading(false);setData(orgdata)},1000)
  },[])

  return (
   
      <Homewithloading
        isloading={loading}
        data={data}
      />
    
  );
}

export default App;
