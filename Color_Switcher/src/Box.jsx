import React from 'react'

const Box = ({color}) => {
  return (
    <div style={{height:'100px'  , width:'100px', border : '1px solid black', backgroundColor:color}}></div>
  )
}

export default Box