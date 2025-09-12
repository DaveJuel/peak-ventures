import React from "react";
import styled from "styled-components";

export default function FullButton({ title, action, border }) {
  return (
    <Wrapper
      className="animate pointer radius6 font15 semiBold"
      onClick={action ? () => action() : null}
      border={border}
    >
      {title}
    </Wrapper>
  );
}

const Wrapper = styled.button`
  border: 1px solid ${(props) => (props.border ? "#3C8C3C" : "#3C8C3C")};
  background-color: #fff;
  width: 100%;
  padding: 10px;
  outline: none;
  color: #000000;
  :hover {
    background-color: #3C8C3C;
    border: 1px solid #000000;
    color: #fff;
  }
`;

