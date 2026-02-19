import React from 'react';
import styled from 'styled-components';
import {
  FaMapMarkedAlt,
  FaRocket,
  FaSyncAlt,
  FaLightbulb,
  FaHandshake,
} from 'react-icons/fa';

/* ——— styled components ——— */

const Section = styled.section`
  padding: 5rem 1rem;
  background-color: #ffffff;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
  color: #333;
`;

const Lead = styled.p`
  font-size: 1.15rem;
  line-height: 1.6;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem;
  color: #555;
`;

const Steps = styled.div`
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: calc(50% - 1px);
    width: 2px;
    background-color: #ddd;
    @media (max-width: 768px) { left: 30px; }
  }
`;

const Step = styled.div`
  display: flex;
  margin-bottom: 3rem;
  @media (max-width: 768px) { flex-direction: column; }
  &:nth-child(odd) { flex-direction: row-reverse;
    @media (max-width: 768px) { flex-direction: column; } }
`;

const StepNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px; height: 60px;
  background-color: #1a2a6c; color: #fff;
  border-radius: 50%; font-size: 1.4rem;
  z-index: 2; margin: 0 auto; box-shadow: 0 4px 15px rgba(0,0,0,0.15);
  @media (max-width: 768px) { margin: 0; position: absolute; left: 0; }
`;

const StepContent = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  width: calc(50% - 50px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  @media (max-width: 768px) { width: calc(100% - 60px); margin-left: 60px; }
`;

const TitleRow = styled.div`
  display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;
  svg { color: #1a2a6c; font-size: 1.3rem; }
`;

const StepTitle = styled.h3`
  font-size: 1.4rem; margin: 0; color: #333;
`;

const Text = styled.p` color: #666; line-height: 1.55; margin-top: 0.5rem; `;

const InlineCTA = styled.a`
  color: #1a2a6c; font-weight: 600; text-decoration: none;
  &:hover { text-decoration: underline; }
`;

/* ——— component ——— */

const Partnership: React.FC = () => (
  <Section id="partnership">
    <Container>
      <Heading>Partnership: Your Four-Move Journey</Heading>
      <Lead>
        We act like that internal hire who always gets things done. Our goal is to get you believing in AI - which means meaningful progress every week.
      </Lead>

      <Steps>
        {/* 1. Align */}
        <Step>
          <StepNumber>1</StepNumber>
          <StepContent>
            <TitleRow>
              <FaMapMarkedAlt />
              <StepTitle>Align — Strategy Workshop</StepTitle>
            </TitleRow>
            <Text>
              One workshop → a roadmap everyone agrees to. Prep
              interviews and live workshopping are distilled into a 12-month action plan your team
              can approve on the spot.
            </Text>
          </StepContent>
        </Step>

        {/* 2. Jump Start */}
        <Step>
          <StepNumber>2</StepNumber>
          <StepContent>
            <TitleRow>
              <FaRocket />
              <StepTitle>Jump&nbsp;Start — 12-Week Pilot</StepTitle>
            </TitleRow>
            <Text>
              Your embedded engineer ships our tech securely to your Azure
              tenant and wires up your critical data sources.{' '}
              <InlineCTA href="mailto:info@mainstreetai.com?subject=6-Week%20Timeline%20Request">
                Ask about a timeline for your business
              </InlineCTA>
            </Text>
          </StepContent>
        </Step>

        {/* 3. Operate & Enhance */}
        <Step>
          <StepNumber>3</StepNumber>
          <StepContent>
            <TitleRow>
              <FaSyncAlt />
              <StepTitle>Operate & Enhance</StepTitle>
            </TitleRow>
            <Text>
              Monthly strategic &amp; progress reviews, ongoing support, and continuous feature sprints mean AI never leaves you behind.
            </Text>
          </StepContent>
        </Step>

        {/* 4. Evolve */}
        <Step>
          <StepNumber>4</StepNumber>
          <StepContent>
            <TitleRow>
              <FaLightbulb />
              <StepTitle>Evolve — Innovation Sprints</StepTitle>
            </TitleRow>
            <Text>
              On-demand four-to-twelve-week bursts that unlock the next big win—new
              workflows, fresh integrations, and deeper intelligence as needed.
            </Text>
          </StepContent>
        </Step>
      </Steps>

      {/* subtle partnership footer */}
      <Lead style={{ marginTop: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '.5rem' }}>
        <FaHandshake /> From Day&nbsp;1 to Day&nbsp;N, we’re on the hook with you.
      </Lead>
    </Container>
  </Section>
);

export default Partnership;
