import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import LandingPage from './Components/LandingPage/LandingPage'
import Marquee from './Components/Marquee/Marquee'
import About from './Components/About/About'
import Eyes from './Components/Eyes/Eyes'
import FeaturedProjects from './Components/FeaturedProjects/FeaturedProjects'
import Cards from './Components/Cards/Cards'
import StartTheProject from './Components/StartTheProject/StartTheProject'
import Footer from './Components/Footer/Footer'
import LocomotiveScroll from 'locomotive-scroll';


const App = () => {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <div className="w-full h-screen">
        <Navbar />
        <LandingPage />
        <Marquee />
        <About />
        <Eyes />
        <FeaturedProjects />
        <Cards />
        <StartTheProject />
        <Footer />
   
      </div>


    </>
  )
}

export default App
