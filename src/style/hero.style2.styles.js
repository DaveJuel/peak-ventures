import styled from "styled-components";

// Styled components for HeroStyle2
export const BackgroundWrapper = styled.section`
  width: 100vw;
  min-height: 740px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  margin-left: calc(-50vw + 50%);
  background-image: ${({ bgImage }) => `url(${bgImage})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 60%;
    height: 100%;
    z-index: 1;
  }

  @media (max-width: 960px) {
    flex-direction: column;
    padding-top: 90px;
    min-height: auto;
  }
`;

export const WhiteOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 1) 75%,
    rgba(255, 255, 255, 0) 100%
  );
  z-index: 2;

  @media (max-width: 960px) {
    width: 100%;
  }
`;


export const ContentContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;

  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 1) 25%,
    rgba(255, 255, 255, 0) 10%
  );

  border-radius: 8px;
  
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const LeftSide = styled.div`
  width: 40%;
  height: 100%;
  position: relative;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 1) 25%,
    rgba(255, 255, 255, 0) 50%
  );
  border-radius: 8px;
  
  /* Add a solid background to the content area */
  &::before {
    content: '';
    position: absolute;
    top: 25%;
    left: 0;
    right: 0;
    bottom: 0;
    background: white;
    border-radius: 8px;
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
  }
  
  @media (max-width: 560px) {
    margin: 10px 0 40px 0;
    padding: 20px 15px;
  }
`;

export const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 30px 0;
  line-height: 1.8rem;
  position: relative;

  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 1) 75%,
    rgba(255, 255, 255, 0) 100%
  );
  
  @media (max-width: 960px) {
    padding: 15px 0 20px 0;
    max-width: 100%;
  }
  
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const BtnWrapper = styled.div`
  max-width: 190px;
  
  @media (max-width: 960px) {
    margin: 0;
  }
  
  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

export const DotsWrapper = styled.div`
  position: absolute;
  right: 50px;
  bottom: 50px;
  z-index: 3;
  
  @media (max-width: 960px) {
    right: 10px;
  }
  
  @media (max-width: 768px) {
    right: 0;
    bottom: 30px;
    transform: scale(0.8);
  }
  
  @media (max-width: 560px) {
    display: none;
  }
`;