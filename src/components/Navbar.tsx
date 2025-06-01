import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import mediumLogo from '../assets/medium-logo.jpeg'; // Adjust path as needed

const Nav = styled.nav<{ scrolled: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s ease;
  background-color: ${({ scrolled }) => scrolled ? 'white' : 'transparent'};
  box-shadow: ${({ scrolled }) => scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'};
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  height: 40px;
  margin-right: 10px;
`;

const LogoText = styled.div<{ scrolled: boolean }>`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ scrolled }) => scrolled ? '#222222' : 'white'};
`;

const MenuItems = styled.div<{ isOpen: boolean }>`
  display: flex;
  
  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    background-color: white;
    padding: 1rem 0;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    transform: ${({ isOpen }) => isOpen ? 'translateY(0)' : 'translateY(-150%)'};
    opacity: ${({ isOpen }) => isOpen ? '1' : '0'};
  }
`;

const MenuItem = styled(Link)<{ scrolled: boolean }>`
  margin: 0 1rem;
  cursor: pointer;
  color: ${({ scrolled }) => scrolled ? '#333' : 'white'};
  font-weight: 500;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${({ scrolled }) => scrolled ? '#1a2a6c' : '#fdbb2d'};
  }
  
  @media (max-width: 768px) {
    margin: 0.5rem 0;
    padding: 0.5rem 2rem;
    color: #333;
    
    &:hover {
      color: #1a2a6c;
    }
  }
`;

const MenuButton = styled.button<{ scrolled: boolean }>`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${({ scrolled }) => scrolled ? '#333' : 'white'};
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const CTAButtonLink = styled.a`
  margin-left: 1rem;
  padding: 0.5rem 1rem;
  background-color: #5cb85c;
  color: white;
  border-radius: 4px;
  font-weight: 500;
  text-decoration: none;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #4cae4c;
  }
  @media (max-width: 768px) {
    margin: 0.5rem 0;
    padding: 0.5rem 2rem;
  }
`;

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <Nav scrolled={scrolled}>
      <LogoContainer>
        <LogoImage src={mediumLogo} alt="Mainstreet AI Logo" />
        <LogoText scrolled={scrolled}>Mainstreet AI</LogoText>
      </LogoContainer>
      <MenuButton scrolled={scrolled} onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MenuButton>
      <MenuItems isOpen={isOpen}>
        <MenuItem scrolled={scrolled} to="home" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Home</MenuItem>
        <MenuItem scrolled={scrolled} to="ai-engineering" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Why AI</MenuItem>
        <MenuItem scrolled={scrolled} to="getting-started" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Getting Started</MenuItem>
        <MenuItem scrolled={scrolled} to="services" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Services & Pricing</MenuItem>
        <MenuItem scrolled={scrolled} to="process" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Process</MenuItem>
        <MenuItem scrolled={scrolled} to="founder" smooth={true} duration={500} onClick={() => setIsOpen(false)}>About</MenuItem>
        <CTAButtonLink href="mailto:info@mainstreetai.com?subject=AI%Fit%20Request">
          Book a Fit Call
        </CTAButtonLink>
      </MenuItems>
    </Nav>
  );
};

export default Navbar; 