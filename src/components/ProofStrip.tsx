import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import landingContent from '../content/landing'

const Section = styled.section`
  padding: 4rem 1rem;
  background-color: ${({ theme }) => theme.colors.background};
  text-align: center;
`;

const Metrics = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const MetricCard = styled.div`
  flex: 1;
`;

const Number = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.h2};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const Label = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.bodyLg};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: 0.5rem;
`;

const Description = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.body};
  color: ${({ theme }) => theme.colors.text.primary};
`;

interface CounterProps {
  metric: string;
  copy: string;
}

const Counter: React.FC<CounterProps> = ({ metric, copy }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [viewed, setViewed] = useState(false)
  const [count, setCount] = useState(0)

  // Extract number, unit, and label from metric string
  const match = metric.match(/^([+\-–]?\d+)([%×])\s*(.+)$/u)
  const rawNumber = match?.[1] ?? '0'
  const unit = match?.[2] ?? ''
  const label = match?.[3] ?? metric
  const target = parseInt(rawNumber.replace(/\u2013/, '-'), 10)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setViewed(true)
          observer.disconnect()
        }
      })
    })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!viewed) return
    let start: number | null = null

    const duration = 1000
    const step = (timestamp: number) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }
    requestAnimationFrame(step)
  }, [viewed, target])

  return (
    <MetricCard ref={ref}>
      <Number>
        {count}
        {unit}
      </Number>
      <Label>{label}</Label>
      <Description>{copy}</Description>
    </MetricCard>
  )
}

const ProofStrip: React.FC = () => {
  const { proofMetrics } = landingContent

  return (
    <Section id="proof-strip">
      <Metrics>
        {proofMetrics.map((item, i) => (
          <Counter key={i} metric={item.metric} copy={item.copy} />
        ))}
      </Metrics>
    </Section>
  )
}

export default ProofStrip