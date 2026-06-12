import React, { useState } from 'react'
import Count from './components/Count'
import { use } from 'react'
// import Card from './components/Card'


const App = () => {
    const [count, setCount] = useState(0);
    function handleClick() {
        setCount(count+1);
    }
  return (
    <div>
        <Count handleClick = {handleClick} text="click me">
            <h1>{count}</h1>
        </Count>
    </div>
  )
}

export default App


// import { useState } from 'react'
// import Count from './components/Count'

// function App() {
//   const [count, setCount] = useState(0)

//   function handleClick() {
//     setCount(count + 1)
//   }

//   return (
//     <div>
//       <Count handleClick={handleClick} text="Click Me">
//         <h1>{count}</h1>
//       </Count>
//     </div>
//   )
// }

// export default App
