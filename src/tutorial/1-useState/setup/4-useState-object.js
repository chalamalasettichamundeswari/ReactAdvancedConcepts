import React, { useState } from 'react';

const UseStateObject = () => {
  const [person,setPerson] = useState(
    {name:'peter',age:24,message:'random message'}
    );
  const changeMessage = () =>{
    setPerson({...person,message:'Hello World'});
  }
  return (
    <>
     <h2>{person.name}</h2>
     <h2>{person.age}</h2>
      <h5>{person.message}</h5>
      <button className='btn' onClick={changeMessage}>change Message</button>
    </>
  )
};

export default UseStateObject;
