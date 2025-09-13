import React, { useState } from "react";
import styled from "styled-components";

// Sample Data Structure
const worksData = [
  {
    id: 1,
    client: "Christian Service International (Church of God in Christ)",
    description: "Construction of residential houses in the districts of Gatsibo, Kayonza and Nyagatare, carried out under the commission of Christian Service International(CSI). PEAK VENTURES was equal to the task and delivered the following;",
    deliverables: [
      "Construction of Residential buildings for vulnerables",
      "Finishing work for the house (painting, plastering...etc)",
      "Setting up a water tank for vulnerables",
      "Walk ways",
      "Landscaping"
    ],
    mainImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    additionalImages: [
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=400&h=300&fit=crop"
    ]
  },
  {
    id: 2,
    client: "Christian service international",
    description: "We completed the construction of a ware house for christian international services for there products.",
    deliverables: [],
    mainImage: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&h=600&fit=crop",
    additionalImages: [
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop"
    ]
  },
  {
    id: 3,
    client: "Brac international Rwanda",
    description: "Having successfully completed the construction of a 4 Classroom Block for the Brac international rwanda.",
    deliverables: [],
    mainImage: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&h=600&fit=crop",
    additionalImages: [
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop"
    ]
  }
];

// Our Works Component
export default function OurWorksSection({ works = worksData }) {
  const [selectedWork, setSelectedWork] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const currentWork = works[selectedWork];
  const allImages = [currentWork.mainImage, ...currentWork.additionalImages];

  return (
    <WorksWrapper id="our-works">
      <ContentContainer>
        <SectionHeader>
          <SectionTitle className="extraBold font60">Our Works</SectionTitle>
        </SectionHeader>

        <WorksContent>
          {/* Work Navigation */}
          <WorkNavigation>
            {works.map((work, index) => (
              <NavItem
                key={work.id}
                active={selectedWork === index}
                onClick={() => {
                  setSelectedWork(index);
                  setSelectedImageIndex(0);
                }}
                className="font16 medium"
              >
                Project {index + 1}
              </NavItem>
            ))}
          </WorkNavigation>

          <WorkDetails>
            {/* Images Section */}
            <ImagesSection>
              <MainImageContainer>
                <MainImage
                  src={allImages[selectedImageIndex]}
                  alt={`${currentWork.client} - Main`}
                />
                <ImageOverlay>
                  <ImageCounter className="font14 medium">
                    {selectedImageIndex + 1} / {allImages.length}
                  </ImageCounter>
                </ImageOverlay>
              </MainImageContainer>
              
              <ThumbnailsContainer>
                {allImages.map((image, index) => (
                  <Thumbnail
                    key={index}
                    src={image}
                    alt={`${currentWork.client} - ${index + 1}`}
                    active={selectedImageIndex === index}
                    onClick={() => setSelectedImageIndex(index)}
                  />
                ))}
              </ThumbnailsContainer>
            </ImagesSection>

            {/* Content Section */}
            <ContentSection>
              <ClientInfo>
                <ClientLabel className="font14 medium">CLIENT:</ClientLabel>
                <ClientName className="font20 extraBold">{currentWork.client}</ClientName>
              </ClientInfo>

              <DescriptionSection>
                <SectionLabel className="font16 extraBold">Description of Works:</SectionLabel>
                <Description className="font16 regular">{currentWork.description}</Description>
              </DescriptionSection>

              <DeliverablesSection>
                <SectionLabel className="font16 extraBold">Deliverables:</SectionLabel>
                <DeliverablesList>
                  {currentWork.deliverables.map((deliverable, index) => (
                    <DeliverableItem key={index} className="font16 regular">
                      <DeliverableBullet />
                      {deliverable}
                    </DeliverableItem>
                  ))}
                </DeliverablesList>
              </DeliverablesSection>
            </ContentSection>
          </WorkDetails>
        </WorksContent>
      </ContentContainer>
    </WorksWrapper>
  );
}

// Styled Components
const WorksWrapper = styled.section`
  width: 100%;
  padding: 100px 0;
  background-color: #f8f9fa;
  position: relative;
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 10px;
`;

const SectionTitle = styled.h2`
  color: #333;
  margin-bottom: 10px;
  
  @media (max-width: 768px) {
    font-size: 48px !important;
  }
  
  @media (max-width: 560px) {
    font-size: 36px !important;
  }
`;

const WorksContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const WorkNavigation = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 10px;
  }
`;

const NavItem = styled.button`
  padding: 12px 24px;
  border: 2px solid ${props => props.active ? '#E89544' : '#ddd'};
  background-color: ${props => props.active ? '#E89544' : 'white'};
  color: ${props => props.active ? 'white' : '#333'};
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #E89544;
    background-color: ${props => props.active ? '#E89544' : '#E89544'};
    color: white;
  }
  
  @media (max-width: 560px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;

const WorkDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  
  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const ImagesSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const MainImageContainer = styled.div`
  position: relative;
  aspect-ratio: 4/3;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const MainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 8px 12px;
  border-radius: 20px;
`;

const ImageCounter = styled.span`
  color: white;
`;

const ThumbnailsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
`;

const Thumbnail = styled.img`
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  border: 3px solid ${props => props.active ? '#E89544' : 'transparent'};
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #E89544;
    transform: translateY(-2px);
  }
`;

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ClientInfo = styled.div`
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
`;

const ClientLabel = styled.p`
  color: #E89544;
  margin: 0 0 8px 0;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const ClientName = styled.h3`
  color: #333;
  margin: 0;
  line-height: 1.4;
`;

const DescriptionSection = styled.div`
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
`;

const DeliverablesSection = styled.div`
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
`;

const SectionLabel = styled.h4`
  color: #333;
  margin: 0 0 15px 0;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Description = styled.p`
  color: #666;
  margin: 0;
  line-height: 1.8;
`;

const DeliverablesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const DeliverableItem = styled.li`
  color: #666;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  line-height: 1.6;
`;

const DeliverableBullet = styled.div`
  width: 8px;
  height: 8px;
  background-color: #E89544;
  border-radius: 50%;
  flex-shrink: 0;
  margin-top: 8px;
`;