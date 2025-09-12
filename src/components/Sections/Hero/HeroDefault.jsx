import React, { useEffect, useState } from "react";
import FullButton from "../../Buttons/FullButton";
import Dots from "../../../assets/svg/Dots";
import {
  BtnWrapper,
  DotsWrapper,
  GreyDiv,
  HeaderP,
  ImageWrapper,
  Img,
  LeftSide,
  RightSide,
  Wrapper,
  ContentContainer,
} from "../../../style/hero.main.styles";

export default function HeroDefault() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
  }, []);

  return (
    <Wrapper id="home" className="container">
      <ContentContainer className="flexSpaceCenter">
        <LeftSide className="flexCenter">
          <div>
            <h1 className="extraBold darkGreenColor font60">
              Build, Scale & Optimize Digital Products.
            </h1>
            <HeaderP
              className="font20 regular"
              style={{ paddingBottom: "10px" }}
            >
              From design thinking to scalable cloud solutions, we empower businesses with cutting-edge digital capabilities.
            </HeaderP>
            <HeaderP className="font20 regular">
              Whether you're launching a new platform or refining existing systems, our cross-functional teams deliver results that matter.
            </HeaderP>
            {!isLoggedIn && (
              <BtnWrapper>
                <FullButton
                  title="Contact Us"
                  action={() => (window.location.href = "/register")}
                />
              </BtnWrapper>
            )}
          </div>
        </LeftSide>


        <RightSide>
          <ImageWrapper>
            <Img
              className="radius8"
              src={`${process.env.PUBLIC_URL}/heroimg3.jpg`}
              width={400}
              height={350}
              alt="office"
              style={{ zIndex: 9 }}
            />
      
            <DotsWrapper>
              <Dots />
            </DotsWrapper>
          </ImageWrapper>
          <GreyDiv className="lightBg"></GreyDiv>
        </RightSide>
      </ContentContainer>
    </Wrapper>
  );
}
