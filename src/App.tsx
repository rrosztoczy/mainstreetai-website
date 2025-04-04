import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Solution from './components/Solution'
import Process from './components/Process'
import Features from './components/Features'
// import Testimonials from './components/Testimonials'
import Founder from './components/Founder'
import FAQ from './components/FAQ'
import CTAPrimary from './components/CTAPrimary'
import CTASecondary from './components/CTASecondary'
import GlobalStyles from './styles/GlobalStyles'
import AIEngineering from './components/AIEngineering'
import Workshops from './components/Workshops'

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Hero />
      <AIEngineering />
      <Workshops />
      <Solution />
      <Process />
      <Features />
      <Founder />
      {/* <Testimonials /> */}
      <FAQ />
      <CTAPrimary />
      <CTASecondary />
    </>
  )
}

export default App
