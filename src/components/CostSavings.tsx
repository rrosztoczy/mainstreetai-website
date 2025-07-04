import React from 'react'
import styled from 'styled-components'
import landingContent from '../content/landing'

const Section = styled.section`
  padding: 4rem 1rem;
  background-color: ${(props) => props.theme.colors.accent};
  color: ${(props) => props.theme.colors.white};
  text-align: center;
`

const Savings = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.h2};
  margin-bottom: 1rem;
`

const Formula = styled.p`
  font-size: ${(props) => props.theme.fontSizes.bodyLg};
  font-weight: bold;
  margin-bottom: 1rem;
`

const Benefits = styled.p`
  font-size: ${(props) => props.theme.fontSizes.body};
  max-width: 600px;
  margin: 0 auto;
`

const CostSavings: React.FC = () => {
  const { costSavings } = landingContent

  return (
    <Section id="cost-savings">
      <Savings>{costSavings.annualSavings}</Savings>
      <Formula>{costSavings.formula}</Formula>
      <Benefits>{costSavings.extraBenefits}</Benefits>
    </Section>
  )
}

export default CostSavings