import styled from "styled-components";
import { useEffect } from "react";
import HeroStyle2 from "../../components/Sections/Hero/HeroStyle2";

// Component
export default function ServicePage({ hero, intro, focusTitle, pillars, cta }) {
  // const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for the navbar (optional)
  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      // setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <HeroStyle2
        title={hero.title}
        paragraphs={[hero.subtitle]}
        buttonText="Contact Us"
        buttonLink="/register"
        showButton={true}
        bgImage={process.env.PUBLIC_URL + "/heroimg3.jpg"}
      />

      <IntroSection>
        <div className="container">
          <SectionHeading>
            <GreenAccent />
            {intro.title}
          </SectionHeading>
          <IntroText>{intro.description}</IntroText>
        </div>
      </IntroSection>

      <FocusSection>
        <div className="container">
          <SectionHeading centered>
            <GreenAccent centered />
            {focusTitle}
          </SectionHeading>
          <CardGrid>
            {pillars.map((item, index) => (
              <Card key={index}>
                <IconBox color={item.color || "#3C8C3C"}>{item.icon}</IconBox>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
                {/* <CardLink href={item.link || "#"}>Learn more</CardLink> */}
              </Card>
            ))}
          </CardGrid>
        </div>
      </FocusSection>

      <CTASection>
        <div className="container">
          <CTAContent>
            <CTATextContent>
              <CTATitle>{cta.title}</CTATitle>
              <CTADescription>
                {cta.description ||
                  "Ready to transform your business? Let's get started today."}
              </CTADescription>
            </CTATextContent>
            <CTAButtonWrapper>
              <CTAButton href={cta.buttonHref}>{cta.buttonText}</CTAButton>
            </CTAButtonWrapper>
          </CTAContent>
        </div>
      </CTASection>
    </>
  );
}

export const IntroSection = styled.section`
  padding: 100px 20px;
  background: white;

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
`;

export const GreenAccent = styled.span`
  display: block;
  width: ${(props) => (props.centered ? "80px" : "60px")};
  height: 4px;
  background: #3c8c3c;
  margin: ${(props) => (props.centered ? "0 auto 15px" : "0 0 15px")};
`;

export const SectionHeading = styled.h2`
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 30px;
  text-align: ${(props) => (props.centered ? "center" : "left")};
  color: #121212;
`;

export const IntroText = styled.p`
  font-size: 1.25rem;
  max-width: 800px;
  margin: 0 auto;
  color: #555;
  line-height: 1.8;
  text-align: center;
`;

export const FocusSection = styled.section`
  padding: 100px 20px;
  background: #f9f9f9;

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
`;

export const CardGrid = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(3, 1fr);
  max-width: 1200px;
  margin: 40px auto 0;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background: white;
  padding: 40px 30px;
  border-radius: 12px;
  text-align: left;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border-top: 4px solid #3c8c3c;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }
`;

export const IconBox = styled.div`
  font-size: 2.5rem;
  color: ${(props) => props.color};
  margin-bottom: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(60, 140, 60, 0.1);
  width: 70px;
  height: 70px;
  border-radius: 50%;
`;

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #121212;
`;

export const CardDescription = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.7;
  margin-bottom: 20px;
`;

export const CardLink = styled.a`
  color: #3c8c3c;
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;

  &:hover {
    text-decoration: underline;
  }

  &:after {
    content: "→";
    margin-left: 5px;
    transition: transform 0.3s ease;
  }

  &:hover:after {
    transform: translateX(5px);
  }
`;

export const CTASection = styled.section`
  background: #121212;
  color: white;
  padding: 80px 20px;

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
`;

export const CTAContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const CTATextContent = styled.div`
  flex: 2;
`;

export const CTATitle = styled.h2`
  font-size: 2.25rem;
  margin-bottom: 15px;
`;

export const CTADescription = styled.p`
  font-size: 1.1rem;
  opacity: 0.8;
  max-width: 600px;
`;

export const CTAButtonWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 768px) {
    justify-content: center;
    margin-top: 20px;
  }
`;

export const CTAButton = styled.a`
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
