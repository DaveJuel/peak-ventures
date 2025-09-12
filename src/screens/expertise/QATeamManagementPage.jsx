import React from "react";
import styled from "styled-components";
import {
  FaUsersCog,
  FaProjectDiagram,
  FaClipboardCheck,
  FaChartLine,
  FaRegClock,
  FaChalkboardTeacher
} from "react-icons/fa";
import ExpertisePage from "./ExpertisePage";

// QA Team & Process Management Page
const QATeamManagementPage = () => {
  const imagePath = process.env.PUBLIC_URL + "/heroimg20.jpg";

  const teamSolution = {
    title: "QA Team & Process Management",
    acronym: "QTPM",
    description:
      "Build and scale quality assurance teams with defined processes, tools, and leadership for consistent product excellence. We help establish agile testing frameworks, workflows, and performance KPIs to ensure efficiency, accountability, and rapid delivery.",
    imageSrc: imagePath,
    ctaText: "Optimize Your QA Organization",
    ctaLink: "/services/qa-team-management",

    features: [
      {
        icon: <FaUsersCog />,
        title: "QA Team Structuring",
        description:
          "Design effective QA team models—dedicated, embedded, or hybrid—to align with your development cycle and product goals.",
        additionalContent: (
          <FeatureHighlights>
            <li>In-house and remote team balance</li>
            <li>Role-based distribution (SDET, Analyst, Lead)</li>
            <li>Agile-ready testers</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaProjectDiagram />,
        title: "Process Definition & SOPs",
        description:
          "Create and standardize test plans, workflows, and documentation to support consistent and repeatable QA processes.",
        additionalContent: (
          <FeatureHighlights>
            <li>Test plan and case management</li>
            <li>Defect lifecycle protocols</li>
            <li>Sprint-aligned QA checklists</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaClipboardCheck />,
        title: "Test Governance & Metrics",
        description:
          "Establish test quality metrics, coverage benchmarks, and accountability standards for better visibility and improvement.",
        additionalContent: (
          <FeatureHighlights>
            <li>Defect leakage rate</li>
            <li>Test coverage reports</li>
            <li>Release readiness scorecards</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaChartLine />,
        title: "Continuous Improvement Programs",
        description:
          "Implement retrospective-led improvements, QA audits, and performance reviews to mature the testing process over time.",
        additionalContent: (
          <FeatureHighlights>
            <li>Quarterly process evaluations</li>
            <li>Test strategy pivots</li>
            <li>Root cause analysis reviews</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaRegClock />,
        title: "QA in Agile & DevOps",
        description:
          "Align QA activities with Agile ceremonies, CI/CD pipelines, and sprint milestones to support faster delivery cycles.",
        additionalContent: (
          <FeatureHighlights>
            <li>Shift-left test planning</li>
            <li>Automation-first strategies</li>
            <li>Scrum/SAFe/LeSS compatibility</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaChalkboardTeacher />,
        title: "Training & Leadership Development",
        description:
          "Upskill QA teams through workshops, mentoring, and certification programs to build self-sustaining quality cultures.",
        additionalContent: (
          <FeatureHighlights>
            <li>ISTQB, Selenium, JMeter coaching</li>
            <li>Mentorship paths</li>
            <li>Knowledge-sharing practices</li>
          </FeatureHighlights>
        ),
      },
    ],

    techStack: [
      "Jira",
      "TestRail",
      "Zephyr",
      "Confluence",
      "Slack",
      "Azure DevOps",
      "Xray",
      "Qase",
      "Trello",
      "Google Workspace"
    ],

    testimonial: {
      quote:
        "Their QA leadership helped us organize a fragmented testing team into a focused, metrics-driven unit. Defects dropped by 40% within the first quarter of implementation.",
      author: "Richard Mensah",
      position: "Director of Engineering, Qensoft"
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
      <ExpertisePage solution={teamSolution} theme={theme} pageTag="QUALITY ASSURANCE" />
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

export default QATeamManagementPage;
