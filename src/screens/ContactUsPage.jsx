import React, { useState } from "react";
import styled from "styled-components";
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaLinkedin, 
  FaTwitter, 
  FaFacebook,
  FaPaperPlane,
  FaCheck
} from "react-icons/fa";

const ContactUsPage = () => {
  // State for form handling
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission - replace with actual API call
    setTimeout(() => {
      setFormSubmitted(true);
      // Reset form data
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    }, 1000);
  };

  // Theme colors (keeping consistent with provided examples)
  const theme = {
    primary: "#3C8C3C",
    dark: "#121212",
    white: "#FFFFFF",
    light: "#F9F9F9",
  };

  return (
    <ContactContainer backgroundColor={theme.light}>
      <ContentWrapper>
        <ContactHeader>
          <ContactLabel accentColor={theme.primary}>GET IN TOUCH</ContactLabel>
          <ContactTitle color={theme.dark}>Contact Us</ContactTitle>
          <ContactDescription>
            Have questions about our services or want to discuss your project needs?
            Our team is ready to help you find the perfect solution.
          </ContactDescription>
        </ContactHeader>

        <ContactSections>
          {/* Contact Information Section */}
          <ContactInfoSection>
            <InfoCard backgroundColor={theme.white}>
              <InfoHeader>
                <InfoTitle color={theme.dark}>Contact Information</InfoTitle>
                <InfoSubtitle>Reach out to us through any of these channels</InfoSubtitle>
              </InfoHeader>
              
              <ContactMethods>
                <ContactMethod>
                  <IconWrapper color={theme.primary}>
                    <FaEnvelope />
                  </IconWrapper>
                  <ContactDetails>
                    <ContactMethodTitle>Email</ContactMethodTitle>
                    <ContactMethodValue>info@knackfusion.com</ContactMethodValue>
                  </ContactDetails>
                </ContactMethod>
                
                <ContactMethod>
                  <IconWrapper color={theme.primary}>
                    <FaPhone />
                  </IconWrapper>
                  <ContactDetails>
                    <ContactMethodTitle>Phone</ContactMethodTitle>
                    <ContactMethodValue>+250 788 277 693</ContactMethodValue>
                  </ContactDetails>
                </ContactMethod>
                
                <ContactMethod>
                  <IconWrapper color={theme.primary}>
                    <FaMapMarkerAlt />
                  </IconWrapper>
                  <ContactDetails>
                    <ContactMethodTitle>Office</ContactMethodTitle>
                    <ContactMethodValue>
                      KG 3 Avenue<br />
                      House 200<br />
                      Kigali, Rwanda
                    </ContactMethodValue>
                  </ContactDetails>
                </ContactMethod>
              </ContactMethods>
              
              <SocialLinks>
                <SocialLink href="#" color={theme.primary}>
                  <FaLinkedin />
                </SocialLink>
                <SocialLink href="#" color={theme.primary}>
                  <FaTwitter />
                </SocialLink>
                <SocialLink href="#" color={theme.primary}>
                  <FaFacebook />
                </SocialLink>
              </SocialLinks>
              
              <MapContainer>
                {/* Replace with actual map implementation */}
                <MapPlaceholder>
                  <FaMapMarkerAlt />
                  <span>Map Location</span>
                </MapPlaceholder>
              </MapContainer>
            </InfoCard>
          </ContactInfoSection>
          
          {/* Contact Form Section */}
          <ContactFormSection>
            <FormCard backgroundColor={theme.white} borderColor={theme.primary}>
              <FormHeader>
                <FormTitle color={theme.dark}>Send Us a Message</FormTitle>
                <FormSubtitle>Fill out the form below and we'll get back to you shortly</FormSubtitle>
              </FormHeader>
              
              {formSubmitted ? (
                <SuccessMessage>
                  <SuccessIcon color={theme.primary}>
                    <FaCheck />
                  </SuccessIcon>
                  <SuccessText>
                    <h3>Message Sent!</h3>
                    <p>Thank you for reaching out. We'll respond to your inquiry as soon as possible.</p>
                    <ResetButton onClick={() => setFormSubmitted(false)} color={theme.primary}>
                      Send Another Message
                    </ResetButton>
                  </SuccessText>
                </SuccessMessage>
              ) : (
                <ContactForm onSubmit={handleSubmit}>
                  <FormRow>
                    <FormGroup>
                      <FormLabel>Your Name *</FormLabel>
                      <FormInput
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        focusColor={theme.primary}
                      />
                    </FormGroup>
                    
                    <FormGroup>
                      <FormLabel>Email Address *</FormLabel>
                      <FormInput
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        focusColor={theme.primary}
                      />
                    </FormGroup>
                  </FormRow>
                  
                  <FormRow>
                    <FormGroup>
                      <FormLabel>Phone Number</FormLabel>
                      <FormInput
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        focusColor={theme.primary}
                      />
                    </FormGroup>
                    
                    <FormGroup>
                      <FormLabel>Subject *</FormLabel>
                      <FormInput
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        focusColor={theme.primary}
                      />
                    </FormGroup>
                  </FormRow>
                  
                  <FormGroup>
                    <FormLabel>Message *</FormLabel>
                    <FormTextarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      required
                      focusColor={theme.primary}
                    ></FormTextarea>
                  </FormGroup>
                  
                  <SubmitButton type="submit" backgroundColor={theme.primary} textColor={theme.white}>
                    Send Message <FaPaperPlane />
                  </SubmitButton>
                </ContactForm>
              )}
            </FormCard>
          </ContactFormSection>
        </ContactSections>
        
        {/* Business Hours Section */}
        <BusinessHoursSection>
          <BusinessHoursTitle color={theme.dark}>Business Hours</BusinessHoursTitle>
          <BusinessHoursGrid>
            <BusinessHoursItem>
              <DayLabel>Monday - Friday</DayLabel>
              <HoursValue>9:00 AM - 6:00 PM</HoursValue>
            </BusinessHoursItem>
            <BusinessHoursItem>
              <DayLabel>Saturday</DayLabel>
              <HoursValue>10:00 AM - 2:00 PM</HoursValue>
            </BusinessHoursItem>
            <BusinessHoursItem>
              <DayLabel>Sunday</DayLabel>
              <HoursValue>Closed</HoursValue>
            </BusinessHoursItem>
          </BusinessHoursGrid>
        </BusinessHoursSection>
      </ContentWrapper>
    </ContactContainer>
  );
};

