import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import LandingPage from './Components/LandingPage/LandingPage'
import Marquee from './Components/Marquee/Marquee'
import About from './Components/About/About'
import Eyes from './Components/Eyes/Eyes'

const App = () => {
  return (
    <>
      <div className="w-full h-screen">
        <Navbar />
        <LandingPage />
        <Marquee />
        <About />
        <Eyes />
      </div>


    </>
  )
}

export default App
