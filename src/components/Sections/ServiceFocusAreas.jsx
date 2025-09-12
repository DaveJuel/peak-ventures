import React from "react";
import styled from "styled-components";
import { FaLaptop, FaMobile, FaCogs } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaChartGantt } from "react-icons/fa6";

export default function ServicesFocusAreas() {
  const navigate = useNavigate();

  const services = [
    {
      icon: <FaLaptop />,
      title: "Web Development",
      description: "Web-based software development services for companies that are ready to grow.",
      color: "#4CAF50",
      link: "/services/web-applications"
    },
    {
      icon: <FaMobile />,
      title: "Mobile Development",
      description: "Mobile business and product custom applications that provide exceptional user experience.",
      color: "#2196F3",
      link:"/services/mobile-applications"
    },
    {
      icon: <FaChartGantt />,
      title: "Planning & Integration",
      description: "Our Strategic Project Planning service transforms business objectives into actionable project roadmaps.",
      color: "#FF9800",
      link:"/project/planning"
    },
    {
      icon: <FaCogs />,
      title: "Infrastructure Provisioning",
      description: "We specialize in robust infrastructure provisioning and system administration, ensuring high availability, security, and performance.",
      color: "#9C27B0",
      link: "/sysadmin/infrastructure-provisioning"
    }
  ];

  return (
    <ServicesWrapper>
      <div className="container">
        <HeaderInfo>
          <SubHeading>GET TO KNOW WHAT WE'RE GOOD AT</SubHeading>
          <MainHeading>Our main areas of focus</MainHeading>
          <HeadingUnderline />
        </HeaderInfo>

        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard key={index}>
              <IconWrapper color={service.color}>
                {service.icon}
              </IconWrapper>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              <LearnMoreLink onClick={()=>navigate(service.link)}>
                <ArrowIcon>→</ArrowIcon>
              </LearnMoreLink>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </div>
    </ServicesWrapper>
  );
}

const ServicesWrapper = styled.section`
  width: 100%;
  padding: 80px 0;
  background: #fff;
`;

const HeaderInfo = styled.div`
  margin-bottom: 60px;
  text-align: center;
  position: relative;
`;

const SubHeading = styled.h3`
  font-size: 1rem;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 10px;
  font-weight: 500;
`;

const MainHeading = styled.h1`
  font-size: 2.8rem;
  font-weight: 700;
  color: #1A1A1A;
  margin-bottom: 20px;
`;

const HeadingUnderline = styled.div`
  width: 80px;
  height: 4px;
  background: linear-gradient(to right, #A2A3B0, #656565);
  margin: 0 auto 25px;
  border-radius: 2px;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const IconWrapper = styled.div`
  font-size: 2rem;
  margin-bottom: 20px;
  color: ${props => props.color || "#A2A3B0"};
`;

const ServiceTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: #1A1A1A;
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const LearnMoreLink = styled.a`
  margin-top: auto;
  cursor: pointer;
  color: #FF6B35;
  font-weight: 500;
  display: flex;
  align-items: center;
  
  &:hover {
    color: #E95420;
  }
`;

const ArrowIcon = styled.span`
  color: #FF6B35;
  font-size: 1.2rem;
`;