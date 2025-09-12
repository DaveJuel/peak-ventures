import React from "react";
import Dots from "../../../assets/svg/Dots";
import {
  BackgroundWrapper,
  ContentContainer,
  DotsWrapper,
  HeaderP,
  LeftSide,
  WhiteOverlay,
} from "../../../style/hero.style2.styles";
import ConnectWithEmailForm from "../../Elements/ConnectWithEmailForm";

export default function HeroStyle2({
  title,
  paragraphs,
  showButton = true,
  bgImage,
}) {
  return (
    <BackgroundWrapper id="home" bgImage={bgImage}>
      <WhiteOverlay />
      <ContentContainer className="flexSpaceCenter">
        <LeftSide className="flexCenter">
          <div>
            <h1 className="extraBold darkGreenColor font60">{title}</h1>
            {paragraphs.map((text, index) => (
              <HeaderP
                key={index}
                className="font20 regular"
                style={{ paddingBottom: "30px" }}
              >
                {text}
              </HeaderP>
            ))}
            {showButton && (
              <ConnectWithEmailForm />
            )}
          </div>
        </LeftSide>

        <DotsWrapper>
          <Dots />
        </DotsWrapper>
      </ContentContainer>
    </BackgroundWrapper>
  );
}
