import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Partnership from './components/Partnership'
import PrivateCloud from './components/PrivateCloud'
import Founder from './components/Founder'
import FAQ from './components/FAQ'
import CTAPrimary from './components/CTAPrimary'
import CTASecondary from './components/CTASecondary'
import GlobalStyles from './styles/GlobalStyles'
import Workshops from './components/Workshops'
import Difference from './components/Difference'
import Services from './components/Services'
import GettingStarted from './components/GettingStarted'

import { ThemeProvider } from 'styled-components'
import theme from './styles/Theme'

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Navbar />
    <Hero />
    <GettingStarted />
    <Services />
    <Difference />
    <Workshops />
    <PrivateCloud />
    <Partnership />
    <Founder />
    <FAQ />
    <CTAPrimary />
    <CTASecondary />
  </ThemeProvider>
)

export default App
