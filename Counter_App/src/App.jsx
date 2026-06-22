import { useState } from "react";

function App() {
  const[count , setCount] = useState(0);
   function increment(){
     setCount(count+1);
   }
    function decrement(){
     setCount(count-1);
   }
    function reset(){
     setCount(0);
   }

  return (
    
    <div >
      <h1>Counter App</h1>
      <p>Count: {count} </p>
      <Button text="Incerement" func={increment}/>
      <Button text="Decrement" func={decrement}/>
      <Button text="Reset" func={reset}/>
    </div>
  )
}
function Button({text, func}){
     return(
         
        <button onClick={func}>{text}</button>
    
     )
      
      
      

}
export default App
