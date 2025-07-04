import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage'
import LegacyPage from './pages/LegacyPage'
import GlobalStyles from './styles/GlobalStyles'

import { ThemeProvider } from 'styled-components'
import theme from './styles/Theme'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/private-ai-solutions" element={<LegacyPage />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
)

export default App
