import React, { useEffect } from "react";
import styled from "styled-components";
import HeroStyle2 from "../../components/Sections/Hero/HeroStyle2";
import { TeamRoles } from "../../components/Elements/TeamRoles";

export default function DedicatedTeam({
  hero,
  values,
  skills,
  roles,
  cta,
}) {
  // Handle scroll effect similar to other pages
  useEffect(() => {
    const handleScroll = () => {
      // Scroll handling logic if needed
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <HeroStyle2
        title={hero.title}
        paragraphs={hero.subtitle}
        buttonText="Contact Us"
        buttonLink="/register"
        showButton={true}
        bgImage={process.env.PUBLIC_URL + "/heroimg20.jpg"}
      />

      <IntroSection>
        <div className="container">
          <SectionHeading>
            <GreenAccent />
            Our Core Values
          </SectionHeading>
          <IntroText>
            Discover what makes our dedicated teams exceptional and how we
            deliver consistent results.
          </IntroText>
        </div>
      </IntroSection>

      <ValueSection>
        <div className="container">
          <ValuesGrid>
            {values.map((value, idx) => (
              <ValueCard key={idx} isEven={idx % 2 === 0}>
                <ValueNumber>{idx + 1}</ValueNumber>
                <ValueTitle>{value.title}</ValueTitle>
                <ValueDesc>{value.description}</ValueDesc>
              </ValueCard>
            ))}
          </ValuesGrid>
        </div>
      </ValueSection>

      <TeamRoles teamData={roles} />

      <SkillsSection>
        <div className="container">
          <SectionHeading centered>
            <GreenAccent centered />
            Team Capabilities
          </SectionHeading>
          <SkillsIntro>
            Our dedicated teams bring a diverse array of technical skills and
            expertise to every project.
          </SkillsIntro>
          <SkillsTagsWrapper>
            {skills.map((skill, idx) => (
              <SkillTag key={idx} isHighlighted={true}>
                {skill}
              </SkillTag>
            ))}
          </SkillsTagsWrapper>
        </div>
      </SkillsSection>

      <CTASection>
        <div className="container">
          <CTAContent>
            <CTATextContent>
              <CTATitle>{cta.title}</CTATitle>
              <CTADescription>
                Let our dedicated team of experts help you achieve your business
                goals with tailored solutions and expert implementation.
              </CTADescription>
            </CTATextContent>
            <CTAButtonWrapper>
              <CTAButton href={cta.link}>{cta.button}</CTAButton>
            </CTAButtonWrapper>
          </CTAContent>
        </div>
      </CTASection>
    </>
  );
}

// Styled Components
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

const IntroSection = styled.section`
  padding: 100px 20px 60px;
  background: white;

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
`;

const IntroText = styled.p`
  font-size: 1.25rem;
  max-width: 800px;
  margin: 0 auto;
  color: #555;
  line-height: 1.8;
  text-align: center;
`;

const ValueSection = styled.section`
  padding: 60px 20px 80px;
  background: #f9f9f9;

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ValueCard = styled.div`
  background: white;
  padding: 40px 30px;
  border-radius: 12px;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border-top: 4px solid ${(props) => (props.isEven ? "#3c8c3c" : "#121212")};

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  }
`;

const ValueNumber = styled.div`
  position: absolute;
  top: -15px;
  right: 30px;
  width: 40px;
  height: 40px;
  background: #3c8c3c;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.2rem;
`;

const ValueTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #121212;
`;

const ValueDesc = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: #555;
`;

const SkillsSection = styled.section`
  padding: 90px 20px;
  background: white;

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
`;

const SkillsIntro = styled.p`
  font-size: 1.1rem;
  max-width: 800px;
  margin: 0 auto 40px;
  text-align: center;
  color: #555;
`;

const SkillsTagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  max-width: 1000px;
  margin: 0 auto;
`;

const SkillTag = styled.div`
  background: ${(props) => (props.isHighlighted ? "#3c8c3c" : "#f0f0f0")};
  color: ${(props) => (props.isHighlighted ? "white" : "#121212")};
  padding: 12px 24px;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    background: ${(props) => (props.isHighlighted ? "#2d6b2d" : "#e7e7e7")};
  }
`;

const CTASection = styled.section`
  background: #121212;
  color: white;
  padding: 80px 20px;

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
`;

const CTAContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const CTATextContent = styled.div`
  flex: 2;
`;

const CTATitle = styled.h2`
  font-size: 2.25rem;
  margin-bottom: 15px;
`;

const CTADescription = styled.p`
  font-size: 1.1rem;
  opacity: 0.8;
  max-width: 600px;
`;

const CTAButtonWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 768px) {
    justify-content: center;
    margin-top: 20px;
  }
`;

const CTAButton = styled.a`
  display: inline-block;
  padding: 16px 40px;
  background: #3c8c3c;
  color: white;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: #2d6b2d;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;
