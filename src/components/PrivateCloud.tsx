import React from 'react';
import styled from 'styled-components';
import { FaChartLine, FaCog, FaComments, FaSearch, FaUserShield } from 'react-icons/fa';

const Section = styled.section`
  padding: 5rem 1rem;
  background-color: #f5f7fa;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1.5rem;
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

const Grid = styled.div`
  display: grid;
  gap: 2rem;
  /* Force a two-by-two layout for the four outcome cards */
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 600px) {
    /* Stack to one column on narrow viewports */
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: #ffffff;
  border-radius: 10px;
  padding: 2rem 1.75rem;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-6px);
  }
`;

const IconBox = styled.div`
  font-size: 2.5rem;
  color: #1a2a6c;
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #333;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #444;
  margin-bottom: 1.25rem;
  line-height: 1.5;
`;

const BulletList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0 0 1.75rem;
`;

const Bullet = styled.li`
  margin-bottom: 0.6rem;
  position: relative;
  padding-left: 1.2rem;
  font-size: 0.95rem;
  line-height: 1.4;
  color: #555;

  &:before {
    content: '✓';
    position: absolute;
    left: 0;
    color: #4caf50;
    font-weight: 700;
  }
`;

const CTAWrapper = styled.div`
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CTA = styled.a`
  display: inline-block;
  margin-bottom: 1rem;
  padding: 0.75rem 1.5rem;
  background-color: #1a2a6c;
  color: white;
  border-radius: 5px;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.25s ease;

  &:hover {
    background-color: #15306a;
  }
`;

const LockNote = styled.p`
  font-size: 0.9rem;
  color: #555;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const PrivateCloud: React.FC = () => (
  <Section id="private-cloud">
    <Container>
      <Heading>Our Technology Puts State of the Art Tools in Your Hands</Heading>

      <Lead>
        We deploy leading models from OpenAI (multimodal, reasoning, and more). Then we integrate them with powerful tools and your critical data sources <strong>inside
        your cloud tenant</strong>—so data, comms, and AI stay under your control
        and unlock high-impact wins across the business.
      </Lead>

      <Grid>
        {/* BI */}
        <Card>
          <IconBox><FaChartLine /></IconBox>
          <CardTitle>Business&nbsp;Intelligence</CardTitle>
          <Subtitle>Get the answers you've been waiting for</Subtitle>
          <BulletList>
            <Bullet>Ask questions about your data in plain English</Bullet>
            <Bullet>Perform sophisticated analysis in real-time with AI assistants</Bullet>
            <Bullet>Integrate your Data Lake, CRM, PoS, or other key data sources</Bullet>
          </BulletList>
        </Card>

        {/* Workflow */}
        <Card>
          <IconBox><FaCog /></IconBox>
          <CardTitle>Workflow Automation</CardTitle>
          <Subtitle>Accelerate or automate resource intensive workflows</Subtitle>
          <BulletList>
            <Bullet>Integrate AI into existing workflows to unblock bottlenecks</Bullet>
            <Bullet>Schedule jobs for AI to free up resources</Bullet>
            <Bullet>Use AI to execute the tasks you've never had time for</Bullet>
          </BulletList>
        </Card>

        {/* Comms / Co-Pilot */}
        <Card>
          <IconBox><FaComments /></IconBox>
          <CardTitle>Communications and Content</CardTitle>
          <Subtitle>Generate on-brand, personalized communications</Subtitle>
          <BulletList>
            <Bullet>Turn transcripts and messages into actionable tasks</Bullet> 
            <Bullet>Generate a variety of content from the work you already do including process documentation, marketing materials, and more</Bullet>
            <Bullet>Generate on-brand, personalized communications</Bullet>
          </BulletList>
        </Card>

        {/* Research */}
        <Card>
          <IconBox><FaSearch /></IconBox>
          <CardTitle>Research &amp; Knowledge</CardTitle>
          <Subtitle>Goodbye knowledge silos</Subtitle>
          <BulletList>
            <Bullet>Support your teams with instant answers to their questions</Bullet>
            <Bullet>Unlock meeting notes, CRM communications, process documents, and more</Bullet>
          </BulletList>
        </Card>
      </Grid>

      <CTAWrapper>
        <LockNote>
          <FaUserShield /> Data stays in your cloud—always.
        </LockNote>
      </CTAWrapper>
    </Container>
  </Section>
);

export default PrivateCloud;