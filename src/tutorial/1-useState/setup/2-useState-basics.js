import React, { useState } from 'react';

const UseStateBasics = () => {
  const [title,setTitle] = useState('Random Title');
  const changeTitle = () =>{
    if(title==='Random Title')
      setTitle('Hello World');
    else 
      setTitle('Random Title');
  }
  return (
    <>
      <h1>{title}</h1>
      <button className='btn' onClick={changeTitle}>change Title</button>
    </>
  )
};

export default UseStateBasics;
