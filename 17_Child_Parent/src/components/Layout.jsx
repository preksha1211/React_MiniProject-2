import React from 'react'
import { useState } from 'react';
const Layout = (props) => {

  const [count,setCount] = useState('child ka data aa gya hai');

 function changeData(){
     props.func(count);
 }
  

  return (
    <div onClick={changeData}>Layout</div>
  )
}

export default Layout