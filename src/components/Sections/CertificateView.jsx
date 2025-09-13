import React from "react";
import styled from "styled-components";

const GridSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 40px;
  margin: 80px 0;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const CertificationCard = styled.div`
  background: ${(props) => props.theme?.white || "#ffffff"};
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid ${(props) => props.theme?.lightGray || "#e5e5e5"};

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 767px) {
    padding: 20px;
  }
`;

const CardHeading = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 16px;
  color: ${(props) => props.theme?.dark || "#333333"};

  @media (max-width: 767px) {
    font-size: 1.35rem;
  }
`;

const CertificationPreview = styled.div`
  width: 100%;
  height: 200px;
  background: ${(props) => props.theme?.lightGray || "#f8f9fa"};
  border-radius: 8px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed ${(props) => props.theme?.gray || "#ddd"};
  position: relative;
  overflow: hidden;

  @media (max-width: 767px) {
    height: 160px;
  }
`;

const PDFEmbed = styled.embed`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 6px;
`;

const PDFIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme?.gray || "#666"};
  font-size: 3rem;

  &::before {
    content: "📄";
    margin-bottom: 8px;
  }

  span {
    font-size: 0.9rem;
    font-weight: 500;
  }
`;

const CertificationInfo = styled.div`
  margin-bottom: 20px;
`;

const InfoItem = styled.div`
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const InfoLabel = styled.span`
  font-weight: 600;
  color: ${(props) => props.theme?.dark || "#333"};
  margin-right: 8px;
`;

const InfoValue = styled.span`
  color: ${(props) => props.theme?.gray || "#666"};
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 8px;
  }
`;

const Button = styled.button`
  padding: 10px 16px;
  border-radius: 6px;
  border: none;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.9rem;
  flex: 1;

  @media (max-width: 767px) {
    padding: 12px 16px;
  }
`;

const PrimaryButton = styled(Button)`
  background-color: ${(props) => props.theme?.primary || "#3C8C3C"};
  color: white;

  &:hover {
    background-color: ${(props) => props.theme?.primaryDark || "#3C8C3C"};
    transform: translateY(-1px);
  }
`;

// Main component
const CertificationView = ({ certifications }) => {
  const handleViewCertificate = (pdfPath) => {
    window.open(pdfPath, "_blank");
  };

  return (
    <GridSection>
      {certifications.map((cert, index) => (
        <CertificationCard key={index}>
          <CardHeading>{cert.title}</CardHeading>

          <CertificationPreview>
            {cert.pdfPath ? (
              <PDFEmbed
                src={`${cert.pdfPath}#toolbar=0&navpanes=0&scrollbar=0`}
                type="application/pdf"
                onError={() => {
                  // Fallback to icon if PDF can't be embedded
                }}
              />
            ) : (
              <PDFIcon>
                <span>Certificate</span>
              </PDFIcon>
            )}
          </CertificationPreview>

          <CertificationInfo>
            {cert.issuer && (
              <InfoItem>
                <InfoLabel>Issued by:</InfoLabel>
                <InfoValue>{cert.issuer}</InfoValue>
              </InfoItem>
            )}
          </CertificationInfo>

          <ActionButtons>
            <PrimaryButton onClick={() => handleViewCertificate(cert.pdfPath)}>
              View Certificate
            </PrimaryButton>
          </ActionButtons>
        </CertificationCard>
      ))}
    </GridSection>
  );
};

export default CertificationView;
