import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { FaBookOpen, FaRoute, FaCogs } from 'react-icons/fa';

const Section = styled.section`
  background: #ffffff;
  padding: 5rem 1rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Eyebrow = styled.p`
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.8rem;
  font-weight: 700;
  color: #1a2a6c;
  margin-bottom: 0.75rem;
`;

const Heading = styled.h2`
  text-align: center;
  font-size: 2.25rem;
  color: #1f2937;
  margin-bottom: 0.75rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Subhead = styled.p`
  text-align: center;
  max-width: 900px;
  margin: 0 auto 2.5rem;
  color: #4b5563;
  line-height: 1.7;
  font-size: 1.05rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.25rem;
`;

const Card = styled.article`
  background: #f8fafc;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 1.5rem;
`;

const IconWrap = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #e0e7ff;
  color: #1a2a6c;
  font-size: 1.2rem;
  margin-bottom: 0.9rem;
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  color: #1f2937;
  margin-bottom: 0.6rem;
`;

const CardText = styled.p`
  color: #374151;
  line-height: 1.6;
  margin-bottom: 0.8rem;
`;

const BulletList = styled.ul`
  margin: 0;
  padding-left: 1.1rem;
  color: #4b5563;
  line-height: 1.6;
`;

const CTASection = styled.div`
  margin-top: 2rem;
  text-align: center;
`;

const CTAButtons = styled.div`
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const CTAButtonBase = styled(Link)`
  display: inline-block;
  padding: 0.85rem 1.25rem;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.2s ease;
`;

const PrimaryCTA = styled(CTAButtonBase)`
  background: #1a2a6c;
  color: #ffffff;

  &:hover {
    background: #122055;
  }
`;

const SecondaryCTA = styled(CTAButtonBase)`
  background: transparent;
  border: 1px solid #1a2a6c;
  color: #1a2a6c;

  &:hover {
    background: #eef2ff;
  }
`;

const CTAMicrocopy = styled.p`
  margin-top: 0.75rem;
  color: #6b7280;
  font-size: 0.92rem;
`;

const WhatWeBuild: React.FC = () => (
  <Section id="what-we-build">
    <Container>
      <Eyebrow>What Mainstreet Builds</Eyebrow>
      <Heading>A production AI system your business can run.</Heading>
      <Subhead>
        An Intelligent System you can run: a Knowledge Foundation, a Context
        Engine, and Workflow Automation built into your existing tools.
      </Subhead>

      <Grid>
        <Card>
          <IconWrap>
            <FaBookOpen />
          </IconWrap>
          <CardTitle>Knowledge Foundation</CardTitle>
          <CardText>
            Turn your scattered documents, systems, and institutional knowledge
            into an AI-ready layer your team can trust.
          </CardText>
          <BulletList>
            <li>Ground every answer and action in your real data.</li>
            <li>Make expertise queryable and usable across teams.</li>
          </BulletList>
        </Card>

        <Card>
          <IconWrap>
            <FaRoute />
          </IconWrap>
          <CardTitle>Context Engine</CardTitle>
          <CardText>
            Deliver the right context to the right person or agent at the
            moment work happens.
          </CardText>
          <BulletList>
            <li>Role-aware and task-aware outputs that stay consistent.</li>
            <li>Less noise and fewer wrong answers.</li>
          </BulletList>
        </Card>

        <Card>
          <IconWrap>
            <FaCogs />
          </IconWrap>
          <CardTitle>Workflow Automation</CardTitle>
          <CardText>
            Encode your best processes so work runs autonomously for routine
            tasks and human-in-the-loop for exceptions.
          </CardText>
          <BulletList>
            <li>Automate execution across tools you already use.</li>
            <li>Every run generates feedback that improves the system.</li>
          </BulletList>
        </Card>
      </Grid>

      <CTASection>
        <CTAButtons>
          <PrimaryCTA to="contact" smooth={true} duration={500}>
            Book a Fit Call
          </PrimaryCTA>
          <SecondaryCTA to="getting-started" smooth={true} duration={500}>
            See How It Works
          </SecondaryCTA>
        </CTAButtons>
        <CTAMicrocopy>
          30-minute working session. We map your highest-leverage opportunities
          across Knowledge, Context, and Workflow.
        </CTAMicrocopy>
      </CTASection>
    </Container>
  </Section>
);

export default WhatWeBuild;
