import React from 'react';
import styled from 'styled-components';
import { FaRobot, FaCode, FaChartLine, FaShieldAlt } from 'react-icons/fa';

const AIEngineeringSection = styled.section`
  padding: 5rem 1rem;
  background-color: white;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const SectionHeading = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1.5rem;
  color: #333;
`;

const SectionSubheading = styled.p`
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #666;
  line-height: 1.6;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.div`
  background-color: #f5f7fa;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }
`;

const IconWrapper = styled.div`
  font-size: 2.5rem;
  color: #1a2a6c;
  margin-bottom: 1.5rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
`;

const ServiceDescription = styled.p`
  color: #666;
  line-height: 1.6;
`;

const CaseStudySection = styled.div`
  margin-top: 4rem;
  padding: 2.5rem;
  background: linear-gradient(135deg, #f5f7fa, #e5e9f0);
  border-radius: 10px;
`;

const CaseStudyHeading = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #333;
  text-align: center;
`;

const CaseStudyContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const CaseStudyItem = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const CaseStudyTitle = styled.h4`
  font-size: 1.3rem;
  margin-bottom: 0.8rem;
  color: #1a2a6c;
`;

const CaseStudyText = styled.p`
  color: #555;
  line-height: 1.6;
`;

const AIEngineering: React.FC = () => {
  return (
    <AIEngineeringSection id="ai-engineering">
      <Container>
        <SectionHeading>AI Engineering Excellence</SectionHeading>
        <SectionSubheading>
          Our team of specialized AI engineers brings cutting-edge artificial intelligence capabilities to your business, 
          creating custom solutions that drive real results and competitive advantage.
        </SectionSubheading>
        
        <ServicesGrid>
          <ServiceCard>
            <IconWrapper>
              <FaRobot />
            </IconWrapper>
            <ServiceTitle>Custom AI Development</ServiceTitle>
            <ServiceDescription>
              We build tailored AI solutions that address your specific business challenges. From natural language processing 
              to computer vision and predictive analytics, our engineers create systems that deliver measurable value.
            </ServiceDescription>
          </ServiceCard>
          
          <ServiceCard>
            <IconWrapper>
              <FaCode />
            </IconWrapper>
            <ServiceTitle>AI Integration</ServiceTitle>
            <ServiceDescription>
              Seamlessly integrate AI capabilities into your existing systems and workflows. We ensure your AI solutions 
              work harmoniously with your current technology stack, minimizing disruption while maximizing impact.
            </ServiceDescription>
          </ServiceCard>
          
          <ServiceCard>
            <IconWrapper>
              <FaChartLine />
            </IconWrapper>
            <ServiceTitle>AI Strategy & Roadmapping</ServiceTitle>
            <ServiceDescription>
              Develop a comprehensive AI strategy aligned with your business goals. We help you identify high-impact 
              opportunities, prioritize initiatives, and create a clear roadmap for AI implementation and scaling.
            </ServiceDescription>
          </ServiceCard>
          
          <ServiceCard>
            <IconWrapper>
              <FaShieldAlt />
            </IconWrapper>
            <ServiceTitle>Secure AI Deployment</ServiceTitle>
            <ServiceDescription>
              Implement AI solutions with enterprise-grade security and governance. We ensure your AI systems are 
              deployed responsibly, with appropriate controls for data privacy, compliance, and ethical use.
            </ServiceDescription>
          </ServiceCard>
        </ServicesGrid>
        
        {/* <CaseStudySection>
          <CaseStudyHeading>Success Stories</CaseStudyHeading>
          <CaseStudyContent>
            <CaseStudyItem>
              <CaseStudyTitle>Financial Services Transformation</CaseStudyTitle>
              <CaseStudyText>
              </CaseStudyText>
            </CaseStudyItem>
            
            <CaseStudyItem>
              <CaseStudyTitle>Manufacturing Efficiency</CaseStudyTitle>
              <CaseStudyText>
              </CaseStudyText>
            </CaseStudyItem>
          </CaseStudyContent>
        </CaseStudySection> */}
      </Container>
    </AIEngineeringSection>
  );
};

export default AIEngineering; 