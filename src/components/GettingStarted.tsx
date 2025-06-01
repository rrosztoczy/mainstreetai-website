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

const Subtitle = styled.div`
  font-size: 0.95rem;
  margin-top: 1rem;
  color: #555;
  text-align: left;

  ul {
    margin: 0.75rem 0 1.5rem 1.5rem;
    padding: 0;
    list-style-position: outside;
  }

  li {
    margin-bottom: 0.5rem;
    list-style-type: disc;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  color: #1a2a6c;
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

const Recommendation = styled.p`
  margin: 1rem 0;
  font-size: 0.95rem;
  color: #333;
  text-align: left;
  strong {
    font-weight: 600;
  }
`;

/* —————————— component —————————— */
const GettingStarted: React.FC = () => (
  <GettingStartedSection id="getting-started">
    <Container>
      <Title>Which best describes your team today?</Title>

      <Pills>
        {/* 1 · Not sure where to start */}
        <PillWrapper>
          <CardTitle>Not sure where to start</CardTitle>
          <Subtitle>
            <strong>Key challenges:</strong>
            <ul>
              <li>Don’t fully understand AI yet</li>
              <li>Unsure how it applies to your business</li>
              <li>Stakeholders aren’t aligned on a path forward</li>
            </ul>
          </Subtitle>
          <Recommendation>
            <strong>Our recommendation:</strong> Book one of our AI workshops and come out educated, confident, and ready to get started.
          </Recommendation>
          <Pill href="mailto:info@mainstreetai.com?subject=AI%20Q%26A%20Chat&body=I'd%20like%20to%20schedule%20an%20AI%20Q%26A%20chat%20to%20get%20started.">
            Learn more about our workshops
          </Pill>
        </PillWrapper>

        {/* 2 · Loose threads */}
        <PillWrapper>
          <CardTitle>Loose threads, need alignment</CardTitle>
          <Subtitle>
            <strong>Common scenarios:</strong>
            <ul>
              <li>Teams pursuing isolated pilots or adopting ad‑hoc tools</li>
              <li>Scattered efforts and missed opportunities</li>
              <li>Added risk without the reward</li>
            </ul>
            We’ll educate and align your team, surface what’s in motion and what should be in motion, and create a strategic roadmap.
          </Subtitle>
          <Recommendation>
            <strong>Our recommendation:</strong> Schedule an AI Assessment Call to map existing pilots and unify your roadmap.
          </Recommendation>
          <Pill href="mailto:info@mainstreetai.com?subject=Fit%20Call&body=I'd%20like%20to%20book%20an%20AI%20Assessment%20call.">
            Book an AI Assessment Call
          </Pill>
        </PillWrapper>

        {/* 3 · Under resourced */}
        <PillWrapper>
          <CardTitle>Under-resourced</CardTitle>
          <Subtitle>
            <strong>Typical hurdles:</strong>
            <ul>
              <li>Lacking technical know-how</li>
              <li>Small or non‑existent tech team</li>
              <li>Limited capacity to progress AI initiatives</li>
            </ul>
            We augment your resources with expert AI engineers or a fractional head of AI/CTO.
          </Subtitle>
          <Recommendation>
            <strong>Our recommendation:</strong> Engage our AI Engineering services or fractional AI/CTO to rapidly scale your capabilities.
          </Recommendation>
          <Pill href="mailto:info@mainstreetai.com?subject=Fit%20Call&body=I'd%20like%20to%20book%20a%20Fit%20call%20to%20improve%20our%20AI%20results.">
            Book a Fit Call
          </Pill>
        </PillWrapper>
      </Pills>
    </Container>
  </GettingStartedSection>
);

export default GettingStarted;