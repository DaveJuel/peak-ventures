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
            <h3 className="extraBold darkGreenColor font40">
              Peak Ventures Construction
            </h3>
            <AboutP className="font16 regular">
              Over the last 20 years, the construction industry in Rwanda has
              seen unprecedented development and investment in modern
              construction techniques. With this influx of investment, the
              industry has been driven by profit-making entities with little
              care for quality, acceptable building standards, or safety. PEAK
              VENTURES Construction Company Limited fills this gap.
            </AboutP>
            <AboutP className="font16 regular">
              Founded by two Rwandans who saw the need to harmonize quality and
              standard service while maintaining affordability without
              compromising excellence.
            </AboutP>
          </div>
        </LeftSide>

        <DecorativeImage imageUrl={process.env.PUBLIC_URL + "/heroimg7.jpg"} />
      </ContentContainer>
    </div>
  );
}

const ContentContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 20px;
  background: #fdfdfd;
  border-radius: 16px;

  @media (max-width: 960px) {
    flex-direction: column;
    padding: 40px 20px;
  }
`;

const LeftSide = styled.div`
  width: 55%;
  position: relative;
  padding: 20px 0;

  div {
    max-width: 600px;
  }

  @media (max-width: 960px) {
    width: 100%;
    text-align: center;
    div {
      margin: 0 auto;
    }
  }
`;

const AboutP = styled.p`
  line-height: 1.8rem;
  color: #333;
  text-align: justify;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${theme.primary};
  text-align: center;
  margin-bottom: 16px;
`;


const DecorativeImage = styled.div`
  width: 40%;
  height: 350px;
  background-image: url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  background-position: center;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);

  @media (max-width: 960px) {
    width: 80%;
    height: 250px;
    margin-top: 30px;
  }

  @media (max-width: 560px) {
    width: 100%;
    height: 200px;
  }
`;

