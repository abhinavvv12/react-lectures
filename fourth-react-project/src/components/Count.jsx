import React from 'react'

const Count = (props) => {
  return (
    <div>
      {props.children}
      <button onClick={props.handleClick}>
        {props.text}
      </button>
    </div>
  )
}

export default Count
