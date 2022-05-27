import React from 'react';

const ErrorExample = () => {
  let title='Random Title';
  const changeTitle = () =>{
   title='hello people';
   console.log(title);
  }
  return(
    <>
   <h2>useState error example</h2>
   <h2>{title}</h2>
   <button className = 'btn' onClick = {changeTitle}>change Title</button>
   </>
  );
};

export default ErrorExample;
