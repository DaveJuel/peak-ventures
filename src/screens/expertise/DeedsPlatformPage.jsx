import React from "react";
import styled from "styled-components";
import { FaSearch, FaGavel, FaBuilding, FaUsers, FaFileAlt } from "react-icons/fa";
import { BiCog } from "react-icons/bi";
import ExpertisePage from "./ExpertisePage";

// Sample usage for the Deeds Platform page
const DeedsPlatformPage = () => {
  const imagePath = process.env.PUBLIC_URL + "/heroimg20.jpg"; // Replace with your actual image
  // Define your solution data
  const deedsSolution = {
    title: "Deeds Platform",
    acronym: "DP",
    description:
      "A national database for properties in Zimbabwe, allowing citizens to search for property records and facilitate property transfers through law firms, eliminating the need for physical visits to the Deeds/Land Office.",
    imageSrc: imagePath, // Replace with your actual image
    ctaText: "Explore the Deeds Platform",
    ctaLink: "/solutions/deeds-platform",

    // Define features with icons and descriptions
    features: [
      {
        icon: <FaSearch />,
        title: "Property Search",
        description:
          "Citizens can search the national property database to access comprehensive property records, including ownership details, transaction history, and legal status of the property.",
        additionalContent: (
          <FeatureHighlights>
            <li>Advanced search filters</li>
            <li>Access to ownership and transaction history</li>
            <li>Instant search results</li>
          </FeatureHighlights>
        ),
        image: "/api/placeholder/400/250", // Optional feature-specific image
      },
      {
        icon: <FaGavel />,
        title: "Property Transfer Facilitation",
        description:
          "The platform enables property transfers to be processed digitally through registered law firms, eliminating the need for physical visits to the Deeds/Land Office and streamlining the entire process.",
        additionalContent: (
          <FeatureHighlights>
            <li>Law firm integration for document signing</li>
            <li>Real-time tracking of transfer status</li>
            <li>Secure and compliant transfer processes</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaBuilding />,
        title: "Property Record Management",
        description:
          "The system maintains up-to-date property records, including legal information, zoning details, and building regulations, ensuring that property records are always accurate and accessible to users.",
        additionalContent: (
          <FeatureHighlights>
            <li>Automatic record updates</li>
            <li>Comprehensive property documentation</li>
            <li>Detailed zoning and legal status information</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaUsers />,
        title: "User Access & Permissions",
        description:
          "Different user roles are supported, including law firms, property owners, and government authorities, each having specific access permissions to ensure secure and appropriate access to property records and transaction processing.",
        additionalContent: (
          <FeatureHighlights>
            <li>Role-based access control</li>
            <li>User activity logging and auditing</li>
            <li>Secure document and transaction management</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaFileAlt />,
        title: "Document Management & Verification",
        description:
          "The platform integrates a document management system to store and verify property-related documents, including sales agreements, deeds, and transfer certificates, ensuring a secure and transparent process.",
        additionalContent: (
          <FeatureHighlights>
            <li>Digital document storage</li>
            <li>Document verification for authenticity</li>
            <li>Secure sharing of documents between users</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <BiCog />,
        title: "System Integration & Automation",
        description:
          "The platform integrates with government databases and law firm systems to ensure seamless processing of transactions and accurate property records. Automated notifications and updates keep all users informed throughout the process.",
        additionalContent: (
          <FeatureHighlights>
            <li>Integration with national land records</li>
            <li>Automated notifications for users</li>
            <li>Real-time transaction status updates</li>
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
      "Stripe (for payments)",
      "Firebase (for authentication)",
      "Docker",
      "GraphQL",
    ],

    // Testimonial (optional)
    testimonial: {
      quote:
        "The Deeds Platform has transformed how we handle property transactions in Zimbabwe. It has significantly reduced the time and hassle involved in property transfers, providing a much-needed solution in the real estate sector.",
      author: "Tendai Moyo",
      position: "CEO, Zimbabwe Real Estate Developers Association",
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
      <ExpertisePage solution={deedsSolution} theme={theme} />
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

export default DeedsPlatformPage;
