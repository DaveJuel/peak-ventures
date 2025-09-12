import React from "react";
import styled from "styled-components";
import {
  FaExclamationTriangle,
  FaClipboardCheck,
  FaCogs,
  FaChartLine,
  FaShieldAlt,
  FaBell
} from "react-icons/fa";
import ExpertisePage from "./ExpertisePage";

// Project Management – Risk, Quality & Monitoring Page
const RiskQualityMonitoringPage = () => {
  const imagePath = process.env.PUBLIC_URL + "/heroimg20.jpg";

  const riskSolution = {
    title: "Risk, Quality & Monitoring",
    acronym: "RQM",
    description:
      "Our integrated approach to risk management, quality assurance, and project monitoring ensures that potential issues are identified early and mitigated, while ensuring that all deliverables meet the highest standards of quality. We focus on continuous monitoring, proactive management, and maintaining project alignment.",
    imageSrc: imagePath,
    ctaText: "Ensure Project Success",
    ctaLink: "/services/risk-quality-monitoring",

    features: [
      {
        icon: <FaExclamationTriangle />,
        title: "Risk Identification & Assessment",
        description:
          "Proactively identify and assess potential risks in every phase of the project lifecycle to prevent delays and unexpected challenges.",
        additionalContent: (
          <FeatureHighlights>
            <li>Risk heat maps</li>
            <li>Qualitative & quantitative analysis</li>
            <li>Stakeholder engagement in risk management</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaClipboardCheck />,
        title: "Quality Assurance & Compliance",
        description:
          "Maintain project quality through rigorous QA processes and ensure compliance with standards, regulations, and client requirements.",
        additionalContent: (
          <FeatureHighlights>
            <li>Process quality audits</li>
            <li>Standard operating procedure (SOP) development</li>
            <li>Compliance tracking</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaCogs />,
        title: "Process Optimization & Continuous Improvement",
        description:
          "Constantly refine and optimize project processes to improve performance, reduce waste, and increase efficiency.",
        additionalContent: (
          <FeatureHighlights>
            <li>Root cause analysis</li>
            <li>Process reengineering</li>
            <li>Lean and Six Sigma methodologies</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaChartLine />,
        title: "Performance Monitoring & Reporting",
        description:
          "Monitor project performance metrics in real-time, ensuring projects stay on track, on time, and within budget with regular reporting.",
        additionalContent: (
          <FeatureHighlights>
            <li>KPIs and performance dashboards</li>
            <li>Real-time project tracking</li>
            <li>Forecasting & trend analysis</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaShieldAlt />,
        title: "Risk Mitigation & Contingency Planning",
        description:
          "Develop risk mitigation strategies and contingency plans to ensure swift responses and recovery from potential issues.",
        additionalContent: (
          <FeatureHighlights>
            <li>Risk response strategies</li>
            <li>Contingency planning</li>
            <li>Business continuity plans</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaBell />,
        title: "Incident Management & Alerts",
        description:
          "Set up automated incident tracking systems and alerts to immediately address any issues that could threaten project success.",
        additionalContent: (
          <FeatureHighlights>
            <li>Automated incident alerts</li>
            <li>Root-cause investigation</li>
            <li>Resolution tracking</li>
          </FeatureHighlights>
        ),
      },
    ],

    techStack: [
      "Risk Register Tools",
      "Jira Risk Management",
      "Quality Center (QC)",
      "TestRail",
      "Power BI",
      "Tableau",
      "Smartsheet",
      "Minitab",
      "Monday.com",
      "Asana"
    ],

    testimonial: {
      quote:
        "By integrating risk management and performance monitoring into our projects, we reduced project delays by 22% and improved on-time delivery by 18%. Their continuous monitoring process was a game-changer.",
      author: "Lucas T.",
      position: "Program Manager, TechSphere Solutions"
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
      <ExpertisePage solution={riskSolution} theme={theme} pageTag="PROJECT MANAGEMENT" />
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

export default RiskQualityMonitoringPage;
