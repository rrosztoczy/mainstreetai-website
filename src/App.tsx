import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Process from './components/Process'
import PrivateCloud from './components/PrivateCloud'
import Founder from './components/Founder'
import FAQ from './components/FAQ'
import CTAPrimary from './components/CTAPrimary'
import CTASecondary from './components/CTASecondary'
import GlobalStyles from './styles/GlobalStyles'
import AIEngineering from './components/AIEngineering'
import Workshops from './components/Workshops'
import Difference from './components/Difference'
import Services from './components/Services'
import GettingStarted from './components/GettingStarted'

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Hero />
      <GettingStarted />
      <Services />
      <Difference />
      <PrivateCloud />
      <AIEngineering />
      <Workshops />
      <Process />
      <Founder />
      <FAQ />
      <CTAPrimary />
      <CTASecondary />
    </>
  )
}

export default App
