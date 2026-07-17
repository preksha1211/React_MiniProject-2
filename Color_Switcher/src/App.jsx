import { useState } from "react";
import Box from "./Box";
function App() {
   const [color,setcolor] =useState('pink');
   let colors = ['red' , 'green' , 'blue'];
  return (
    <>
       {colors.map((item)=>{
           return (
             <Button key={item} color={item} func={setcolor}/>
           )
         }
       )
      }
      <Box color={color}/>
    </>
  )
}

function Button({color , func}){
    return <button style={{background:color}} 
    onClick={()=> {funcn(color)}}
    >{color}</button>
}

export default App
