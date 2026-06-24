
import './App.css'
import {useState,useEffect} from 'react';
function App() {

   const[count,setCount]=useState(0);
   const[dec,setDec]=useState(0);
   useEffect(()=>{
    console.log("useeffect hit")
   },[dec])

  return (
    <>
    
      <h1>{count}</h1>
      <button onClick={()=>{
        setCount(count+1)
      }}>increament</button>

      <h1>{dec}</h1>
      <button onClick={()=>{
        setDec(dec-1)
      }}>decrement</button>
    </>
  )
}

export default App
