import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  min-height: 840px;
  /* Add proper padding to prevent navbar overlapping */
  padding-top: 100px;
  
  @media (max-width: 960px) {
    padding-top: 90px;
    min-height: auto;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  
  @media (max-width: 960px) {
    width: 100%;
    margin: 20px 0 50px 0;
    text-align: center;
    
    /* Content container */
    div {
      max-width: 600px;
      margin: 0 auto;
    }
  }
  
  @media (max-width: 560px) {
    margin: 10px 0 40px 0;
  }
`;

export const RightSide = styled.div`
  width: 50%;
  height: 100%;
  
  @media (max-width: 960px) {
    display: none; /* Hide completely on mobile devices */
  }
`;

export const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 30px 0;
  line-height: 1.8rem; /* Adjusted from 2.3rem for better readability */
  
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

export const GreyDiv = styled.div`
  width: 30%;
  height: 700px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  
  @media (max-width: 960px) {
    display: none;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;

export const Img = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: cover;
  
  @media (max-width: 560px) {
    width: 100%;
    height: auto;
  }
`;

export const QuoteWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 50px;
  max-width: 330px;
  padding: 30px;
  z-index: 99;
  
  @media (max-width: 960px) {
    left: 20px;
  }
  
  @media (max-width: 768px) {
    max-width: 280px;
    padding: 20px;
  }
  
  @media (max-width: 560px) {
    bottom: -50px;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    max-width: 300px;
  }
`;

export const QuotesWrapper = styled.div`
  position: absolute;
  left: -20px;
  top: -10px;
  
  @media (max-width: 560px) {
    left: -15px;
    top: -15px;
    transform: scale(0.8);
  }
`;

export const DotsWrapper = styled.div`
  position: absolute;
  right: -100px;
  bottom: 100px;
  z-index: 2;
  
  @media (max-width: 960px) {
    right: 10px;
  }
  
  @media (max-width: 768px) {
    right: 0;
    bottom: 60px;
    transform: scale(0.8);
  }
  
  @media (max-width: 560px) {
    display: none;
  }
`;