import React from 'react';
import styled from 'styled-components';
import { FaRobot, FaChartLine, FaUserShield, FaTools } from 'react-icons/fa';

const FeaturesSection = styled.section`
  padding: 5rem 1rem;
  background-color: white;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeading = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #333;
`;

const FeatureBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    
    &:nth-child(even) {
      flex-direction: row-reverse;
    }
  }
`;

const FeatureContent = styled.div`
  flex: 1;
  padding: 2rem;
  
  @media (min-width: 768px) {
    padding: 2rem 4rem;
  }
`;

const FeatureImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 8rem;
  color: #1a2a6c;
  padding: 2rem;
  
  @media (max-width: 768px) {
    font-size: 6rem;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #333;
`;

const FeatureDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 1.5rem;
`;

const FeatureList = styled.ul`
  list-style-type: none;
  margin-left: 0;
`;

const FeatureItem = styled.li`
  margin-bottom: 1rem;
  display: flex;
  align-items: flex-start;
  
  &:before {
    content: '✓';
    color: #4CAF50;
    margin-right: 0.5rem;
    font-weight: bold;
  }
`;

const Features: React.FC = () => {
  return (
    <FeaturesSection id="features">
      <Container>
        <SectionHeading>Enterprise-Grade AI Capabilities</SectionHeading>
        
        <FeatureBlock>
          <FeatureImage>
            <FaRobot />
          </FeatureImage>
          <FeatureContent>
            <FeatureTitle>Secure AI Deployment</FeatureTitle>
            <FeatureDescription>
              Deploy powerful AI models within your secure environment, ensuring complete data privacy and sovereignty.
            </FeatureDescription>
            <FeatureList>
              <FeatureItem>On-premises or private cloud deployment options</FeatureItem>
              <FeatureItem>End-to-end encryption for all data</FeatureItem>
              <FeatureItem>No external data sharing or model training</FeatureItem>
              <FeatureItem>Full compliance with industry regulations</FeatureItem>
            </FeatureList>
          </FeatureContent>
        </FeatureBlock>
        
        <FeatureBlock>
          <FeatureImage>
            <FaChartLine />
          </FeatureImage>
          <FeatureContent>
            <FeatureTitle>Intelligent Process Automation</FeatureTitle>
            <FeatureDescription>
              Transform your business operations with AI-powered automation that learns and improves over time.
            </FeatureDescription>
            <FeatureList>
              <FeatureItem>Automate repetitive tasks with intelligent workflows</FeatureItem>
              <FeatureItem>Extract insights from unstructured data</FeatureItem>
              <FeatureItem>Reduce processing time by up to 80%</FeatureItem>
              <FeatureItem>Continuous improvement through machine learning</FeatureItem>
            </FeatureList>
          </FeatureContent>
        </FeatureBlock>
        
        <FeatureBlock>
          <FeatureImage>
            <FaUserShield />
          </FeatureImage>
          <FeatureContent>
            <FeatureTitle>Knowledge Management & Retrieval</FeatureTitle>
            <FeatureDescription>
              Transform your organization's knowledge into an intelligent resource that empowers every team member.
            </FeatureDescription>
            <FeatureList>
              <FeatureItem>Centralize and organize all company knowledge</FeatureItem>
              <FeatureItem>Intelligent search and contextual recommendations</FeatureItem>
              <FeatureItem>Automatic knowledge extraction from documents</FeatureItem>
              <FeatureItem>Personalized knowledge delivery based on roles</FeatureItem>
            </FeatureList>
          </FeatureContent>
        </FeatureBlock>
        
        <FeatureBlock>
          <FeatureImage>
            <FaTools />
          </FeatureImage>
          <FeatureContent>
            <FeatureTitle>Custom AI Solutions</FeatureTitle>
            <FeatureDescription>
              Develop tailored AI applications that address your specific business challenges and opportunities.
            </FeatureDescription>
            <FeatureList>
              <FeatureItem>Customized AI models for your industry</FeatureItem>
              <FeatureItem>Integration with existing systems and workflows</FeatureItem>
              <FeatureItem>Ongoing optimization and enhancement</FeatureItem>
              <FeatureItem>Comprehensive training and support</FeatureItem>
            </FeatureList>
          </FeatureContent>
        </FeatureBlock>
      </Container>
    </FeaturesSection>
  );
};

export default Features; 