import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { FaHandshake, FaCogs } from 'react-icons/fa';

/* ─────────────────────────── styled components ─────────────────────────── */
const DifferenceSection = styled.section`
  padding: 5rem 1rem;
  background: #f5f7fa;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`; 

const SectionHeading = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1.2rem;
  color: #333;
`;

const SectionLead = styled.p`
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
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
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
  font-size: 2.6rem;
  color: #1a2a6c;
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 0.6rem;
  color: #333;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #444;
  margin-bottom: 1.25rem;
`;

const BulletList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const Bullet = styled.li`
  position: relative;
  padding-left: 1.2rem;
  margin-bottom: 0.55rem;
  font-size: 0.95rem;
  color: #555;

  &:before {
    content: '✓';
    position: absolute;
    left: 0;
    color: #4caf50;
    font-weight: 700;
  }
`;

const CTAButton = styled(Link)`
  display: inline-block;
  margin-top: 1.25rem;
  padding: 0.75rem 1.5rem;
  background-color: #1a2a6c;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.25s ease;

  &:hover {
    background-color: #15306a;
  }
`;

/* ───────────────────────────── component ───────────────────────────── */
const Difference: React.FC = () => (
  <DifferenceSection id="difference">
    <Container>
      <SectionHeading>
        Partnership + Technology: The Future of Artificial Intelligence.
      </SectionHeading>

      <SectionLead>
        We bring a start-up pace, long-term discipline, and partnership focus to our work. Our approach mean we see a lot of challenges, solutions, and innovations. Everything we learn gets incorporated into our model platform - which means you benefit from the experiences of many.
      </SectionLead>

      <Grid>
        {/* Partnership */}
        <Card>
          <IconBox>
            <FaHandshake />
          </IconBox>
          <CardTitle>Action-Oriented Partnership</CardTitle>
          <Subtitle>We feel like that internal hire that always gets things done.</Subtitle>
          <BulletList>
            <Bullet>We move fast, with progress each week</Bullet>
            <Bullet>Our engineers embed with your team to solve the right problems</Bullet>
            <Bullet>Decisions, actions and solutions are communicated automatically</Bullet>
          </BulletList>
          <CTAButton to="process" smooth={true} duration={500}>
            Learn how we work
          </CTAButton>
        </Card>

        {/* Technology */}
        <Card>
          <IconBox>
            <FaCogs />
          </IconBox>
          <CardTitle>Technology — Platform Edge</CardTitle>
          <Subtitle>Your Private, Company-Specific AI Tools</Subtitle>
          <BulletList>
            <Bullet>Custom deployments mean your system evolves with your business</Bullet>
            <Bullet>One core platform means you stay up to date on state-of-the-art LLMs, Tools, and Features</Bullet>
          </BulletList>
          <CTAButton to="private-cloud" smooth={true} duration={500}>
            Learn about our technology
          </CTAButton>
        </Card>
      </Grid>
    </Container>
  </DifferenceSection>
);

export default Difference;