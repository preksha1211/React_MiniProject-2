import { useState } from 'react'


function App() {
  
  const arr = [[1,2,3,4,5,6],['a','b','c','d']]
  return (
    <>
       {
        arr.map((item)=>{
          return(
              
                item.map((ii)=>{
                  return(
                    <h1>{ii}</h1>
                  )
                })
              
          )
        })
       }
     </>
    
  );
}

export default App;
