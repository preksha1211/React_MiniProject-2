 import {useState} from 'react';
 import Card from './Card'
function App() {
  const[count ,setCount] =useState(0);

  //initial state as object
  const [data,setData]=useState({
    name:"preksha",
    class: 12
  })
  console.log(data);

  return (
    <>
     <h1>{count}</h1>
     <button onClick={()=>{
       setCount(count+1)
     }}>click me</button>

     <Card/>
      
    </>
  )
}

export default App
