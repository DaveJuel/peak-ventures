import React from "react";
import styled from "styled-components";
import {
  FaCogs,
  FaProjectDiagram,
  FaCodeBranch,
  FaStream,
  FaMicroscope,
  FaVial,
} from "react-icons/fa";
import ExpertisePage from "./ExpertisePage";

// Integration & E2E Testing Page
const IntegrationTestingPage = () => {
  const imagePath = process.env.PUBLIC_URL + "/heroimg20.jpg";

  const integrationSolution = {
    title: "Integration & End-to-End Testing",
    acronym: "IET",
    description:
      "Guarantee seamless collaboration between components and user flows across your application. We validate that all integrated parts—from APIs and services to the full user journey—work together smoothly under realistic conditions.",
    imageSrc: imagePath,
    ctaText: "Ensure Seamless Integration",
    ctaLink: "/services/integration-testing",

    features: [
      {
        icon: <FaCogs />,
        title: "Integration Testing",
        description:
          "Verify interactions between individual modules, services, or layers—such as frontend and backend or third-party APIs—to ensure data consistency and workflow integrity.",
        additionalContent: (
          <FeatureHighlights>
            <li>Interface contract validation</li>
            <li>Service-to-service test coverage</li>
            <li>Mocking and stubbing support</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaProjectDiagram />,
        title: "System Testing",
        description:
          "Test the fully integrated system as a whole to ensure all modules interact properly in the environment closest to production.",
        additionalContent: (
          <FeatureHighlights>
            <li>End-to-end business flows</li>
            <li>Data synchronization validation</li>
            <li>Cross-module scenario tests</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaStream />,
        title: "End-to-End (E2E) Testing",
        description:
          "Validate complete user workflows from start to finish—from login to checkout—mirroring real-world usage with automated or manual flows.",
        additionalContent: (
          <FeatureHighlights>
            <li>UI and backend coordination</li>
            <li>Real-browser automation</li>
            <li>Edge-case and happy-path tests</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaMicroscope />,
        title: "Test Data Management",
        description:
          "Automate the setup and teardown of reliable test data for repeatable integration and E2E tests across environments.",
        additionalContent: (
          <FeatureHighlights>
            <li>Dynamic data generation</li>
            <li>Environment-safe resets</li>
            <li>Data masking for privacy</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaCodeBranch />,
        title: "CI/CD Integration",
        description:
          "Integrate automated tests into your continuous integration pipeline to catch regressions early and reduce deployment risks.",
        additionalContent: (
          <FeatureHighlights>
            <li>Trigger-based execution</li>
            <li>Automated smoke and sanity checks</li>
            <li>Fail-fast debugging logs</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaVial />,
        title: "Cross-Browser & Device Testing",
        description:
          "Ensure consistent performance and appearance across a range of browsers and devices, supporting full user accessibility.",
        additionalContent: (
          <FeatureHighlights>
            <li>Chrome, Firefox, Safari, Edge</li>
            <li>Mobile vs. desktop behavior</li>
            <li>Cloud-based device labs</li>
          </FeatureHighlights>
        ),
      },
    ],

    techStack: [
      "Postman",
      "Cypress",
      "Selenium",
      "Playwright",
      "TestCafe",
      "Rest Assured",
      "Pact",
      "Jest",
      "Mocha",
      "BrowserStack",
    ],

    testimonial: {
      quote:
        "With their thorough E2E testing strategy and seamless CI/CD integration, we detected hidden issues in multi-service interactions and improved delivery confidence across our agile releases.",
      author: "Lina Torres",
      position: "QA Engineering Manager, SyncFleet Systems",
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
      <ExpertisePage solution={integrationSolution} theme={theme} pageTag="QUALITY ASSURANCE" />
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

export default IntegrationTestingPage;
