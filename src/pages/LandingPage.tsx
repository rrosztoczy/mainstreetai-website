import React from 'react'
import FirstFold from '../components/FirstFold'
import CostSavings from '../components/CostSavings'
import ServiceTiles from '../components/ServiceTiles'
import Timeline from '../components/Timeline'
import ProofStrip from '../components/ProofStrip'
import FooterTools from '../components/FooterTools'
import Founder from '../components/Founder'
import FAQ from '../components/FAQ'

const LandingPage: React.FC = () => (
  <>
    <FirstFold />
    <CostSavings />
    <ServiceTiles />
    <Timeline />
    <ProofStrip />
    <FooterTools />
    <Founder />
    <FAQ />
  </>
)

export default LandingPage