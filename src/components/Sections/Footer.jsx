import React from "react";
import styled from "styled-components";
// Assets
import LogoImg from "../../assets/svg/LogoLight";

export default function Footer() {

  const getCurrentYear = () => {
    return new Date().getFullYear();
  }

  return (
    <Wrapper>
      <div className="whiteBg">
        <div className="container">
          <InnerWrapper className="flexSpaceCenter" style={{ padding: "30px 0" }}>
            <a className="flexCenter animate pointer" href="/" smooth={true} offset={-80}>
              <LogoImg />
            </a>
            <StyleP className="darkColor font13">
              © {getCurrentYear()} - <span className="yellowColor font13">Knack Fusion</span> All Right Reserved
            </StyleP>
          </InnerWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;