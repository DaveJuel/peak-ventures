import React from "react";
import styled from "styled-components";

// Create new TeamSection component to display team information
export const TeamRoles = ({ teamData }) => {
  return (
    <TeamSectionWrapper>
      <div className="container">
        <SectionHeading centered>
          <GreenAccent centered />
          Our Team
        </SectionHeading>
        <TeamIntro>{teamData.intro}</TeamIntro>
        
        <TeamCount>
          <TeamCountNumber>{teamData.count}+</TeamCountNumber>
          <TeamCountText>Dedicated Professionals</TeamCountText>
        </TeamCount>
        
        <TeamRolesGrid>
          {teamData.roles.map((role, idx) => (
            <TeamRoleCard key={idx}>
              <RoleIcon>{role.icon}</RoleIcon>
              <RoleTitle>{role.title}</RoleTitle>
              <RoleDescription>{role.description}</RoleDescription>
            </TeamRoleCard>
          ))}
        </TeamRolesGrid>
        
        <TeamOutro>{teamData.outro}</TeamOutro>
      </div>
    </TeamSectionWrapper>
  );
};

// Styled components for the TeamSection
const TeamSectionWrapper = styled.section`
  padding: 90px 20px;
  background: white;

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
`;

const TeamIntro = styled.p`
  font-size: 1.25rem;
  max-width: 800px;
  margin: 0 auto 40px;
  text-align: center;
  color: #555;
  line-height: 1.7;
`;

const TeamCount = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const TeamCountNumber = styled.div`
  font-size: 4rem;
  font-weight: 700;
  color: #3c8c3c;
  line-height: 1;
`;

const TeamCountText = styled.div`
  font-size: 1.25rem;
  color: #121212;
  margin-top: 8px;
`;

const TeamRolesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-bottom: 60px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TeamRoleCard = styled.div`
  background: #f9f9f9;
  padding: 32px;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease;
  border-left: 4px solid #3c8c3c;
  
  &:hover {
    transform: translateY(-8px);
  }
`;

const RoleIcon = styled.div`
  font-size: 2rem;
  color: #3c8c3c;
  margin-bottom: 16px;
`;

const RoleTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 12px;
  color: #121212;
`;

const RoleDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
`;

const TeamOutro = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: #555;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
  font-style: italic;
`;

// Reusing GreenAccent and SectionHeading from DedicatedTeam
const GreenAccent = styled.span`
  display: block;
  width: ${(props) => (props.centered ? "80px" : "60px")};
  height: 4px;
  background: #3c8c3c;
  margin: ${(props) => (props.centered ? "0 auto 15px" : "0 0 15px")};
`;

const SectionHeading = styled.h2`
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 30px;
  text-align: ${(props) => (props.centered ? "center" : "left")};
  color: #121212;
`;