// Styled Components
const ContactContainer = styled.section`
  background-color: ${props => props.backgroundColor || "#F9F9F9"};
  padding: 80px 0;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(60, 140, 60, 0.1) 0%, rgba(60, 140, 60, 0) 70%);
    border-radius: 50%;
    transform: translate(100px, -150px);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, rgba(60, 140, 60, 0.1) 0%, rgba(60, 140, 60, 0) 70%);
    border-radius: 50%;
    transform: translate(-100px, 100px);
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
`;

const ContactHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const ContactLabel = styled.div`
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  color: ${props => props.accentColor || "#3C8C3C"};
  margin-bottom: 16px;
`;

const ContactTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin: 0 0 24px;
  color: ${props => props.color || "#121212"};
  line-height: 1.2;
`;

const ContactDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.7;
  color: #444;
  max-width: 700px;
  margin: 0 auto;
`;

const ContactSections = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 70px;
  
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const ContactInfoSection = styled.div`
  flex: 1;
`;

const ContactFormSection = styled.div`
  flex: 1.5;
`;

const InfoCard = styled.div`
  background-color: ${props => props.backgroundColor || "#FFFFFF"};
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.08);
  height: 100%;
`;

const InfoHeader = styled.div`
  margin-bottom: 30px;
`;

const InfoTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  margin: 0 0 12px;
  color: ${props => props.color || "#121212"};
