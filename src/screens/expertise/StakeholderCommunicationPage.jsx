import React from "react";
import styled from "styled-components";
import {
  FaUsers,
  FaComments,
  FaPaperPlane,
  FaHandshake,
  FaBullhorn,
  FaRegEnvelope
} from "react-icons/fa";
import ExpertisePage from "./ExpertisePage";

// Project Management – Stakeholder & Communication Strategy Page
const StakeholderCommunicationPage = () => {
  const imagePath = process.env.PUBLIC_URL + "/heroimg20.jpg";

  const stakeholderSolution = {
    title: "Stakeholder & Communication Strategy",
    acronym: "SCS",
    description:
      "Effective communication and strong stakeholder relationships are key to successful project management. Our approach involves establishing clear channels of communication, managing stakeholder expectations, and ensuring transparency throughout the project lifecycle.",
    imageSrc: imagePath,
    ctaText: "Strengthen Stakeholder Engagement",
    ctaLink: "/services/stakeholder-communication",

    features: [
      {
        icon: <FaUsers />,
        title: "Stakeholder Identification & Mapping",
        description:
          "Identify and map key stakeholders based on their influence, interest, and involvement to ensure that you’re engaging with the right people at the right time.",
        additionalContent: (
          <FeatureHighlights>
            <li>Stakeholder analysis matrix</li>
            <li>Engagement level mapping</li>
            <li>Prioritization of stakeholders</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaComments />,
        title: "Communication Planning",
        description:
          "Develop a comprehensive communication plan that defines the frequency, format, and methods of communication with stakeholders to keep them informed and aligned.",
        additionalContent: (
          <FeatureHighlights>
            <li>Tailored communication strategy</li>
            <li>Regular progress updates</li>
            <li>Feedback loops</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaPaperPlane />,
        title: "Information Distribution & Reporting",
        description:
          "Ensure that accurate and timely information is distributed to stakeholders through various channels, including reports, presentations, and project dashboards.",
        additionalContent: (
          <FeatureHighlights>
            <li>Project dashboards</li>
            <li>Weekly and monthly reports</li>
            <li>Executive briefings</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaHandshake />,
        title: "Stakeholder Relationship Management",
        description:
          "Foster positive relationships with key stakeholders by addressing concerns, negotiating needs, and maintaining trust throughout the project.",
        additionalContent: (
          <FeatureHighlights>
            <li>One-on-one meetings</li>
            <li>Conflict resolution strategies</li>
            <li>Stakeholder engagement programs</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaBullhorn />,
        title: "Crisis Communication & Management",
        description:
          "Prepare for potential crises by developing crisis communication plans that can be activated when needed to ensure stakeholders are kept informed and confident.",
        additionalContent: (
          <FeatureHighlights>
            <li>Crisis management protocols</li>
            <li>Immediate response strategies</li>
            <li>Transparent and honest communication</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaRegEnvelope />,
        title: "Digital Communication Tools",
        description:
          "Leverage modern communication tools to streamline interactions with stakeholders and ensure that all communications are efficient, consistent, and documented.",
        additionalContent: (
          <FeatureHighlights>
            <li>Collaboration platforms (e.g., Slack, Teams)</li>
            <li>Email automation</li>
            <li>Project management tools (e.g., Asana, Monday.com)</li>
          </FeatureHighlights>
        ),
      },
    ],

    techStack: [
      "Microsoft Teams",
      "Slack",
      "Zoom",
      "Asana",
      "Monday.com",
      "Trello",
      "SharePoint",
      "Basecamp",
      "Google Workspace",
      "ProjectLibre"
    ],

    testimonial: {
      quote:
        "The communication strategy provided by this team has been invaluable. Their clear, timely updates and regular stakeholder check-ins have kept our clients satisfied and our project on track, even when challenges arose.",
      author: "Rachel D.",
      position: "Director of Operations, AlphaTech Solutions"
    },
  };

  const theme = {
    primary: "#3C8C3C",
    dark: "#121212",
    white: "#FFFFFF",
    light: "#F9F9F9",
  };

  return (
    <PageContainer>
      <ExpertisePage solution={stakeholderSolution} theme={theme} pageTag="PROJECT MANAGEMENT" />
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
    color: #444;
  }
`;

export default StakeholderCommunicationPage;
