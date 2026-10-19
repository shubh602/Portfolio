import { useState } from 'react'
import Header from './Components/Header'
import Hero from './Components/Hero'
import About from './Components/About'
import Skill from './Components/Skill'
import Work from './Components/Work'
import Contact from './Components/Contact'
import Portal from './Components/Portal'


function App() {

  return (
    <div className='relative  bg-linear-to-l from-blue-950 to-black text-white flex flex-col'>

     <Header />
     <Hero />
     <About />
     <Skill />
     <Work />
     <Contact /> 
  
     <Portal />
    </div> 
  )
}

export default App
