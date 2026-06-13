import React from 'react'


const App = () => {
  function handleClick(){
    alert("button Clicked!")
  }
  function handleMouse(){
    alert("Mouse hovered on para")
  }
  function handleChange() {
    alert("input field changed")
  }
  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <p onMouseOver={handleMouse}>This is Para</p>
      <input type="text" onChange={handleChange} />
    </div>
  )
}

export default App
