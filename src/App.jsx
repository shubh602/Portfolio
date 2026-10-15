import { useState } from 'react'
import Header from './Components/Header'
import Hero from './Components/Hero'
import About from './Components/About'
import Skill from './Components/Skill'
import Work from './Components/Work'
import Contact from './Components/Contact'
import Timeline from './Components/Timeline'

function App() {

  return (
    <div className='relative  bg-linear-to-l from-blue-950 to-black text-white flex flex-col'>

     <Header />
     <Hero />
     <About />
     <Skill />
     <Timeline />   
     <Work />
     <Contact /> 

    </div> 
  )
}

export default App
