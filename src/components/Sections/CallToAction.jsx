import React, { useEffect, useState } from "react";
import { FaRocket, FaArrowRight } from "react-icons/fa";
import {
  ActionButton,
  CallToActionContainer,
  Description,
  Heading,
  IconWrapper,
  ImageWrapper,
  LeftSection,
  MainTitle,
  RightSection,
  StyledImage,
  Subheading,
  Wrapper,
} from "../../style/call.to.action.styles";

export default function CallToAction() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
  }, []);

  const handleGetStarted = () => {
    window.location.href = "/register";
  };

  return (
    <Wrapper id="callToAction">
      <div className="container">
        <CallToActionContainer>
          <LeftSection>
            <ImageWrapper style={{ width: "80%", height:"100%" }}>
              <StyledImage
                src={
                  `${process.env.PUBLIC_URL || ""}/unlockimg2.jpg` ||
                  "https://via.placeholder.com/600x400?text=Image"
                }
                alt="Lorem Ipsum"
              />
            </ImageWrapper>
          </LeftSection>

          <RightSection>
            <IconWrapper>
              <FaRocket />
            </IconWrapper>

            <Heading>
              <Subheading>Lorem Ipsum Dolor</Subheading>
              <MainTitle>Consectetur Adipiscing Elit</MainTitle>
            </Heading>

            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Description>

            {!isLoggedIn && (
              <ActionButton onClick={handleGetStarted}>
                Lorem Ipsum <FaArrowRight />
              </ActionButton>
            )}
          </RightSection>
        </CallToActionContainer>
      </div>
    </Wrapper>
  );
}
