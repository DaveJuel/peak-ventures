import React from "react";
import styled from "styled-components";
import { Divider } from "../../screens/about_us/AboutUs";

const theme = {
  primary: "#6C8A39",
  dark: "#121212",
  white: "#FFFFFF",
  lightGreen: "#E8F5E8",
  mediumGreen: "#6AAC6A",
  gray: "#F5F5F5",
};

export default function AboutUsSection() {
  return (
    <div id="about-us" style={{ padding: "100px 0 30px" }}>
      <AboutTitle className="extraBold font30">About</AboutTitle>
      <Divider />
      <ContentContainer className="flexSpaceCenter">
        <LeftSide className="flexCenter">
          <div>
            <h1 className="extraBold darkGreenColor font40">PEAK VENTURES CONSTRUCTION</h1>
            <AboutP className="font16 regular">
              Over the last 20 years, the construction industry in Rwanda has
              seen an unprecedented development and investment in modern
              construction techniques. With this influx of investment, the
              industry has been driven by profit making entities with little to
              no care for quality, acceptable building standards and total
              disregard for safety. It was this gap in the industry that birthed
              PEAK VENTURES Construction Company Limited.
            </AboutP>
            <AboutP className="font16 regular">
              PEAK VENTURES Construction Company Limited was founded by two
              Rwandans persuader, who felt and saw the need to harmonize the gap
              between quality and upto standard service whilst maintaining
              affordability without compromising on quality.
            </AboutP>
          </div>
        </LeftSide>
        <DecorativeStripes>
          <Stripe />
          <Stripe />
          <Stripe />
          <Stripe />
          <Stripe />
          <Stripe />
          <Stripe />
          <Stripe />
          <Stripe />
          <Stripe />
          <Stripe />
          <Stripe />
        </DecorativeStripes>
      </ContentContainer>
    </div>
  );
}

const ContentContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const LeftSide = styled.div`
  width: 60%;
  height: 100%;
  position: relative;
  padding: 20px 0;

  /* Add orange background to the content area */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -20px;
    right: 40%;
    bottom: 0;
    z-index: -1;
  }

  @media (max-width: 960px) {
    width: 100%;
    margin: 20px 0 50px 0;
    text-align: center;
    padding: 30px 20px;

    /* Content container */
    div {
      max-width: 600px;
      margin: 0 auto;
    }

    &::before {
      right: 0;
    }
  }

  @media (max-width: 560px) {
    margin: 10px 0 40px 0;
    padding: 20px 15px;
  }
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${theme.primary};
  text-align: center;
  margin-bottom: 16px;
`;

const AboutP = styled.div`
  max-width: 500px;
  padding: 0 0 30px 0;
  line-height: 1.8rem;
  color: #333;
  text-align: justify;

  @media (max-width: 960px) {
    padding: 15px 0 20px 0;
    max-width: 100%;
    text-align: left;
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const DecorativeStripes = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  height: 60px;
  z-index: 3;
  background-image: ${({ stripeBgImage }) => stripeBgImage ? `url(${stripeBgImage})` : 'none'};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 20px;
  
  @media (max-width: 960px) {
    right: 10px;
    bottom: 20px;
  }
  
  @media (max-width: 768px) {
    right: 0;
    bottom: 10px;
    transform: scale(0.8);
    height: 48px;
    padding: 16px;
  }
  
  @media (max-width: 560px) {
    display: none;
  }
`;

const Stripe = styled.div`
  width: 20px;
  height: 100%;
  margin-right: 4px;
  
  &:nth-child(odd) {
    background-color: #E89544;
  }
  
  &:nth-child(even) {
    background-color: #333;
  }
  
  &:last-child {
    margin-right: 0;
  }
`;
