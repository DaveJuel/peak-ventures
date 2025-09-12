import React, { useState } from "react";
import styled from "styled-components";
import { 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaPhone, 
  FaPaperPlane
} from "react-icons/fa";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    // Reset form after successful submission
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        message: ""
      });
    }, 1000);
  };

  return (
    <ContactWrapper id="contact">
      <Container>
        <ContentGrid>
          <ContactInfo>
            <SectionHeading>
              <Title>Get in Touch</Title>
              <Subtitle>We'd love to hear from you</Subtitle>
            </SectionHeading>
            
            <InfoList>
              <InfoItem>
                <IconBox>
                  <FaEnvelope />
                </IconBox>
                <InfoContent>
                  <InfoTitle>Email Us</InfoTitle>
                  <InfoText>hello@company.com</InfoText>
                </InfoContent>
              </InfoItem>
              
              <InfoItem>
                <IconBox>
                  <FaPhone />
                </IconBox>
                <InfoContent>
                  <InfoTitle>Call Us</InfoTitle>
                  <InfoText>+1 (888) 123-4567</InfoText>
                </InfoContent>
              </InfoItem>
              
              <InfoItem>
                <IconBox>
                  <FaMapMarkerAlt />
                </IconBox>
                <InfoContent>
                  <InfoTitle>Visit Us</InfoTitle>
                  <InfoText>123 Innovation Drive, Tech City</InfoText>
                </InfoContent>
              </InfoItem>
            </InfoList>
          </ContactInfo>

          <FormContainer>
            <FormBox>
              {isSubmitted ? (
                <SuccessMessage>
                  <SuccessIcon>✓</SuccessIcon>
                  <h3>Thank you!</h3>
                  <p>Your message has been sent successfully. We'll be in touch soon.</p>
                </SuccessMessage>
              ) : (
                <ContactForm onSubmit={handleSubmit}>
                  <FormRow>
                    <FormField>
                      <FormLabel>Name</FormLabel>
                      <FormInput
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                      />
                    </FormField>
                  </FormRow>
                  
                  <FormRow>
                    <FormField>
                      <FormLabel>Email</FormLabel>
                      <FormInput
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        required
                      />
                    </FormField>
                  </FormRow>
                  
                  <FormRow>
                    <FormField>
                      <FormLabel>Message</FormLabel>
                      <FormTextarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        required
                        rows={4}
                      />
                    </FormField>
                  </FormRow>
                  
                  <SubmitButton type="submit">
                    <ButtonIcon><FaPaperPlane /></ButtonIcon>
                    Send Message
                  </SubmitButton>
                </ContactForm>
              )}
            </FormBox>
          </FormContainer>
        </ContentGrid>
      </Container>
    </ContactWrapper>
  );
}

const ContactWrapper = styled.section`
  padding: 80px 0;
  background: linear-gradient(to bottom, #f8f9fa, #fff);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 40px;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const SectionHeading = styled.div`
  margin-bottom: 30px;
`;

const Title = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  color: #222;
  margin: 0 0 10px;
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #666;
  margin: 0;
`;

const ContactInfo = styled.div`
  padding-right: 20px;
`;

const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
`;

const IconBox = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: linear-gradient(135deg, #4361EE, #4CC9F0);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  margin-right: 15px;
  box-shadow: 0 5px 15px rgba(67, 97, 238, 0.2);
`;

const InfoContent = styled.div`
  flex: 1;
`;

const InfoTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: #444;
  margin: 0 0 5px;
`;

const InfoText = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 0;
`;

const FormContainer = styled.div`
  position: relative;
`;

const FormBox = styled.div`
  background: white;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  height: 100%;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormRow = styled.div`
  display: flex;
  gap: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FormField = styled.div`
  flex: 1;
`;

const FormLabel = styled.label`
  display: block;
  font-size: 0.9rem;
  font-weight: 600;
  color: #555;
  margin-bottom: 8px;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 12px 15px;
  font-size: 1rem;
  border: 2px solid #eaeaea;
  border-radius: 10px;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #4361EE;
    box-shadow: 0 0 0 2px rgba(67, 97, 238, 0.1);
  }
  
  &::placeholder {
    color: #aaa;
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 12px 15px;
  font-size: 1rem;
  border: 2px solid #eaeaea;
  border-radius: 10px;
  resize: vertical;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #4361EE;
    box-shadow: 0 0 0 2px rgba(67, 97, 238, 0.1);
  }
  
  &::placeholder {
    color: #aaa;
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, #4361EE, #3A0CA3);
  color: white;
  font-size: 1rem;
  font-weight: 600;
  padding: 14px 24px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(67, 97, 238, 0.3);
  margin-top: 10px;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(67, 97, 238, 0.4);
  }
`;

const ButtonIcon = styled.span`
  font-size: 0.9rem;
  margin-right: 8px;
`;

const SuccessMessage = styled.div`
  text-align: center;
  padding: 30px 0;
  
  h3 {
    font-size: 1.5rem;
    margin: 10px 0;
    color: #222;
  }
  
  p {
    color: #666;
    font-size: 1.1rem;
  }
`;

const SuccessIcon = styled.div`
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #4CC9F0, #4361EE);
  color: white;
  font-size: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  box-shadow: 0 5px 15px rgba(76, 201, 240, 0.3);
`;