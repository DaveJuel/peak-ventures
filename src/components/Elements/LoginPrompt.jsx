import React from "react";
import { PromptContainer, PromptMessage, StyledButton } from "../../style/view.styles";

const LoginPrompt = ({ 
  title = "Action Requires Login", 
  message = "Please log in to continue and access this feature.", 
  buttonText = "Login", 
  onButtonClick 
}) => {
  return (
    <PromptContainer >
      <PromptMessage >
        <h2>{title}</h2>
        <p>{message}</p>
      </PromptMessage>
      <StyledButton onClick={onButtonClick} variant="contained">
        {buttonText}
      </StyledButton>
    </PromptContainer>
  );
};

export default LoginPrompt;