`;

const InfoSubtitle = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 0;
`;

const ContactMethods = styled.div`
  margin-bottom: 30px;
`;

const ContactMethod = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 25px;
`;

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${props => `${props.color}15` || "#3C8C3C15"};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  color: ${props => props.color || "#3C8C3C"};
  font-size: 1.2rem;
`;

const ContactDetails = styled.div``;

const ContactMethodTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 5px;
  color: #333;
`;

const ContactMethodValue = styled.p`
  font-size: 0.95rem;
  color: #666;
  margin: 0;
  line-height: 1.6;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${props => `${props.color}15` || "#3C8C3C15"};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.color || "#3C8C3C"};
  font-size: 1.2rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.color || "#3C8C3C"};
    color: white;
    transform: translateY(-3px);
  }
`;

const MapContainer = styled.div`
  height: 200px;
  border-radius: 12px;
  overflow: hidden;
  background-color: #f0f0f0;
`;

const MapPlaceholder = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 1rem;
  
  svg {
    font-size: 2rem;
    margin-bottom: 10px;
  }
`;

const FormCard = styled.div`
  background-color: ${props => props.backgroundColor || "#FFFFFF"};
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.08);
  border-left: 5px solid ${props => props.borderColor || "#3C8C3C"};
`;

const FormHeader = styled.div`
  margin-bottom: 30px;
`;

const FormTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  margin: 0 0 12px;
  color: ${props => props.color || "#121212"};
`;

const FormSubtitle = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 0;
`;

const ContactForm = styled.form``;

const FormRow = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
`;

const FormGroup = styled.div`
  flex: 1;
  margin-bottom: 20px;
`;

const FormLabel = styled.label`
  display: block;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 8px;
  color: #444;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 12px 15px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.focusColor || "#3C8C3C"};
    box-shadow: 0 0 0 2px ${props => `${props.focusColor}30` || "#3C8C3C30"};
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 12px 15px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  resize: vertical;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.focusColor || "#3C8C3C"};
    box-shadow: 0 0 0 2px ${props => `${props.focusColor}30` || "#3C8C3C30"};
  }
`;

const SubmitButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background-color: ${props => props.backgroundColor || "#3C8C3C"};
  color: ${props => props.textColor || "#FFFFFF"};
  padding: 14px 28px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  
  svg {
    transition: transform 0.3s ease;
    font-size: 16px;
  }
  
  &:hover {
    background-color: ${props => props.hoverColor || "#6C8939"};
    transform: translateY(-2px);
    
    svg {
      transform: translateX(4px);
    }
  }
`;

const SuccessMessage = styled.div`
  display: flex;
  align-items: center;
  padding: 30px 0;
`;

const SuccessIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${props => `${props.color}15` || "#3C8C3C15"};
  color: ${props => props.color || "#3C8C3C"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-right: 20px;
`;

const SuccessText = styled.div`
  h3 {
    margin: 0 0 10px;
    font-size: 1.4rem;
    color: #333;
  }
  
  p {
    margin: 0 0 20px;
    color: #666;
  }
`;

const ResetButton = styled.button`
  background: none;
  border: 1px solid ${props => props.color || "#3C8C3C"};
  color: ${props => props.color || "#3C8C3C"};
  padding: 10px 20px;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => `${props.color}10` || "#3C8C3C10"};
  }
`;

const BusinessHoursSection = styled.div`
  text-align: center;
`;

const BusinessHoursTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 30px;
  color: ${props => props.color || "#121212"};
`;

const BusinessHoursGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const BusinessHoursItem = styled.div`
  padding: 20px 30px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  min-width: 200px;
`;

const DayLabel = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 8px;
  color: #444;
`;

const HoursValue = styled.p`
  font-size: 0.95rem;
  color: #666;
  margin: 0;
`;

export default ContactUsPage;