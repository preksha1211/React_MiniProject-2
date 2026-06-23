import React from 'react'

import '../App.css';
import { useState } from 'react';
const Card = ({ title, desc }) => {
    const[count,setCount]=useState(0);
    function increase(){
        setCount(count+1);
    }
  return (
    <div className="card">
      
        <p>{count}</p>
          <button onClick={increase}>Increment</button>
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  );
};

export default Card; 