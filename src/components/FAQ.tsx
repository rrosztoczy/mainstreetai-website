import React, { useState } from 'react';
import styled from 'styled-components';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { FAQItemType } from '../types';

const FAQSection = styled.section`
  padding: 5rem 1rem;
  background-color: white;
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const SectionHeading = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #333;
`;

const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FAQItem = styled.div`
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
`;

const FAQQuestion = styled.button<{ isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1.5rem;
  background-color: ${({ isOpen }) => isOpen ? '#f5f7fa' : 'white'};
  border: none;
  text-align: left;
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #f5f7fa;
  }
`;

const FAQAnswer = styled.div<{ isOpen: boolean }>`
  padding: ${({ isOpen }) => isOpen ? '0 1.5rem 1.5rem' : '0 1.5rem'};
  max-height: ${({ isOpen }) => isOpen ? '500px' : '0'};
  overflow: hidden;
  transition: all 0.3s ease;
  line-height: 1.6;
  color: #666;
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: #1a2a6c;
`;

// FAQ data
const faqItems: FAQItemType[] = [
  {
    id: 1,
    question: "What makes MainStreet AI different from other AI solutions?",
    answer: "MainStreet AI focuses on deploying secure, enterprise-grade AI within your own infrastructure, ensuring complete data sovereignty and privacy. Unlike cloud-based solutions that send your data to external servers, our approach keeps your sensitive information within your control while still providing advanced AI capabilities."
  },
  {
    id: 2,
    question: "Do I need technical expertise to implement your AI solutions?",
    answer: "No. Our team handles the technical implementation and provides comprehensive training for your team. We work closely with you to understand your business needs and ensure a smooth integration with your existing systems and workflows."
  },
  {
    id: 3,
    question: "How long does it take to implement your AI solutions?",
    answer: "Implementation timelines vary based on the complexity of your needs and existing infrastructure. Typically, our initial assessment and basic implementation can be completed within 4-6 weeks, with more complex integrations taking 2-3 months. We provide a detailed timeline during our initial consultation."
  },
  {
    id: 4,
    question: "What kind of ROI can I expect from implementing AI?",
    answer: "Our clients typically see ROI in three main areas: increased operational efficiency (20-40% reduction in process time), improved decision-making through better data insights, and enhanced customer experiences. During our assessment, we'll identify specific metrics relevant to your business and establish baseline measurements to track improvement."
  },
  {
    id: 5,
    question: "How do you ensure the security of our data?",
    answer: "Security is our top priority. We deploy AI models within your existing secure environment, ensuring your data never leaves your control. We implement end-to-end encryption, role-based access controls, and follow industry best practices for security. Additionally, we can work with your security team to address any specific compliance requirements."
  },
  {
    id: 6,
    question: "What ongoing support do you provide after implementation?",
    answer: "We offer comprehensive support packages that include regular maintenance, performance monitoring, model updates, and technical support. We also provide ongoing training for your team as capabilities evolve and can help you identify new opportunities to leverage AI as your business grows."
  }
];

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  
  const toggleItem = (id: number) => {
    if (openItems.includes(id)) {
      setOpenItems(openItems.filter(item => item !== id));
    } else {
      setOpenItems([...openItems, id]);
    }
  };
  
  return (
    <FAQSection id="faq">
      <Container>
        <SectionHeading>Frequently Asked Questions</SectionHeading>
        <FAQList>
          {faqItems.map((item) => (
            <FAQItem key={item.id}>
              <FAQQuestion 
                isOpen={openItems.includes(item.id)}
                onClick={() => toggleItem(item.id)}
              >
                {item.question}
                <IconWrapper>
                  {openItems.includes(item.id) ? <FaChevronUp /> : <FaChevronDown />}
                </IconWrapper>
              </FAQQuestion>
              <FAQAnswer isOpen={openItems.includes(item.id)}>
                {item.answer}
              </FAQAnswer>
            </FAQItem>
          ))}
        </FAQList>
      </Container>
    </FAQSection>
  );
};

export default FAQ; 