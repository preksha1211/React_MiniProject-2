import React from 'react'
import { useState } from 'react';
const Controlled = () => {
  const [name,setName] = useState('');
  console.log(name);
  return (
    <>
       <input type="text" placeholder="enter ur name" 
      value={name}
      onChange={(e)=>{setName(e.target.value)}}></input>

      <button onClick={()=>setName('')}>clear</button>

      <h1>{name}</h1>
    </>
  )
}

export default Controlled