import React, { useState } from 'react'

const Card = (props) => {

  return (
    <div>
        <h1>Hello World</h1>
      <input type="text" onChange={(e)=>props.setName(e.target.value) } />
      <p>name ki value inside card component: {props.name}</p>
    </div>
  )
}

export default Card
