import React from "react";
import styled from "styled-components";
import {
  FaRoad,
  FaRegLightbulb,
  FaChartPie,
  FaRegListAlt,
  FaUserFriends,
  FaSearchDollar
} from "react-icons/fa";
import ExpertisePage from "./ExpertisePage";

// Project Planning & Strategy Solution page
const ProjectPlanningPage = () => {
  const imagePath = process.env.PUBLIC_URL + "/heroimg17.jpg";
  
  // Define the project planning & strategy solution data
  const planningStrategySolution = {
    title: "Planning & Integration",
    acronym: "SPP",
    description:
      "Our Strategic Project Planning service transforms business objectives into actionable project roadmaps. We deliver comprehensive planning frameworks that set the foundation for successful project execution, risk mitigation, and value delivery.",
    imageSrc: imagePath,
    ctaText: "Request Planning Consultation",
    ctaLink: "/services/strategic-planning",

    // Define planning & strategy features
    features: [
      {
        icon: <FaRoad />,
        title: "Roadmap Development",
        description:
          "Creation of detailed project roadmaps that align with organizational goals and provide clear direction for project teams. Our roadmaps establish key milestones, timelines, and dependencies to guide project execution.",
        additionalContent: (
          <FeatureHighlights>
            <li>Strategic alignment analysis</li>
            <li>Milestone planning</li>
            <li>Dependency mapping</li>
          </FeatureHighlights>
        ),
        image: "/api/placeholder/400/250",
      },
      {
        icon: <FaRegLightbulb />,
        title: "Strategic Initiative Analysis",
        description:
          "Comprehensive analysis of strategic initiatives to identify project requirements, assess feasibility, and determine optimal approaches for delivering value. We evaluate alternatives and recommend the best path forward.",
        additionalContent: (
          <FeatureHighlights>
            <li>Opportunity assessment</li>
            <li>Feasibility studies</li>
            <li>Alternative evaluation</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaChartPie />,
        title: "Resource Planning",
        description:
          "Strategic resource planning that identifies required personnel, equipment, and materials needed for project success. We optimize resource allocation to maximize efficiency and minimize costs.",
        additionalContent: (
          <FeatureHighlights>
            <li>Capacity analysis</li>
            <li>Resource forecasting</li>
            <li>Role definition</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaRegListAlt />,
        title: "Scope Definition",
        description:
          "Precise scope definition services that clearly articulate project boundaries, deliverables, acceptance criteria, and exclusions to prevent scope creep and ensure focused execution.",
        additionalContent: (
          <FeatureHighlights>
            <li>Work breakdown structures</li>
            <li>Deliverable specifications</li>
            <li>Requirements traceability</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaUserFriends />,
        title: "Stakeholder Strategy",
        description:
          "Development of stakeholder engagement strategies that identify key stakeholders, assess their influence and interests, and establish communication approaches to gain and maintain support.",
        additionalContent: (
          <FeatureHighlights>
            <li>Stakeholder mapping</li>
            <li>Influence assessment</li>
            <li>Communication planning</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaSearchDollar />,
        title: "Budget Development",
        description:
          "Expert budget development services that forecast project costs, establish budget baselines, and implement cost control mechanisms to ensure financial objectives are met.",
        additionalContent: (
          <FeatureHighlights>
            <li>Cost estimation</li>
            <li>Budget baseline creation</li>
            <li>Financial risk assessment</li>
          </FeatureHighlights>
        ),
      },
    ],

    // Technology stack
    techStack: [
      "MS Project",
      "Primavera P6",
      "Jira",
      "Smartsheet",
      "Asana",
      "Power BI",
      "Excel Advanced",
      "Tableau"
    ],

    // Testimonial
    testimonial: {
      quote:
        "The Strategic Project Planning service transformed how we approach our infrastructure initiatives. Their methodical planning approach identified risks we had completely overlooked and established a clear roadmap that kept our entire team aligned throughout execution.",
      author: "Sarah Johnson",
      position: "CIO, Global Infrastructure Solutions"
    },
  };

  // Theme colors (keeping consistent with provided examples)
  const theme = {
    primary: "#3C8C3C",
    dark: "#121212",
    white: "#FFFFFF",
    light: "#F9F9F9",
  };

  return (
    <PageContainer>
      <ExpertisePage solution={planningStrategySolution} theme={theme} pageTag="PROJECT MANAGEMENT" />
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

export default ProjectPlanningPage;