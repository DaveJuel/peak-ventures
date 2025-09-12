import React, { useState } from "react";
import styled from "styled-components";

// Updated component with email input and submit button
export default function ConnectWithEmailForm({ 
  buttonText = "Get in Touch", 
  action,
  placeholderText = "Enter your email",
  successMessage = "Thank you! Our team will reach out to you soon enough!",
  errorMessage = "Please enter a valid email"
}) {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Simple email validation
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setError("Please enter your email");
      return;
    }
    
    if (!validateEmail(email)) {
      setError(errorMessage);
      return;
    }
    
    setError("");
    
    // Call the provided action function with the email
    if (action) {
      action(email);
    }
    
    // Show success message and reset form
    setIsSubmitted(true);
    setEmail("");
    
    // Hide success message after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit}>
        <InputContainer>
          <Input
            type="email"
            placeholder={placeholderText}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <SubmitButton
            type="submit"
            className="animate pointer semiBold"
          >
            {buttonText}
          </SubmitButton>
        </InputContainer>
        
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {isSubmitted && <SuccessMessage>{successMessage}</SuccessMessage>}
        
        <PrivacyNote>
          We respect your privacy. We'll never share your email.
        </PrivacyNote>
      </Form>
    </FormWrapper>
  );
}

// Styled components
const FormWrapper = styled.div`
  max-width: 450px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Form = styled.form`
  width: 100%;
`;

const InputContainer = styled.div`
  display: flex;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
  border: 1px solid #656565;
  transition: all 0.3s ease;
  
  &:focus-within {
    box-shadow: 0 6px 20px rgba(60, 140, 60, 0.15);
    border-color: #3C8C3C;
  }
`;

const Input = styled.input`
  flex: 1;
  padding: 14px 16px;
  border: none;
  outline: none;
  font-size: 16px;
  font-family: inherit;
  color: #121212;
  
  &::placeholder {
    color: #999;
  }
`;

const SubmitButton = styled.button`
  background-color: #3C8C3C;
  color: white;
  border: none;
  padding: 0 24px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #2d6b2d;
  }
  
  &:active {
    transform: translateY(1px);
  }
`;

const ErrorMessage = styled.p`
  color: #d32f2f;
  font-size: 14px;
  margin-top: 8px;
  margin-bottom: 0;
`;

const SuccessMessage = styled.p`
  color: #3C8C3C;
  font-size: 14px;
  margin-top: 8px;
  margin-bottom: 0;
  font-weight: 600;
`;

const PrivacyNote = styled.p`
  color: #777;
  font-size: 12px;
  margin-top: 10px;
  text-align: center;
`;

// Usage example:
// <EmailSubscription 
//   buttonText="Subscribe" 
//   action={(email) => console.log("Subscribed:", email)}
//   placeholderText="Your email address"
// />