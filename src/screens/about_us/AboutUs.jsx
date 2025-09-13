import React from "react";
import styled from "styled-components";
import HeroStyle2 from "../../components/Sections/Hero/HeroStyle2";

// Define theme colors
const theme = {
  primary: "#3C8C3C", // Green
  dark: "#121212", // Near black
  white: "#FFFFFF", // White
  lightGreen: "#E8F5E8", // Light green background
  mediumGreen: "#6AAC6A", // Medium green for hover states
  gray: "#F5F5F5", // Light gray for sections
};

export default function AboutUs({ hero, focus, mission, vision, values, cta }) {
  return (
    <Container>
      <HeroStyle2
        title={hero.title}
        paragraphs={hero.subtitle}
        buttonText="Contact Us"
        buttonLink="/register"
        showButton={true}
        bgImage={process.env.PUBLIC_URL + "/heroimg5.jpg"}
      />

      <ContentWrapper>
        <StorySection>
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
      </ContentWrapper>
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

const Divider = styled.div`
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
  padding: 100px 0 60px;
`;

const GridSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 40px;
  margin: 80px 0;

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
    background: #6C8939;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;
