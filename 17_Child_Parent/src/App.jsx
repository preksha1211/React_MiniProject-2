import Layout from "./components/Layout";
function App() {
   
  function kabutar(data){
    console.log(data); 
  }
  return (
    <>
      <Layout func={kabutar}/>
    
    </>
  )
}

export default App
