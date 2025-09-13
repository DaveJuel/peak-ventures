import React from "react";
import styled from "styled-components";
import CertificationView from "../../components/Sections/CertificateView";
import TeamView from "../../components/Sections/TeamMembers";
import Hero from "../../components/Sections/Hero";
import ServicesFocusAreas from "../../components/Sections/ServiceFocusAreas";
import AboutUsSection from "../../components/Sections/AboutUsSection";

const theme = {
  primary: "#3C8C3C",
  dark: "#121212",
  white: "#FFFFFF",
  lightGreen: "#E8F5E8",
  mediumGreen: "#6AAC6A",
  gray: "#F5F5F5",
};

export default function AboutUs({ hero, focus, mission, vision, values, cta }) {
  const certifications = [
    {
      title: "CERTIFICATE OF WORK COMPLETION",
      pdfPath: "/certificates/brac_certificate.pdf",
      issuer: "BRAC",
      fileName: "brac_certificate.pdf",
    },
    {
      title: "CERTIFICATE OF COMPLETION",
      pdfPath: "/certificates/christian_service_cert.pdf",
      issuer: "CHRISTIAN SERVICE INTERNATIONAL",
      fileName: "christian_service_cert.pdf",
    },
    {
      title: "CERTIFICATE OF GOOD COMPLETION",
      pdfPath: "/certificates/ea_agro.pdf",
      issuer: "EA Agro",
      fileName: "ea_agro.pdf",
    },
    {
      title: "CERTIFICATE OF EXECUTION BY CONTRACTOR",
      pdfPath: "/certificates/gil_cert.pdf",
      issuer: "Civil Engineer",
      fileName: "gil_cert.pdf",
    },
  ];

  const teamData = [
    {
      name: "Eng. Phillip MUTIJIMA",
      position: "Managing Director",
      description:
        "Phillip is a highly motivated, goal-driven and seasoned Civil Engineer possessing leadership and critical thinking expertise. He brings 5 years of practical experience in the execution of various civil projects across different provinces of Rwanda.",
    },
    {
      name: "Dora Ndahiro TENGERA",
      position: "Administration",
      description:
        "Dora directs and manages the business' administrative operations and management of the PEAK VENTURES team collectively. Being an Insurance professional with more than 6 years of practical experience in both Claims Management and Risk Underwriting.",
    },
    {
      name: "Eng. Gilbert UJENEZA",
      position: "Structural & Architect",
      description:
        "Gilbert is a detail-oriented Architect with over 4 years of working experience adept at designing commercial and residential projects. He is proficient with AutoCAD, and Autodesk Revit, ArchiCAD and Sketch Up just to mention a few. He holds a Bachelor Degree in civil works from University of Rwanda.",
    },
    {
      name: "Eng. Joseph TUYISHIME",
      position: "Site Engineer",
      description:
        "Joseph holds a Bachelor of Engineering in Civil Engineering from University of Rwanda KIST Branch. His experience includes the Kigali Karama road Decongestion Project where he was stationed at the project as a Consulting Engineer. He has proven proficiency in Architectural and Structural Drawing with Computer Aided Design software packages such as AutoCAD, Revit, Civil3D, Tekla, Prota and many others. Additionally, Joseph has worked as a Site Engineer on numerous residential housing and commercial projects.",
    },
  ];

  return (
    <Container>
      <Hero />
      <ContentWrapper>
        <AboutUsSection />
        <ServicesFocusAreas />
        <StorySection id="mission-vision">
          <SectionHeading>Our Focus</SectionHeading>
          <Divider />
          <SectionText>{focus}</SectionText>
        </StorySection>
        <GridSection>
          <MissionCard>
            <CardHeading>Mission</CardHeading>
            <CardText>{mission}</CardText>
          </MissionCard>

          <VisionCard>
            <CardHeading>Vision</CardHeading>
            <CardText>{vision}</CardText>
          </VisionCard>
        </GridSection>

        <ValuesSection>
          <SectionHeading>Core Values</SectionHeading>
          <Divider />
          <ValuesList>
            {values.map((value, idx) => (
              <ValueItem key={idx}>
                <ValueIcon>✦</ValueIcon>
                <span>{value}</span>
              </ValueItem>
            ))}
          </ValuesList>
        </ValuesSection>
        <CertificationSection id="certifications">
          <SectionHeading>Certifications</SectionHeading>
          <CertificationView certifications={certifications} />
        </CertificationSection>
        <TeamSection id="team">
          <SectionHeading>Our Team</SectionHeading>
          <TeamView teamMembers={teamData} />
        </TeamSection>
      </ContentWrapper>
    </Container>
  );
}

const Container = styled.div`
  color: ${theme.dark};
  background-color: ${theme.white};
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

const SectionHeading = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${theme.primary};
  text-align: center;
  margin-bottom: 16px;
`;

export const Divider = styled.div`
  height: 4px;
  width: 80px;
  background-color: ${theme.primary};
  margin: 0 auto 32px;
  border-radius: 2px;
`;

const SectionText = styled.p`
  font-size: 1.125rem;
  line-height: 1.8;
  color: ${theme.dark};
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

const StorySection = styled.section`
  padding: 100px 0 30px;
`;

const GridSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
  margin: 40px 0;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Card = styled.div`
  padding: 40px 32px;
  border-radius: 12px;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
  }
`;

const MissionCard = styled(Card)`
  background-color: ${theme.primary};
  color: ${theme.white};
`;

const VisionCard = styled(Card)`
  background-color: ${theme.lightGreen};
  color: ${theme.dark};
  border: 2px solid ${theme.primary};
`;

const CardHeading = styled.h3`
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 20px;
`;

const CardText = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  flex-grow: 1;
`;

const ValuesSection = styled.section`
  padding: 80px 0;
  background-color: ${theme.gray};
  margin: 60px -24px;
  padding: 80px 24px;
`;

const ValuesList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  margin-top: 40px;
`;

const ValueItem = styled.li`
  background-color: ${theme.white};
  color: ${theme.dark};
  padding: 16px 24px;
  border-radius: 30px;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border-left: 4px solid ${theme.primary};
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

const ValueIcon = styled.span`
  color: ${theme.primary};
  margin-right: 10px;
  font-size: 1.2rem;
`;

const CertificationSection = styled.section`
  margin: 80px 0;
`;

// Styled components for consistent layout
const TeamSection = styled.section`
  margin: 80px 0;
`;
