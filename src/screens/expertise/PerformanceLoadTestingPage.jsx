import React from "react";
import styled from "styled-components";
import {
  FaRocket,
  FaBalanceScale,
  FaThermometerHalf,
  FaDatabase,
  FaBug,
  FaProjectDiagram
} from "react-icons/fa";
import ExpertisePage from "./ExpertisePage";

// Performance & Load Testing Page
const PerformanceLoadTestingPage = () => {
  const imagePath = process.env.PUBLIC_URL + "/heroimg21.jpg";

  const performanceSolution = {
    title: "Performance & Load Testing",
    acronym: "PLT",
    description:
      "Ensure your systems can handle high demand, deliver consistently fast user experiences, and scale reliably. We simulate real-world user behavior and stress conditions to uncover performance bottlenecks before they impact your users.",
    imageSrc: imagePath,
    ctaText: "Validate Performance Readiness",
    ctaLink: "/services/performance-testing",

    features: [
      {
        icon: <FaRocket />,
        title: "Load & Stress Testing",
        description:
          "Measure how your application behaves under normal and extreme traffic loads. Identify breakpoints, degradation patterns, and system limits.",
        additionalContent: (
          <FeatureHighlights>
            <li>Concurrent user simulation</li>
            <li>Spike and soak testing</li>
            <li>Infrastructure stress points</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaBalanceScale />,
        title: "Scalability Testing",
        description:
          "Evaluate your application's ability to scale gracefully with increased demand. We assess horizontal and vertical scaling strategies.",
        additionalContent: (
          <FeatureHighlights>
            <li>Cloud autoscaling validation</li>
            <li>Database and API elasticity</li>
            <li>Horizontal vs vertical scaling analysis</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaThermometerHalf />,
        title: "Performance Benchmarking",
        description:
          "Set performance standards and evaluate systems against baseline metrics. Track changes across builds and deployments.",
        additionalContent: (
          <FeatureHighlights>
            <li>Latency and throughput tracking</li>
            <li>Transaction response metrics</li>
            <li>Baseline comparison reports</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaDatabase />,
        title: "Database Performance Testing",
        description:
          "Simulate complex queries, transactional loads, and concurrent operations to assess your database under realistic conditions.",
        additionalContent: (
          <FeatureHighlights>
            <li>Connection pooling stress tests</li>
            <li>Query execution time analysis</li>
            <li>Indexing and optimization review</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaBug />,
        title: "Bottleneck Identification",
        description:
          "Uncover hidden bottlenecks in code, infrastructure, or configuration. We provide actionable insights to improve system throughput and reliability.",
        additionalContent: (
          <FeatureHighlights>
            <li>Code-level profiling</li>
            <li>Memory and thread diagnostics</li>
            <li>Infrastructure trace analysis</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaProjectDiagram />,
        title: "CI/CD Performance Integration",
        description:
          "Integrate performance testing into your CI/CD pipelines to detect degradations early and release confidently.",
        additionalContent: (
          <FeatureHighlights>
            <li>Automated performance gates</li>
            <li>Build-to-build comparisons</li>
            <li>Load testing as a deployment prerequisite</li>
          </FeatureHighlights>
        ),
      },
    ],

    techStack: [
      "JMeter",
      "Gatling",
      "k6",
      "Locust",
      "BlazeMeter",
      "LoadRunner",
      "Artillery",
      "Neoload",
      "Apache Bench",
      "Cloud-based testing tools (e.g., AWS CloudWatch, Azure Load Testing)"
    ],

    testimonial: {
      quote:
        "Their performance testing revealed critical bottlenecks that would have gone unnoticed. After tuning based on their insights, our app handled 3x the traffic with half the response time.",
      author: "Melissa Chai",
      position: "Lead QA Engineer, ScaleUp Solutions"
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
      <ExpertisePage solution={performanceSolution} theme={theme} pageTag="QUALITY ASSURANCE" />
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

export default PerformanceLoadTestingPage;
