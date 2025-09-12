import styled from "styled-components";

export const IntroSection = styled.section`
  max-width: 900px;
  margin: 0 auto 60px;
  text-align: center;
  h2 {
    font-size: 2rem;
    margin-bottom: 15px;
  }
  p {
    color: #666;
    font-size: 1.05rem;
  }
`;

export const SectionsGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 40px;
  max-width: 1100px;
  margin: 0 auto 80px;
`;

export const SectionCard = styled.div`
  background: #f9f9f9;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  text-align: left;
  h3 {
    font-size: 1.4rem;
    margin-bottom: 10px;
  }
  p {
    font-size: 1rem;
    color: #555;
  }
`;

export const IconWrapper = styled.div`
  font-size: 2.2rem;
  margin-bottom: 15px;
`;

export const CTASection = styled.section`
  text-align: center;
  padding: 60px 20px 0;
  h2 {
    font-size: 1.8rem;
    margin-bottom: 20px;
  }
  a {
    background: #ff6b35;
    color: white;
    padding: 12px 24px;
    border-radius: 8px;
    font-weight: bold;
    text-decoration: none;
    transition: background 0.3s;
    &:hover {
      background: #e95420;
    }
  }
`;
