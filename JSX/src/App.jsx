import React from 'react';
import Header from './Header.jsx'
import { createElement } from 'react';
function App() {
  let age=87;
  let alpha ='isha';
  let name='ankit';
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


        {React.createElement('h1',null,'Hello, Muskan!')}

        
        {React.createElement('h1',{className:'heading'},'Hello, Muskan!')}
        
        {React.createElement('a',{className:'link',href:'https://www.school4u.in'},'School4U')}

        {React.createElement('h1',null,name)}
         
        {React.createElement('h1',null,` hello ${alpha}.you are ${age} years old`)}
       
      {React.createElement(
        'div',
        null,
        React.createElement('h1',null,"hello, Mhek")

      )}

      {React.createElement(
        'div',
        {className:'alpha',style:{color:'red',fontSize:'20px'}},
        React.createElement('h1',null,"hello")

      )}

      {React.createElement(
        'div',
        {className:'card'},
        React.createElement('h1',null,`Hello, ${name}`),
         React.createElement('p',null,
          `you are ${age+1} years old next day`
         )

      )}
       

         

    </>
  )
}

export default App
