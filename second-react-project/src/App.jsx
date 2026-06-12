
import './App.css'
import UserCard from './components/UserCard'
import image1 from './assets/react.svg'
import image2 from './assets/hero.png'
import image3 from './assets/vite.svg'

function App() {
  return (
    <div className='main-container'>
      <UserCard name ='Hero' desc = 'desc1' image = {image1} style = {{"border-radius" : "15px"}}/>
      <UserCard name ="React" desc = 'desc2' image = {image2} style = {{"border-radius" : "15px"}}/>
      <UserCard name = "Vite" desc = 'desc3' image = {image3} style = {{"border-radius" : "15px"}}/>      
    </div>
  )
}

export default App
