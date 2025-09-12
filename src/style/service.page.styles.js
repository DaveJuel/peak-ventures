import styled from "styled-components";

export const PageWrapper = styled.div`
  background: #fff;
  color: #1A1A1A;
  font-family: "Segoe UI", sans-serif;
`;

export const HeroSection = styled.section`
  background: linear-gradient(135deg, #4A00E0, #8E2DE2);
  color: white;
  padding: 100px 0;
  text-align: center;

  h1 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.25rem;
    max-width: 700px;
    margin: 0 auto;
    opacity: 0.9;
  }
`;

export const IntroSection = styled.section`
  padding: 80px 20px;
  text-align: center;
`;

export const SectionHeading = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 30px;
`;

export const IntroText = styled.p`
  font-size: 1.125rem;
  max-width: 800px;
  margin: 0 auto;
  color: #666;
`;

export const FocusSection = styled.section`
  padding: 80px 20px;
  background: #FAFAFA;
`;

export const CardGrid = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(3, 1fr);
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  text-align: left;
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  transition: 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const IconBox = styled.div`
  font-size: 2.5rem;
  color: ${props => props.color};
  margin-bottom: 20px;
`;

export const CardTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 10px;
`;

export const CardDescription = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
`;

export const CTASection = styled.section`
  background: #1A1A1A;
  color: white;
  text-align: center;
  padding: 80px 20px;
`;

export const CTATitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

export const CTAButton = styled.a`
  display: inline-block;
  padding: 12px 30px;
  background: #FF6B35;
  color: white;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;

  &:hover {
    background: #e65c2f;
  }
`;