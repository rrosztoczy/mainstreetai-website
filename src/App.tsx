import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Process from './components/Process'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CTAPrimary from './components/CTAPrimary'
import CTASecondary from './components/CTASecondary'
import GlobalStyles from './styles/GlobalStyles'

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Process />
      <Features />
      <Testimonials />
      <FAQ />
      <CTAPrimary />
      <CTASecondary />
    </>
  )
}

export default App
