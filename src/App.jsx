import React from 'react'
import NavBar from './NavBar'
import HeroSection from './HeroSection'
import Herosection2 from './Herosection2'
import Aboutproject from './Aboutproject'
import KaamSection from './KaamSection'
import ContactForm from './ContactForm'
import CustomGlassInstallations from './CustomGlassInstallations'
import AnimatedText from './AnimateText'
import Footer from './Footer'

const App = () => {
  return (
    <>
     <NavBar></NavBar>
     {/* <AnimatedText></AnimatedText> */}
     <HeroSection></HeroSection>
     <Herosection2></Herosection2>
     <Aboutproject></Aboutproject>
     <KaamSection></KaamSection>
     <CustomGlassInstallations ></CustomGlassInstallations>
     <ContactForm></ContactForm>
     <Footer></Footer>
    </>
  )
}

export default App