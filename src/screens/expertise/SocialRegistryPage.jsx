import React from "react";
import styled from "styled-components";
import { FaUsers, FaDatabase, FaShieldAlt, FaRegHandPointUp } from "react-icons/fa";
import { BiCog } from "react-icons/bi";
import ExpertisePage from "./ExpertisePage";

// Sample usage for the Social Registry solution page
const SocialRegistryPage = () => {
  const imagePath = process.env.PUBLIC_URL + "/heroimg20.jpg"; // Replace with your actual image
  // Define your solution data
  const socialRegistrySolution = {
    title: "Social Registry",
    acronym: "SR",
    description:
      "A national system that serves as a gateway for all social programs in Rwanda. It sets objectively measurable variables to identify the poor and vulnerable, enabling households to access and appeal any incorrect data captured within the system.",
    imageSrc: imagePath, // Replace with your actual image
    ctaText: "Explore the Social Registry",
    ctaLink: "/solutions/social-registry",

    // Define features with icons and descriptions
    features: [
      {
        icon: <FaUsers />,
        title: "Household Registration",
        description:
          "Households are registered in the system, capturing vital data to assess vulnerability and eligibility for various social programs. The registration process ensures that all eligible individuals are included.",
        additionalContent: (
          <FeatureHighlights>
            <li>Capture household demographics</li>
            <li>Link household members to specific programs</li>
            <li>Ensure inclusion for vulnerable groups</li>
          </FeatureHighlights>
        )
      },
      {
        icon: <FaDatabase />,
        title: "Data Accuracy & Validation",
        description:
          "Ensures the accuracy of household data through rigorous validation and verification processes. Data integrity checks are conducted regularly to ensure the information is up-to-date and correct.",
        additionalContent: (
          <FeatureHighlights>
            <li>Automated data validation</li>
            <li>Regular system updates</li>
            <li>Data reconciliation with various government agencies</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaShieldAlt />,
        title: "Security & Privacy",
        description:
          "The system prioritizes the security of sensitive data, implementing encryption, access controls, and secure data storage to protect personal and household information.",
        additionalContent: (
          <FeatureHighlights>
            <li>Data encryption and access control</li>
            <li>Compliance with data privacy regulations</li>
            <li>Regular security audits</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaRegHandPointUp />,
        title: "Data Appeal Mechanism",
        description:
          "Households have the ability to access and review their data within the system. If any inaccuracies are found, they can file an appeal, ensuring that the captured information is correct and fair.",
        additionalContent: (
          <FeatureHighlights>
            <li>Access personal data online</li>
            <li>Simple appeal submission process</li>
            <li>Timely response and resolution of disputes</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <BiCog />,
        title: "Program Integration",
        description:
          "The system integrates with various government social programs, ensuring that the right individuals are identified and matched with the appropriate social benefits based on their eligibility.",
        additionalContent: (
          <FeatureHighlights>
            <li>Automatic program eligibility matching</li>
            <li>Integration with social welfare programs</li>
            <li>Real-time updates of program benefits</li>
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
      "Redis",
      "API Integrations",
      "PostgreSQL",
      "Docker",
    ],

    // Testimonial (optional)
    testimonial: {
      quote:
        "The Social Registry has improved how vulnerable households access government assistance. By ensuring data accuracy and providing easy access to appeal processes, we've been able to support thousands of families more effectively.",
      author: "Mariam Musoni",
      position: "Director, National Social Protection Agency, Rwanda",
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
      <ExpertisePage solution={socialRegistrySolution} theme={theme} />
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

export default SocialRegistryPage;
