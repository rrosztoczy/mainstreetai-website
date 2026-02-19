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
    question: "What makes Mainstreet AI different from other AI solutions?",
    answer: "We are not a SaaS company - we are a services company that believes in true partnership. The technology we deploy becomes yours - it is our job to help you capitalize on the opportunities it creates and continue to evolve as your business grows."
  },
  {
    id: 2,
    question: "Do I need technical expertise to implement your AI solutions?",
    answer: "No, but we are happy to work with technical teams. Our team can handle the technical implementation and provides comprehensive training for yours. We work closely with you to understand your business needs and ensure a smooth integration with your existing systems and workflows."
  },
  {
    id: 3,
    question: "How long does it take to implement your AI solutions?",
    answer: "Typically, our initial assessment and proof of concept can be completed within weeks, with more complex projects taking 3-6 months. Organizational adoption can be slower, with mature adoption occurring over a 9-18 month span. We provide a detailed timeline during our initial consultation."
  },
  {
    id: 4,
    question: "What kind of ROI can I expect from implementing AI?",
    answer: "During our assessment, we'll identify specific opportunities relevant to your business and establish baseline measurements to track improvement. If we don't think 3-10x ROI is achievable within the first two years, we are not the right partner for you."
  },
  {
    id: 5,
    question: "What ongoing support do you provide after implementation?",
    answer: "Our standard agreement includes ongoing support and AI advisory, new feature and capability development, and access to the newest models and tools. Additional consulting and custom development are also available."
  },
  {
    id: 6,
    question: "How does your partnership model work?",
    answer: "Our core service includes a dedicated forward deployed engineer who works directly with your team. This expert becomes an extension of your organization, understanding your business needs and continuously evolving your AI capabilities. Rather than a one-time implementation, we establish an ongoing partnership to ensure your AI solutions grow with your business and adapt to new technological advancements."
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
