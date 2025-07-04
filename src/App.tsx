import React from 'react'
import Navbar from './components/Navbar'
import FirstFold from './components/FirstFold'
import CostSavings from './components/CostSavings'
import ServiceTiles from './components/ServiceTiles'
import Timeline from './components/Timeline'
import ProofStrip from './components/ProofStrip'
import FooterTools from './components/FooterTools'
import Founder from './components/Founder'
import FAQ from './components/FAQ'
import GlobalStyles from './styles/GlobalStyles'

import { ThemeProvider } from 'styled-components'
import theme from './styles/Theme'

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Navbar />
    <FirstFold />
    <CostSavings />
    <ServiceTiles />
    <Timeline />
    <ProofStrip />
    <FooterTools />
    <Founder />
    <FAQ />
  </ThemeProvider>
)

export default App
