import React from "react";
import styled from "styled-components";
import {
  FaSearch,
  FaHome,
  FaHandshake,
  FaChartLine,
  FaMobileAlt,
} from "react-icons/fa";
import { BiCog } from "react-icons/bi";
import ExpertisePage from "./ExpertisePage";

// Sample usage with the REPZ real estate platform solution
const RepzSolutionPage = () => {
  const imagePath = process.env.PUBLIC_URL + "/heroimg14.jpg"
  // Define your solution data
  const repzSolution = {
    title: "REPZ",
    acronym: "REPZ",
    description:
      "A real estate platform in Zimbabwe where users can search, buy, rent, or sell properties. This system streamlines property transactions, making it easier for individuals and businesses to find real estate opportunities efficiently.",
    imageSrc: imagePath, // Replace with your actual image
    ctaText: "Explore the Platform",
    ctaLink: "/solutions/repz",

    // Define features with icons and descriptions
    features: [
      {
        icon: <FaSearch />,
        title: "Property Search",
        description:
          "Advanced search functionality with filters for location, price, property type, and amenities. Users can easily find their ideal property with our intuitive search interface.",
        additionalContent: (
          <FeatureHighlights>
            <li>Geolocation-based search</li>
            <li>Save favorite properties</li>
            <li>Custom filter combinations</li>
          </FeatureHighlights>
        ),
        image: "/api/placeholder/400/250", // Optional feature-specific image
      },
      {
        icon: <FaHome />,
        title: "Property Listings",
        description:
          "Comprehensive property listings with detailed information, high-quality images, virtual tours, and neighborhood data to help buyers make informed decisions.",
        additionalContent: (
          <FeatureHighlights>
            <li>360° virtual tours</li>
            <li>Neighborhood analytics</li>
            <li>Customizable listing pages</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaHandshake />,
        title: "Transaction Management",
        description:
          "Secure transaction processing with built-in verification, document handling, and escrow services to ensure smooth and transparent property transactions.",
        additionalContent: (
          <FeatureHighlights>
            <li>Digital contracts</li>
            <li>Secure payment processing</li>
            <li>Transaction milestone tracking</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaMobileAlt />,
        title: "Mobile Experience",
        description:
          "A fully responsive platform with dedicated mobile applications for both Android and iOS, allowing users to search and manage properties on the go.",
        additionalContent: (
          <FeatureHighlights>
            <li>Real-time notifications</li>
            <li>Offline capabilities</li>
            <li>In-app messaging system</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaChartLine />,
        title: "Market Analytics",
        description:
          "Comprehensive market data and analytics to help users understand property value trends, investment opportunities, and market dynamics.",
        additionalContent: (
          <FeatureHighlights>
            <li>Price history charts</li>
            <li>ROI calculators</li>
            <li>Market forecast tools</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <BiCog />,
        title: "Agent Tools",
        description:
          "Specialized tools for real estate agents and agencies to manage listings, client communications, and transaction processes efficiently.",
        additionalContent: (
          <FeatureHighlights>
            <li>Client management dashboard</li>
            <li>Automated lead routing</li>
            <li>Performance analytics</li>
          </FeatureHighlights>
        ),
      },
    ],

    // Technology stack (optional)
    techStack: [
      "React",
      "Node.js",
      "PostgreSQL",
      "AWS",
      "Google Maps API",
      "Stripe",
      "Firebase",
      "React Native",
    ],

    // Testimonial (optional)
    testimonial: {
      quote:
        "REPZ has revolutionized how we approach real estate in Zimbabwe. The platform's intuitive design and comprehensive features have helped us grow our business by 40% in just one year.",
      author: "James Takawira",
      position: "CEO, Harare Properties Ltd",
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
      <ExpertisePage solution={repzSolution} theme={theme} />
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

export default RepzSolutionPage;
