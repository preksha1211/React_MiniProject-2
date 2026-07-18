

function App() {
  
  function greet(e){
    console.log(e.target);
    console.log("hello preksha");
  }

  function test(e){
    console.log(e.target.value)
    console.log("event trigger hua");
  } 

  function submitHandler(e){
    event.preventDefault(event);
    console.log("submit ho gya");
  } 

  return (
    <>
      {/*  onClick   */}  
      <button onClick={greet}>ClickMe</button>

       {/*  onChange  */} 
       <input onChange={test} placeholder='enter'></input>

       {/*  onSubmit  */} 
       <form onSubmit={submitHandler} action="">
       <input type="text" placeholder="enter email"></input>
       <button>submit</button>
       </form>
    </>
  )
}

export default App
