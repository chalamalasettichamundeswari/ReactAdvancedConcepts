import React, { useState } from 'react';

const UseStateCounter = () => {
  const [count,setCount] = useState(0);
  const decreaseCounter = () =>{
    setCount(count=>count-1);
  };
  const resetCounter = () =>{
    setCount(0);
  };
  const increaseCounter = () =>{
    setCount(count=>count+1);
  };
  const complexIncrement = () =>{
    setTimeout(() => {
      setCount(count=>count+1);
    },2000);
  };

  return (
   <>
   <h2>Regular Counter</h2>
   <h2>{count}</h2>
   <button className="btn" onClick={decreaseCounter}>Decrease</button>
   <button className="btn" onClick={resetCounter}>Reset</button>
   <button className="btn" onClick={increaseCounter}>Increase</button>
   <br/><br/><br/>
   <h2>More Complex Counter</h2>
   <h2>{count}</h2>
   <button className="btn" onClick={complexIncrement}>Increase later</button>
   </>
  )
};

export default UseStateCounter;
