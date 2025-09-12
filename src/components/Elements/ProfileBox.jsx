import React from "react";
import styled from "styled-components";

export default function ProfileBox({ image, name, position, bio, action }) {
  return (
    <ProfileWrapper className="flex flexColumn animate pointer" onClick={action ? () => action() : null}>
      <ImageWrapper>
        <ProfileImage src={image} alt={`${name}'s profile`} />
      </ImageWrapper>
      <NameStyle className="font20 extraBold">{name}</NameStyle>
      <PositionStyle className="font15">{position}</PositionStyle>
      <BioStyle className="font13">{bio}</BioStyle>
    </ProfileWrapper>
  );
}

const ProfileWrapper = styled.div`
  width: 100%;
  max-width: 300px;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const ImageWrapper = styled.div`
  width: 100px;
  height: 100px;
  margin: 0 auto 15px;
  overflow: hidden;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const NameStyle = styled.h2`
  margin: 10px 0 5px;
`;

const PositionStyle = styled.h3`
  font-weight: normal;
  color: #666;
  margin-bottom: 10px;
`;

const BioStyle = styled.p`
  font-size: 0.875rem;
  color: #444;
  line-height: 1.4;
  margin: 0;
`;
