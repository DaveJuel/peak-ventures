import React from 'react';
import styled from 'styled-components';

// Styled components
const GridSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 40px;
  margin: 80px 0;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }
  
  @media (min-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const TeamCard = styled.div`
  background: ${props => props.theme?.white || '#ffffff'};
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid ${props => props.theme?.lightGray || '#e5e5e5'};
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
  
  @media (max-width: 767px) {
    padding: 24px;
  }
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 24px;
  
  @media (max-width: 567px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 16px;
  }
`;

const ProfileImage = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${props => props.theme?.primary || '#3C8C3C'}, ${props => props.theme?.primaryLight || '#608860ff'});
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 1.5rem;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3);
  
  @media (max-width: 567px) {
    width: 100px;
    height: 100px;
    font-size: 1.75rem;
  }
`;

const ProfileInfo = styled.div`
  flex: 1;
`;

const MemberName = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 4px;
  color: ${props => props.theme?.dark || '#333333'};
  line-height: 1.3;
  
  @media (max-width: 767px) {
    font-size: 1.35rem;
  }
`;

const MemberPosition = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #3C8C3C;
  margin-bottom: 16px;
  
  @media (max-width: 767px) {
    font-size: 0.95rem;
  }
`;

const MemberDescription = styled.p`
  color: ${props => props.theme?.gray || '#666'};
  line-height: 1.6;
  font-size: 0.95rem;
  margin: 0;
  
  @media (max-width: 767px) {
    font-size: 0.9rem;
  }
`;

const SkillsSection = styled.div`
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid ${props => props.theme?.lightGray || '#eee'};
`;

const SkillsLabel = styled.div`
  font-size: 0.85rem;
  font-weight: 600;
  color: ${props => props.theme?.dark || '#333'};
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const SkillTag = styled.span`
  background: ${props => props.theme?.lightGray || '#f8f9fa'};
  color: ${props => props.theme?.gray || '#666'};
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid ${props => props.theme?.gray || '#ddd'};
`;

// Utility function to get initials
const getInitials = (name) => {
  return name
    .split(' ')
    .map(word => word.charAt(0))
    .join('')
    .substring(0, 2)
    .toUpperCase();
};

// Utility function to extract skills from description
const extractSkills = (description) => {
  const skillKeywords = [
    'AutoCAD', 'Revit', 'ArchiCAD', 'Sketch Up', 'Civil3D', 'Tekla', 'Prota',
    'Claims Management', 'Risk Underwriting', 'Insurance', 'Leadership',
    'Critical Thinking', 'Civil Engineering', 'Architecture', 'Project Management'
  ];
  
  return skillKeywords.filter(skill => 
    description.toLowerCase().includes(skill.toLowerCase())
  );
};

// Main component
const TeamView = ({ teamMembers }) => {
  return (
    <GridSection>
      {teamMembers.map((member, index) => {
        const skills = extractSkills(member.description);
        
        return (
          <TeamCard key={index}>
            <ProfileSection>
              <ProfileImage>
                {getInitials(member.name)}
              </ProfileImage>
              <ProfileInfo>
                <MemberName>{member.name}</MemberName>
                <MemberPosition>{member.position}</MemberPosition>
              </ProfileInfo>
            </ProfileSection>
            
            <MemberDescription>
              {member.description}
            </MemberDescription>
            
            {skills.length > 0 && (
              <SkillsSection>
                <SkillsLabel>Key Skills</SkillsLabel>
                <SkillsList>
                  {skills.map((skill, skillIndex) => (
                    <SkillTag key={skillIndex}>{skill}</SkillTag>
                  ))}
                </SkillsList>
              </SkillsSection>
            )}
          </TeamCard>
        );
      })}
    </GridSection>
  );
};

export default TeamView;