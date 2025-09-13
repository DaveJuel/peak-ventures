import React from "react";
import styled from "styled-components";
import {
  FaBuilding,
  FaRoad,
  FaThLarge,
  FaDrawPolygon,
  FaPaintRoller,
  FaWater,
  FaTools,
  FaDraftingCompass,
  FaProjectDiagram,
} from "react-icons/fa";

export default function ServicesFocusAreas() {

  const services = [
    {
      icon: <FaBuilding />,
      title: "Building Construction",
      description:
        "Full-scale residential, commercial, and industrial building construction delivered with quality and safety in mind.",
      color: "#4CAF50",
      link: "/services/building-construction",
    },
    {
      icon: <FaRoad />,
      title: "General Civil Works",
      description:
        "Expert civil engineering services, covering infrastructure and foundational works for reliable development.",
      color: "#2196F3",
      link: "/services/civil-works",
    },
    {
      icon: <FaThLarge />,
      title: "Concrete Works",
      description:
        "Durable and precise concrete works for strong structural foundations and reliable performance.",
      color: "#FF9800",
      link: "/services/concrete-works",
    },
    {
      icon: <FaDrawPolygon />,
      title: "Kerbs & Walkway Pavements",
      description:
        "Design and construction of kerbs, pavements, and walkways built for safety, durability, and aesthetics.",
      color: "#9C27B0",
      link: "/services/kerbs-walkways",
    },
    {
      icon: <FaPaintRoller />,
      title: "Finishes",
      description:
        "High-quality interior finishes including painting, tiling, ceiling, and bulkhead design for modern appeal.",
      color: "#FF5722",
      link: "/services/finishes",
    },
    {
      icon: <FaWater />,
      title: "Water & Waste-water Reticulation",
      description:
        "Professional water and waste-water reticulation services ensuring efficient flow and sustainable systems.",
      color: "#00BCD4",
      link: "/services/water-wastewater",
    },
    {
      icon: <FaTools />,
      title: "Building Maintenance",
      description:
        "Regular maintenance and repair services that protect and extend the lifespan of your buildings.",
      color: "#009688",
      link: "/services/building-maintenance",
    },
    {
      icon: <FaDraftingCompass />,
      title: "Renovations & Architectural Design",
      description:
        "Custom renovations and architectural designs that blend innovation with functionality.",
      color: "#795548",
      link: "/services/renovations-architectural-design",
    },
    {
      icon: <FaProjectDiagram />,
      title: "Project Management & Consultancy",
      description:
        "Professional consultancy and project management ensuring safe, timely, and cost-effective delivery.",
      color: "#607D8B",
      link: "/services/project-management-consultancy",
    },
  ];

  return (
    <ServicesWrapper id="service-section">
      <div className="container">
        <HeaderInfo>
          {/* <SubHeading>GET TO KNOW WHAT WE DO</SubHeading> */}
          <MainHeading>Our Services</MainHeading>
          <HeadingUnderline />
        </HeaderInfo>

        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard key={index}>
              <IconWrapper color={service.color}>{service.icon}</IconWrapper>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
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

// const SubHeading = styled.h3`
//   font-size: 1rem;
//   color: #666;
//   text-transform: uppercase;
//   letter-spacing: 1px;
//   margin-bottom: 10px;
//   font-weight: 500;
// `;

const MainHeading = styled.h1`
  font-size: 2.8rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 20px;
`;

const HeadingUnderline = styled.div`
  width: 80px;
  height: 4px;
  background: linear-gradient(to right, #a2a3b0, #656565);
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
  color: ${(props) => props.color || "#A2A3B0"};
`;

const ServiceTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: #1a1a1a;
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
`;