import React from 'react';
import styled from 'styled-components';
import { FaMapMarkedAlt, FaRocket, FaSyncAlt } from 'react-icons/fa';

/* ─────────────────────────  styled components ───────────────────────── */
const ServicesSection = styled.section`
  background: #ffffff;
  padding: 5rem 1rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeading = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
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

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const Card = styled.div`
  position: relative;
  background: #f9f9f9;
  padding: 2rem 1.75rem 2.75rem;
  border-radius: 10px;
  transition: transform 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-6px);
  }
`;

const Ribbon = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #1a2a6c;
  color: #fff;
  font-size: 0.9rem;
  font-weight: 700;
  padding: 0.25rem 0.6rem;
  border-radius: 3px;
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

const CardSub = styled.p`
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

const CTAButton = styled.a`
  display: inline-block;
  padding: 0.9rem 1.6rem;
  background: #1a2a6c;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 600;
  transition: background 0.25s;

  &:hover {
    background: #15306a;
  }
`;

/* ——— bundle banner ——— */
const BundleBanner = styled.div`
  margin: 4rem 0 2rem;
  padding: 2rem;
  border-left: 6px solid #1a2a6c;
  background: #eef2ff;
  border-radius: 8px;
  text-align: center;
`;

const BundleHeading = styled.h3`
  font-size: 1.6rem;
  margin-bottom: 0.5rem;
  color: #1a2a6c;
`;

const BundleText = styled.p`
  font-size: 1.05rem;
  line-height: 1.5;
  color: #444;
`;

const PathNote = styled.em`
  display: block;
  font-size: 0.9rem;
  text-align: center;
  color: #555;
  margin-top: 2rem;
`;

/* ─────────────────────────  component ───────────────────────── */
const Services: React.FC = () => (
  <ServicesSection id="services">
    <Container>
      <SectionHeading>Services &amp; Pricing</SectionHeading>

      <SectionLead>
        We deploy secure, customizable AI systems inside your
        cloud and integrate them with core data & workflows in record time.

        Our AI engineers work with your team to solve real business problems and unlock the potential of AI. When you don't have free capacity, we can also support, enhance and manage these systems.
      </SectionLead>

      {/* card grid */}
      <CardGrid>
        {/* Align */}
        <Card>
          <Ribbon>$16 k onsite / $7 k remote</Ribbon>
          <IconBox><FaMapMarkedAlt /></IconBox>
          <CardTitle>Align — AI Strategy Workshop</CardTitle>
          <CardSub>One shared roadmap in 48 hours (or a half-day remote).</CardSub>
          <BulletList>
            <Bullet>20 h prep interviews, customization, &amp; data review</Bullet>
            <Bullet>2-day onsite <strong>or</strong> 3–4 hr remote session</Bullet>
            <Bullet>Strategic roadmap and key opportunity assessment</Bullet>
          </BulletList>
          <CTAButton href="mailto:info@mainstreetai.com?subject=Align%20Workshop">
            Book Workshop
          </CTAButton>
        </Card>

        {/* Jump Start */}
        <Card>
          <Ribbon>$20-40 k scope</Ribbon>
          <IconBox><FaRocket /></IconBox>
          <CardTitle>Jump Start — 12-Week Deploy & Integrate Sprint</CardTitle>
          <CardSub>
            Launch secure AI tools in your tenant—tied to two to three workflows.
          </CardSub>
          <BulletList>
            <Bullet>12-week guided sprint</Bullet>
            <Bullet>Integrations with key apps &amp; DBs</Bullet>
            <Bullet>Staff enablement mini-sessions</Bullet>
            <Bullet>ROI &amp; governance playbook</Bullet>
          </BulletList>
          <CTAButton href="mailto:info@mainstreetai.com?subject=Jump%20Start%20Scope%20Call">
            Request Scope Call
          </CTAButton>
        </Card>

        {/* Operate & Enhance */}
        <Card>
          <Ribbon>$7.5 k / $5 k&nbsp;mo</Ribbon>
          <IconBox><FaSyncAlt /></IconBox>
          <CardTitle>Operate &amp; Enhance — Fractional AI Team</CardTitle>
          <CardSub>
            Keep it running, keep improving—without hiring an AI team.
          </CardSub>
          <BulletList>
            <Bullet>Monthly strategic &amp; progress review</Bullet>
            <Bullet>Real-time communication channel (next-business-day SLA)</Bullet>
            <Bullet>Advisory + feature hours (7.5 k)</Bullet>
            <Bullet>Ops-only care plan (5 k)</Bullet>
          </BulletList>
          <CTAButton href="mailto:info@mainstreetai.com?subject=Fit%20Call">
            Book a Fit Call
          </CTAButton>
        </Card>
      </CardGrid>

      {/* bundle banner */}
      <BundleBanner>
        <BundleHeading>Launch Pack — Align + Jump Start <strong>(Save 10%)</strong></BundleHeading>
        <BundleText>
          From no plan to a live pilot in six weeks. Limited to <strong>3 packs per quarter</strong>.
          &nbsp;
          <a href="mailto:info@mainstreetai.com?subject=Launch%20Pack%20Inquiry">Lock my slot →</a>
        </BundleText>
      </BundleBanner>

      <PathNote>
        Most clients graduate from Align → Jump Start → Operate &amp; Enhance within 90 to 120 days,
        then see usage mature and use-cases evolve over the next 12-18 months.
      </PathNote>
    </Container>
  </ServicesSection>
);

export default Services;