import React from 'react';
import styled from 'styled-components';
import founderImage from '../assets/founder.jpg'; // You'll need to add your headshot to the assets folder

const FounderSection = styled.section`
  padding: 5rem 1rem;
  background-color: #f5f7fa;
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
`;

const SectionHeading = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
`;

const FounderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageContainer = styled.div`
  margin-bottom: 2.5rem;
`;

const FounderImage = styled.img`
  width: 100%;
  max-width: 600px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const ContentContainer = styled.div`
  max-width: 800px;
`;

const FounderName = styled.h3`
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: #333;
`;

const FounderTitle = styled.p`
  font-size: 1.3rem;
  font-weight: 500;
  margin-bottom: 2rem;
  color: #555;
`;

const FounderVision = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
  text-align: left;
  margin-bottom: 2rem;
`;

const FounderBio = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
  text-align: left;
`;

const Founder: React.FC = () => {
  return (
    <FounderSection id="founder">
      <Container>
        <SectionHeading>Meet Our Founder</SectionHeading>
        <FounderContainer>
          <ImageContainer>
            <FounderImage src={founderImage} alt="Ryan Rosztoczy, Founder of Mainstreet AI" />
          </ImageContainer>
          <ContentContainer>
            <FounderName>Ryan Rosztoczy</FounderName>
            <FounderTitle>Founder & Chief AI Engineer</FounderTitle>
            <FounderVision>
              The best future is one in which our businesses and people are superpowered by AI. 
              Intelligence cannot be the exclusive domain of tech giants—it must be accessible, 
              practical, and transformative for every organization. By educating our clients, creating true partnerships,
              and deploying expert AI engineers we are helping businesses tranform into their future selves.

              Our clients will be the winners of the AI revolution, and so will we.
            </FounderVision>
            <FounderBio>
              I founded Mainstreet AI to bridge the gap between cutting-edge AI capabilities and practical business applications. Before Mainstreet AI, 
              I helped build Gather Learning where we worked with prestigous universities and cultural organizations to bring their learning platforms to life. As a software engineer and AI power user, I immediately realized that the same tools that were transforming software development were also poised to transform every industry.
            </FounderBio>
          </ContentContainer>
        </FounderContainer>
      </Container>
    </FounderSection>
  );
};

export default Founder; 