import React from "react";
import styled from "styled-components";
import { 
  FaBuilding, 
  FaHeartbeat, 
  FaShoppingCart, 
  FaUniversity, 
  FaLandmark, 
  FaPlane 
} from "react-icons/fa";

export default function KeyIndustries() {
  const industries = [
    { 
      name: "Finance", 
      icon: <FaLandmark />, 
      color: "#4361EE", 
      gradient: "linear-gradient(135deg, #4361EE 0%, #3A0CA3 100%)" 
    },
    { 
      name: "Healthcare", 
      icon: <FaHeartbeat />, 
      color: "#F72585", 
      gradient: "linear-gradient(135deg, #F72585 0%, #7209B7 100%)" 
    },
    { 
      name: "E-Commerce", 
      icon: <FaShoppingCart />, 
      color: "#4CC9F0", 
      gradient: "linear-gradient(135deg, #4CC9F0 0%, #4361EE 100%)" 
    },
    { 
      name: "Education", 
      icon: <FaUniversity />, 
      color: "#FB8500", 
      gradient: "linear-gradient(135deg, #FB8500 0%, #FFBF00 100%)" 
    },
    { 
      name: "Real Estate", 
      icon: <FaBuilding />, 
      color: "#2EC4B6", 
      gradient: "linear-gradient(135deg, #2EC4B6 0%, #048BA8 100%)" 
    },
    { 
      name: "Travel", 
      icon: <FaPlane />, 
      color: "#FF5400", 
      gradient: "linear-gradient(135deg, #FF5400 0%, #FF0054 100%)" 
    }
  ];

  return (
    <IndustriesSection>
      <BackgroundDecoration />
      <div className="container">
        <Header>
          <Accent>Specialized Expertise</Accent>
          <Title>Key Industries We Serve</Title>
          <Divider />
          <Subtitle>
            Delivering tailored solutions across diverse sectors with deep domain knowledge
          </Subtitle>
        </Header>

        <IndustriesGrid>
          {industries.map((industry, index) => (
            <IndustryItem key={index} delay={index * 0.1}>
              <IconWrapper>
                <IconCircle gradient={industry.gradient}>
                  {industry.icon}
                  <GlowEffect color={industry.color} />
                </IconCircle>
              </IconWrapper>
              <IndustryName color={industry.color}>{industry.name}</IndustryName>
            </IndustryItem>
          ))}
        </IndustriesGrid>
      </div>
    </IndustriesSection>
  );
}

const IndustriesSection = styled.section`
  padding: 90px 0;
  background-color: #f8f9fa;
  position: relative;
  overflow: hidden;
`;

const BackgroundDecoration = styled.div`
  position: absolute;
  top: -50px;
  right: -50px;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(67, 97, 238, 0.1), rgba(76, 201, 240, 0.1));
  z-index: 0;

  &:before {
    content: "";
    position: absolute;
    left: -150px;
    bottom: -100px;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(247, 37, 133, 0.1), rgba(114, 9, 183, 0.1));
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 60px;
  position: relative;
  z-index: 1;
`;

const Accent = styled.span`
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #4361EE;
  display: block;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  color: #1A1A1A;
  margin-bottom: 20px;
  position: relative;
`;

const Divider = styled.div`
  width: 80px;
  height: 4px;
  background: linear-gradient(to right, #4361EE, #4CC9F0);
  margin: 0 auto 20px;
  border-radius: 2px;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`;

const IndustriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  
  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
`;

const IndustryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.4s ease;
  transform: translateY(20px);
  opacity: 0;
  animation: fadeInUp 0.6s forwards;
  animation-delay: ${props => props.delay || 0}s;
  
  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const IconWrapper = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

const IconCircle = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: ${props => props.gradient || 'linear-gradient(135deg, #4361EE 0%, #3A0CA3 100%)'};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  font-size: 2rem;
  color: white;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: all 0.3s ease;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(100%);
    transition: transform 0.3s ease;
    z-index: -1;
  }
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2);
    
    &:before {
      transform: translateY(0);
    }
  }
`;

const GlowEffect = styled.div`
  position: absolute;
  width: 150%;
  height: 150%;
  background: ${props => props.color || '#4361EE'};
  filter: blur(30px);
  opacity: 0.25;
  z-index: -1;
`;

const IndustryName = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: ${props => props.color || '#333'};
  margin: 0;
  transition: all 0.3s ease;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%) scaleX(0);
    width: 100%;
    height: 2px;
    background: ${props => props.color || '#333'};
    transition: transform 0.3s ease;
  }
  
  ${IconCircle}:hover + & {
    &:after {
      transform: translateX(-50%) scaleX(1);
    }
  }
`;