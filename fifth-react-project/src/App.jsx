// import React from 'react'
import React, { useState } from 'react';
import Card from './components/Card'

const App = () => {
    const [name, setName] = useState('');
  return (
    <div>
      <Card name={name} setName = {setName}/>
      <p>name ki value inside App component: {name}</p>
      <Card name={name} setName = {setName}/>
      {/* <h1>Hello World</h1> */}
    </div>
  )
}

export default App
