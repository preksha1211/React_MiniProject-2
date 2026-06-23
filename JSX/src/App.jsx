import React from 'react';
import Header from './Header.jsx'
function App() {
  let age=87;
  function greet(){
    return "preksha"
  }
  let isOutOfStock=true;
  let arr=['jj','kk','pp']
  return (
    <>
       {/* <h1>hello {greet()}</h1>
       <h1>{age>=18?'you can drive':'you can not driv'}</h1>

         <h1>{age>=18?<p style={{color:'green'}}>You can drive</p>:<p style={{color:'red'}}>you can not drive</p>}</h1>

       <h1 style={{
        backgroundColor:"pink",
        color:"green",
        fontFamily:"fantasy"
       }}>Hello style</h1>
       {isOutOfStock && <p>out of stock</p>}
       
       {
        arr.map((item,index)=>{
            console.log(item,index);
            return <h3 key={index}>{item}</h3>
        })
       }
        
        <Header title="preksha"/>
        <Header title={<p>fow are{2+2}</p>}/> */}

        <h1>Hello how are you</h1>
        {React.createElement('h1',null,"how are you")}

        <h1 className='heading'>hello</h1>
        {React.createElement('h1',{className:'heading',style:{backgroundColor:'red',color:'white'}},'hello')}


        <div>
          <p>hello</p>
        </div>

        {React.createElement(
          'div',
          null,
          React.createElement(
            'p',
            {style:{backgroundColor:'violet',color:'maroon'}},
            "hello"
          )
        )}
    </>
  )
}

export default App
