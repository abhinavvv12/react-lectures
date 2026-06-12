import React from 'react'
import './UserCard.css'

const UserCard = (props) => {
  return (
    <div className='user-container' style={props.style}>
        <h1 id='user-title'>{props.name}</h1>
        <img id='user-img' src={props.image} alt="image" />
        <p id='user-desc'>{props.desc}</p>
      
    </div>
  )
}

export default UserCard
