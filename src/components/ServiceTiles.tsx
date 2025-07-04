import React from 'react'
import styled from 'styled-components'
import landingContent from '../content/landing'

const Section = styled.section`
  padding: 4rem 1rem;
  background-color: ${({ theme }) => theme.colors.background};
`

const Grid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
`

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  padding: 2rem;
  border-radius: 8px;
  text-align: left;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
`

const Title = styled.h3`
  margin-bottom: 0.5rem;
  font-size: ${({ theme }) => theme.fontSizes.h3};
  font-weight: 600;
`

const Benefit = styled.p`
  margin: 0.5rem 0;
  font-size: ${({ theme }) => theme.fontSizes.bodyLg};
  font-weight: 500;
`

const Subline = styled.p`
  margin: 0.5rem 0;
  font-size: ${({ theme }) => theme.fontSizes.body};
  font-style: italic;
  color: ${({ theme }) => theme.colors.text.secondary};
`

const Examples = styled.ol`
  margin: 1rem 0 0 1.25rem;
  padding: 0;
  list-style-position: inside;
  color: ${({ theme }) => theme.colors.text.primary};
`

const ServiceTiles: React.FC = () => {
  const { serviceTiles } = landingContent

  return (
    <Section id="services">
      <Grid>
        {serviceTiles.map((tile) => (
          <Card key={tile.title}>
            <Title>{tile.title}</Title>
            <Benefit>{tile.logicalBenefit}</Benefit>
            <Subline>{tile.emotionalHook}</Subline>
            <Examples>
              {tile.examples.map((ex, i) => (
                <li key={i}>{ex}</li>
              ))}
            </Examples>
          </Card>
        ))}
      </Grid>
    </Section>
  )
}

export default ServiceTiles