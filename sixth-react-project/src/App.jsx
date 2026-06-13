import React, { useState }from 'react'
import LoginBtn from './components/LoginBtn';
import LogoutBtn from './components/LogoutBtn';

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(true);
    if (isLoggedIn) {
      return (
        <LogoutBtn />
      )
    }
    else {
      return (
        <LoginBtn />
      )
    }
}

export default App

