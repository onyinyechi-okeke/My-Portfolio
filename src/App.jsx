import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Sociallinks from './Components/Sociallinks'
import About from './Pages/About'

function App() {
  return (
    <div className= ' h-screen w-full text-white'>
      <Navbar />
      <Home />
      <Sociallinks />
      
    </div>
  )
}

export default App