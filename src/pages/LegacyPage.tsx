import React from 'react'
import Hero from '../components/Hero'
import GettingStarted from '../components/GettingStarted'
import Services from '../components/Services'
import CTAPrimary from '../components/CTAPrimary'
import CTASecondary from '../components/CTASecondary'
import PrivateCloud from '../components/PrivateCloud'
import AIEngineering from '../components/AIEngineering'
import Difference from '../components/Difference'
import Partnership from '../components/Partnership'
import Workshops from '../components/Workshops'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'

const LegacyPage: React.FC = () => (
  <>
    <Hero />
    <GettingStarted />
    <Services />
    <CTAPrimary />
    <CTASecondary />
    <PrivateCloud />
    <AIEngineering />
    <Difference />
    <Partnership />
    <Workshops />
    <Testimonials />
    <FAQ />
  </>
)

export default LegacyPage