import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";

// Solution Showcase Component
const ExpertisePage = ({
  solution = {},
  theme = {
    primary: "#3C8C3C",
    dark: "#121212",
    white: "#FFFFFF",
    light: "#F9F9F9",
  },
  pageTag = "SOLUTION"
}) => {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
  // Scroll to top on page load
  window.scrollTo(0, 0);

  const handleScroll = () => {
    // setScrolled(window.scrollY > 50);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  // Default features if none provided
  const features = solution.features || [];

  return (
    <SolutionContainer backgroundColor={theme.light}>
      <ContentWrapper>
        {/* Header Section */}
        <HeaderRow>
          <HeaderContent>
            <SolutionLabel accentColor={theme.primary}>{pageTag}</SolutionLabel>
            <SolutionTitle color={theme.dark}>
              {solution.title || "Solution Title"}
            </SolutionTitle>
            <SolutionDescription>
              {solution.description || "Solution description goes here."}
            </SolutionDescription>

            {solution.ctaLink && (
              <CtaButton
                href="/contact-us"
                backgroundColor={theme.primary}
                textColor={theme.white}
                hoverColor={theme.dark}
              >
                {solution.ctaText || "Reach Out To Us"} <FaArrowRight />
              </CtaButton>
            )}
          </HeaderContent>

          <ImageWrapper>
            {solution.imageSrc ? (
              <SolutionImage
                src={solution.imageSrc}
                alt={solution.title || "Solution"}
              />
            ) : (
              <PlaceholderImage backgroundColor={theme.primary}>
                {solution.acronym || "SOLUTION"}
              </PlaceholderImage>
            )}
          </ImageWrapper>
        </HeaderRow>

        {/* Features Section */}
        <FeaturesSection>
          <FeaturesTabs>
            {features.map((feature, index) => (
              <FeatureTab
                key={index}
                active={activeTab === index}
                onClick={() => setActiveTab(index)}
                activeColor={theme.primary}
                borderColor={theme.primary}
              >
                <FeatureIcon
                  active={activeTab === index}
                  activeColor={theme.primary}
                >
                  {feature.icon}
                </FeatureIcon>
                <FeatureTabTitle
                  active={activeTab === index}
                  activeColor={theme.primary}
                >
                  {feature.title}
                </FeatureTabTitle>
              </FeatureTab>
            ))}
          </FeaturesTabs>

          <FeatureContent>
            <FeatureDetailCard
              backgroundColor={theme.white}
              borderColor={theme.primary}
            >
              <FeatureDetailTitle color={theme.dark}>
                {features[activeTab].title}
              </FeatureDetailTitle>
              <FeatureDescription>
                {features[activeTab].description}
              </FeatureDescription>
              {features[activeTab].additionalContent}

              {features[activeTab].image && (
                <FeatureImage
                  src={features[activeTab].image}
                  alt={features[activeTab].title}
                />
              )}
            </FeatureDetailCard>
          </FeatureContent>
        </FeaturesSection>

        {/* Tech Stack Section (optional) */}
        {solution.techStack && (
          <TechStackSection>
            <TechStackTitle color={theme.dark}>Technology Stack</TechStackTitle>
            <TechStackList>
              {solution.techStack.map((tech, index) => (
                <TechItem
                  key={index}
                  borderColor={theme.primary}
                  color={theme.dark}
                >
                  {tech}
                </TechItem>
              ))}
            </TechStackList>
          </TechStackSection>
        )}

        {/* Testimonial Section (optional) */}
        {solution.testimonial && (
          <TestimonialSection backgroundColor={theme.primary}>
            <TestimonialQuote color={theme.white}>
              "{solution.testimonial.quote}"
            </TestimonialQuote>
            <TestimonialAuthor color={theme.white}>
              {solution.testimonial.author}, {solution.testimonial.position}
            </TestimonialAuthor>
          </TestimonialSection>
        )}
      </ContentWrapper>
    </SolutionContainer>
  );
};

// Styled Components
const SolutionContainer = styled.section`
  background-color: ${(props) => props.backgroundColor || "#F9F9F9"};
  padding: 80px 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 300px;
    height: 300px;
    background: radial-gradient(
      circle,
      rgba(60, 140, 60, 0.1) 0%,
      rgba(60, 140, 60, 0) 70%
    );
    border-radius: 50%;
    transform: translate(100px, -150px);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 200px;
    height: 200px;
    background: radial-gradient(
      circle,
      rgba(60, 140, 60, 0.1) 0%,
      rgba(60, 140, 60, 0) 70%
    );
    border-radius: 50%;
    transform: translate(-100px, 100px);
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
`;

const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
  margin-bottom: 80px;

  @media (max-width: 992px) {
    flex-direction: column;
    text-align: center;
    gap: 40px;
  }
`;

const HeaderContent = styled.div`
  flex: 3;
`;

const SolutionLabel = styled.div`
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  color: ${(props) => props.accentColor || "#3C8C3C"};
  margin-bottom: 16px;
`;

const SolutionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  margin: 0 0 24px;
  color: ${(props) => props.color || "#121212"};
  line-height: 1.2;
`;

const SolutionDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.7;
  color: #444;
  margin-bottom: 32px;
`;

const CtaButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background-color: ${(props) => props.backgroundColor || "#3C8C3C"};
  color: ${(props) => props.textColor || "#FFFFFF"};
  padding: 14px 28px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;

  svg {
    transition: transform 0.3s ease;
    font-size: 16px;
  }

  &:hover {
    background-color: ${(props) => props.hoverColor || "#2d6b2d"};
    transform: translateY(-2px);

    svg {
      transform: translateX(4px);
    }
  }
`;

const ImageWrapper = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SolutionImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
`;

const PlaceholderImage = styled.div`
  width: 100%;
  aspect-ratio: 16/9;
  background-color: ${(props) => props.backgroundColor || "#3C8C3C"};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: 2px;
  border-radius: 12px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
`;

const FeaturesSection = styled.div`
  margin-bottom: 70px;
`;

const FeaturesTabs = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 40px;
  justify-content: center;
`;

const FeatureTab = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding: 20px;
  min-width: 140px;
  border-radius: 10px;
  transition: all 0.3s ease;
  background-color: ${(props) => (props.active ? "#FFFFFF" : "transparent")};
  border-bottom: 3px solid
    ${(props) =>
      props.active ? props.activeColor || "#3C8C3C" : "transparent"};
  box-shadow: ${(props) =>
    props.active ? "0 10px 30px rgba(0, 0, 0, 0.08)" : "none"};

  &:hover {
    background-color: white;
    transform: translateY(-5px);
  }
`;

const FeatureIcon = styled.div`
  font-size: 28px;
  color: ${(props) => (props.active ? props.activeColor || "#3C8C3C" : "#777")};
  margin-bottom: 12px;
  transition: all 0.3s ease;
`;

const FeatureTabTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  color: ${(props) => (props.active ? props.activeColor || "#3C8C3C" : "#555")};
  transition: all 0.3s ease;
  text-align: center;
`;

const FeatureContent = styled.div`
  padding: 20px 0;
`;

const FeatureDetailCard = styled.div`
  background-color: ${(props) => props.backgroundColor || "#FFFFFF"};
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.08);
  border-left: 5px solid ${(props) => props.borderColor || "#3C8C3C"};
  transition: all 0.3s ease;
`;

const FeatureDetailTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0 0 24px;
  color: ${(props) => props.color || "#121212"};
`;

const FeatureDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: #555;
  margin-bottom: 24px;
`;

const FeatureImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-top: 24px;
`;

const TechStackSection = styled.div`
  margin-bottom: 70px;
`;

const TechStackTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 30px;
  color: ${(props) => props.color || "#121212"};
  text-align: center;
`;

const TechStackList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
`;

const TechItem = styled.span`
  padding: 10px 20px;
  background: white;
  border-radius: 30px;
  font-size: 0.9rem;
  color: ${(props) => props.color || "#121212"};
  border: 1px solid
    ${(props) => (props.borderColor ? `${props.borderColor}30` : "#3C8C3C30")};
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

const TestimonialSection = styled.div`
  background-color: ${(props) => props.backgroundColor || "#3C8C3C"};
  padding: 60px 40px;
  border-radius: 16px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '"';
    position: absolute;
    top: 20px;
    left: 30px;
    font-size: 10rem;
    opacity: 0.1;
    color: white;
    font-family: Georgia, serif;
    line-height: 1;
  }
`;

const TestimonialQuote = styled.p`
  font-size: 1.4rem;
  line-height: 1.7;
  color: ${(props) => props.color || "#FFFFFF"};
  font-style: italic;
  margin: 0 0 20px;
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto 24px;
  text-align: center;
`;

const TestimonialAuthor = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: ${(props) => props.color || "#FFFFFF"};
  opacity: 0.9;
  margin: 0;
  text-align: center;
`;

export default ExpertisePage;
