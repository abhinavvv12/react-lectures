import React from 'react'
import { useEffectEvent } from 'react';
import { useState } from 'react'
import { useEffect } from 'react'


const App = () => {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  // first-> side Effect function
  // second-> clean-up function
  // third-> comma seperated dependency list
  function handleClick() {
    setCount(count+1);
  }

  function handleClickTotal() {
    setTotal(total+1);
  }

  // variation1: 

  // runs on every render
  // useEffect(() => {
  //   alert(" I will run on every render")
  // })


  // variation2:
  // runs on first render only

  // useEffect(() => {
  //   alert('I will render only on 1st render');
  // },[])


  // variation:3

  // useEffect(()=>{
  //   alert("I will run every time when count is updated")
  // }, [count])


  // variation:4
  // multiple dependencies

  // useEffect(() => {
  //   alert("I will run everytime count, total runs")

  // }, [count,total])


  



  return (
    <div>
      <button onClick={handleClick}>Update Count</button>
      <p>Count is {count} </p>
      {/* <br /> */}
      <button onClick={handleClickTotal}>Update Total</button>
      <p>Total is {total} </p>
    </div>
  )
}

export default App

