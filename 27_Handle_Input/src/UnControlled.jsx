import React from 'react'
import inputRef from 'react';
const UnControlled = () => {

  const inputRef = useRef(null);

  function submit(){
    console.log("kam kiay");
  }
  return (
    <>
       <input 
       ref={inputRef}
       type="text" placeholder="enter name"></input>

       <br></br>
       <br></br>

       <button onClick={submit}>Submit</button>
    </>
  )
}

export default UnControlled