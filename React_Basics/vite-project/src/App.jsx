import Navu from './Navbar';

function Component2(){
  return(
    <div>
      <img src="https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp"></img>
      </div>
  )
}

function Component(){
  return(
    <div>
      <h1>Component</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas facilis voluptatum repellendus officia recusandae, architecto magni alias consectetur cum ab autem nesciunt explicabo amet saepe, minus soluta. Ducimus voluptas quis aut vitae consectetur beatae porro. Molestias perferendis ducimus magni ipsa.</p>
      <Component2/>
    </div>

    
  )
}
function App() {
 
  return (
    <>
      <Component/>
      <Component/>
      <Component/>
      <Navu/>
    </>
  )
}

export default App
