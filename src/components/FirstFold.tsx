import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'
import landingContent from '../content/landing'

const Section = styled.section`
  position: relative;
  padding: 4rem 1rem;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.h1};
  margin-bottom: 1rem;
  font-weight: 700;
`

const Subtitle = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.h2};
  margin-bottom: 1.5rem;
  font-style: italic;
`

const Rotating = styled.span`
  display: inline-block;
  transition: opacity 0.5s ease;
`

const SupportLine = styled.p`
  max-width: 600px;
  font-size: ${(props) => props.theme.fontSizes.bodyLg};
  color: ${(props) => props.theme.colors.text.secondary};
  line-height: ${(props) => props.theme.lineHeights.body};
  margin-bottom: 2rem;
`

const CTARow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`

const FounderBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: ${(props) => props.theme.fontSizes.textSm};
  color: ${(props) => props.theme.colors.text.secondary};
  margin-bottom: 2rem;
`

const FounderAvatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`

const ScrollCue = styled(Link)`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.text.secondary};
  cursor: pointer;
`

const FirstFold: React.FC = () => {
  const { firstFold } = landingContent
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const rotator = setInterval(
      () => setIndex((i) => (i + 1) % firstFold.rotatorTerms.length),
      3000
    )
    return () => clearInterval(rotator)
  }, [firstFold.rotatorTerms.length])

  return (
    <Section id="home">
      <Title>{firstFold.headline}</Title>
      <Subtitle>
        {firstFold.subHeadlineTemplate}{' '}
        <Rotating key={index}>{firstFold.rotatorTerms[index]}</Rotating>
      </Subtitle>
      <SupportLine>{firstFold.supportLine}</SupportLine>

      <CTARow>
        <div
          className="calendly-inline-widget"
          data-url={firstFold.primaryCTA.widgetUrl}
          style={{ minWidth: '320px', height: '700px' }}
        />
        {firstFold.secondaryCTAs.map((cta) => (
          <a key={cta.text} href={cta.href}>
            {cta.text}
          </a>
        ))}
      </CTARow>

      <FounderBadge>
        <FounderAvatar src={firstFold.founder.avatar} alt={firstFold.founder.name} />
        <span>{firstFold.founder.text}</span>
      </FounderBadge>

      <ScrollCue to="cost-savings" smooth duration={500}>
        ↓
      </ScrollCue>
    </Section>
  )
}

export default FirstFold