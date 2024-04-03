import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Sociallinks from './Components/Sociallinks'
import About from './Pages/About'
import Project from './Pages/Project'
import Skill from './Pages/Skill'
import Contact from './Pages/Contact'
import Footer from './Components/Footer'

function App() {
  return (
    <div className= ' h-screen w-full text-white'>
      <Navbar />
      <Home />
      <Sociallinks />
      <About />
      <Project />
      <Skill />
      <Contact />
      <Footer />
    </div>
  )
}

export default App