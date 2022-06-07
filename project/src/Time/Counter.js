import React, { useState, useEffect } from 'react';

function Counter () {

  const[Counter,setCount]=useState(0)

  const Increment = () => {
    if(Counter < 10){
      setCount(Counter+1)
    }
  }

  const Decrement = () => {
    if(Counter > 0){
      setCount(Counter-1)
    }
  }

  return (
    <div>
      <h2>Counter {}</h2>
      <button onClick={() =>Increment()}>Increment</button>
      <p>{Counter}</p>
      <button onClick={()=>Decrement()}>Decrement</button>
    </div>
  );
}

export default Counter;
