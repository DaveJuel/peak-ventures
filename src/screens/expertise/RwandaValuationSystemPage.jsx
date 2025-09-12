import React from "react";
import styled from "styled-components";
import { FaBuilding, FaCertificate, FaCheckCircle, FaUserAlt } from "react-icons/fa";
import { BiCog } from "react-icons/bi";
import ExpertisePage from "./ExpertisePage";

// Sample usage for the Rwanda's Valuation System page
const RwandaValuationSystemPage = () => {
  const imagePath = process.env.PUBLIC_URL + "/heroimg20.jpg"; // Replace with your actual image
  // Define your solution data
  const valuationSolution = {
    title: "Rwanda’s Valuation System",
    acronym: "RVS",
    description:
      "A registry for property valuation reports across Rwanda. This system enables citizens to request valuers and verify the credibility of valuation certificates, ensuring transparency and efficiency in property valuation.",
    imageSrc: imagePath, // Replace with your actual image
    ctaText: "Explore the Valuation System",
    ctaLink: "/solutions/rwanda-valuation-system",

    // Define features with icons and descriptions
    features: [
      {
        icon: <FaBuilding />,
        title: "Property Valuation Requests",
        description:
          "Citizens can request property valuation services from certified valuers. The platform streamlines the process, ensuring that requests are efficiently handled by professionals.",
        additionalContent: (
          <FeatureHighlights>
            <li>Easy online request submission</li>
            <li>Certified valuer matching</li>
            <li>Real-time status updates on requests</li>
          </FeatureHighlights>
        ),
        image: "/api/placeholder/400/250", // Optional feature-specific image
      },
      {
        icon: <FaCertificate />,
        title: "Valuation Certificates Verification",
        description:
          "The system provides a mechanism for citizens to verify the authenticity and credibility of property valuation certificates, ensuring that the valuations are legitimate and performed by certified professionals.",
        additionalContent: (
          <FeatureHighlights>
            <li>Instant certificate verification</li>
            <li>Access to certifying institutions' data</li>
            <li>Ensures transparency in property transactions</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaCheckCircle />,
        title: "Transparency & Accountability",
        description:
          "The platform ensures that all valuation activities are conducted in a transparent manner, giving the public confidence in the system. Verification of credentials for valuers and transparency in valuation processes are key aspects of the system.",
        additionalContent: (
          <FeatureHighlights>
            <li>Public access to valuer profiles</li>
            <li>Transparent pricing for services</li>
            <li>Real-time tracking of certificate status</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaUserAlt />,
        title: "Valuer & Client Profiles",
        description:
          "Valuers and clients have their profiles in the system, allowing for detailed information about their work, experience, and past valuations. This creates a reliable database of valuers for citizens to access and trust.",
        additionalContent: (
          <FeatureHighlights>
            <li>Detailed profiles for valuers and clients</li>
            <li>Ratings and reviews from clients</li>
            <li>Access to work history and credentials</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <BiCog />,
        title: "Advanced System Integration",
        description:
          "The system integrates with government databases and external organizations to ensure seamless verification of documents and certificates. This integration also facilitates the tracking of property ownership and valuation history.",
        additionalContent: (
          <FeatureHighlights>
            <li>Integration with national property databases</li>
            <li>Collaboration with government agencies</li>
            <li>Automated updates to property valuation history</li>
          </FeatureHighlights>
        ),
      },
    ],

    // Technology stack (optional)
    techStack: [
      "React",
      "Node.js",
      "MongoDB",
      "AWS",
      "Blockchain (for verification)",
      "PostgreSQL",
      "Docker",
      "Redis",
    ],

    // Testimonial (optional)
    testimonial: {
      quote:
        "Rwanda’s Valuation System has made property valuation processes easier and more trustworthy. We now have a system that ensures accurate and transparent valuations, boosting confidence among property buyers and sellers.",
      author: "Josephine Nyiranshuti",
      position: "Director, Rwanda Property Association",
    },
  };

  // Theme colors (can be customized or use defaults)
  const theme = {
    primary: "#3C8C3C",
    dark: "#121212",
    white: "#FFFFFF",
    light: "#F9F9F9",
  };

  return (
    <PageContainer>
      <ExpertisePage solution={valuationSolution} theme={theme} />
    </PageContainer>
  );
};

const PageContainer = styled.div`
  min-height: 100vh;
`;

const FeatureHighlights = styled.ul`
  margin: 0;
  padding-left: 20px;

  li {
    margin-bottom: 8px;
    font-size: 1rem;
    color: #555;
  }
`;

export default RwandaValuationSystemPage;
