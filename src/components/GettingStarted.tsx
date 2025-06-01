import React from 'react';
import styled from 'styled-components';

/* —————————— styles —————————— */
const GettingStartedSection = styled.section`
  background-color: #f5f7fa;
  padding: 5rem 1rem;
  min-height: 60vh;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 1.9rem;
  margin-bottom: 2rem;
  color: #333;
`;

const Pills = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const Pill = styled.a`
  padding: 1.25rem 1.5rem;
  border-radius: 50px;
  background: white;
  border: 2px solid #1a2a6c;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  color: #1a2a6c;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.25s ease;

  &:hover {
    background: #1a2a6c;
    color: white;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

const Subtitle = styled.p`
  font-size: 0.95rem;
  margin-top: 1rem;
  color: #555;
`;

const PillWrapper = styled.div`
  flex: 1;
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1.5rem;
  min-height: 24rem;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

/* —————————— component —————————— */
const GettingStarted: React.FC = () => (
  <GettingStartedSection id="getting-started">
    <Container>
      <Title>Which best describes your team today?</Title>

      <Pills>
        {/* 1 · Not sure where to start */}
        <PillWrapper>
          <Pill
            href="mailto:info@mainstreetai.com?subject=AI%20Q%26A%20Chat&body=I'd%20like%20to%20schedule%20an%20AI%20Q%26A%20chat%20to%20get%20started."
          >
            Not sure where to start
          </Pill>
          <Subtitle>
            Technology is finally affordable—and understandable. Ask us anything.
          </Subtitle>
        </PillWrapper>

        {/* 2 · Loose threads */}
        <PillWrapper>
          <Pill
            href="mailto:info@mainstreetai.com?subject=Fit%20Call&body=I'd%20like%20to%20book%20an%20AI%20Assessment%20call."
          >
            Loose threads, need alignment
          </Pill>
          <Subtitle>
            We surface high-impact moves and hand you a shared roadmap.
          </Subtitle>
        </PillWrapper>

        {/* 3 · Pilot under-delivering */}
        <PillWrapper>
          <Pill
            href="mailto:info@mainstreetai.com?subject=Fit%20Call&body=I'd%20like%20to%20book%20a%20Fit%20call%20to%20improve%20our%20AI%20results."
          >
            Pilot under-delivering
          </Pill>
          <Subtitle>
            Our Align → Jump Start → Evolve framework unlocks the ROI you expect.
          </Subtitle>
        </PillWrapper>
      </Pills>
    </Container>
  </GettingStartedSection>
);

export default GettingStarted;