import React from "react";
import styled from "styled-components";
import {
  FaUserCheck,
  FaRobot,
  FaRegFileCode,
  FaMobileAlt,
  FaSync,
  FaTools
} from "react-icons/fa";
import ExpertisePage from "./ExpertisePage";

// Manual & Automated Testing Solution page
const QAManualTestingPage = () => {
  const imagePath = process.env.PUBLIC_URL + "/heroimg21.jpg";
  
  // Define the Testing solution data
  const testingSolution = {
    title: "Manual & Automated Testing",
    acronym: "MAT",
    description:
      "Our comprehensive testing services combine human expertise with automation efficiency to deliver thorough software validation. We offer the perfect balance of manual exploratory testing and robust test automation to ensure your applications perform flawlessly in real-world conditions.",
    imageSrc: imagePath,
    ctaText: "Discuss Your Testing Needs",
    ctaLink: "/services/testing",

    // Define Testing features
    features: [
      {
        icon: <FaUserCheck />,
        title: "Exploratory Testing",
        description:
          "Our skilled testers meticulously explore your application using structured testing approaches combined with experience-based intuition to discover issues that automated tests might miss. We focus on real user scenarios, edge cases, and usability concerns.",
        additionalContent: (
          <FeatureHighlights>
            <li>Scenario-based testing</li>
            <li>User experience evaluation</li>
            <li>Boundary condition analysis</li>
          </FeatureHighlights>
        ),
        image: "/api/placeholder/400/250",
      },
      {
        icon: <FaRegFileCode />,
        title: "UI & Functional Testing",
        description:
          "Detailed validation of user interfaces and functional flows to ensure your application meets design specifications and user requirements. We verify proper functionality across all application features and workflows.",
        additionalContent: (
          <FeatureHighlights>
            <li>Visual element verification</li>
            <li>Cross-browser compatibility</li>
            <li>User workflow validation</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaRobot />,
        title: "Test Automation Framework",
        description:
          "Custom-built test automation frameworks tailored to your specific technology stack and testing requirements. Our frameworks are designed for longevity, maintainability, and optimal test coverage with minimal maintenance overhead.",
        additionalContent: (
          <FeatureHighlights>
            <li>Page object architecture</li>
            <li>Reusable component library</li>
            <li>Custom reporting mechanisms</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaMobileAlt />,
        title: "Mobile App Testing",
        description:
          "Specialized testing for mobile applications across multiple devices, operating systems, and screen sizes. We combine manual device testing with mobile automation to ensure consistent performance in the fragmented mobile ecosystem.",
        additionalContent: (
          <FeatureHighlights>
            <li>Real device testing</li>
            <li>Mobile automation</li>
            <li>User experience validation</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaSync />,
        title: "Regression Testing",
        description:
          "Efficient regression testing strategies that combine targeted manual verification with comprehensive automated test suites to quickly validate application stability after changes and ensure new features don't break existing functionality.",
        additionalContent: (
          <FeatureHighlights>
            <li>Critical path automation</li>
            <li>Change-based testing</li>
            <li>Scheduled regression runs</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaTools />,
        title: "CI/CD Integration",
        description:
          "Seamless integration of automated tests into your continuous integration and delivery pipelines to provide immediate feedback on code quality. Our automation engineers configure optimal testing strategies for each stage of your pipeline.",
        additionalContent: (
          <FeatureHighlights>
            <li>Pipeline optimization</li>
            <li>Parallel test execution</li>
            <li>Failure analysis automation</li>
          </FeatureHighlights>
        ),
      },
    ],

    // Technology stack
    techStack: [
      "Selenium",
      "Cypress",
      "Appium",
      "Playwright",
      "TestNG",
      "JUnit",
      "Jest",
      "Mocha",
      "Robot Framework",
      "Cucumber"
    ],

    // Testimonial
    testimonial: {
      quote:
        "The testing team delivered a perfect blend of manual expertise and automation efficiency. They found critical issues our internal teams missed while building an automation suite that reduced our regression testing time from days to hours. Their work directly contributed to our successful product launch.",
      author: "Jennifer Martinez",
      position: "VP of Engineering, CloudStream Technologies"
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
      <ExpertisePage solution={testingSolution} theme={theme} pageTag="QUALITY ASSURANCE" />
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

export default QAManualTestingPage;