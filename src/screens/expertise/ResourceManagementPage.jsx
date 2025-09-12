import React from "react";
import styled from "styled-components";
import {
  FaUsers,
  FaTasks,
  FaRegCalendarCheck,
  FaChartPie,
  FaExchangeAlt,
  FaMoneyCheckAlt,
} from "react-icons/fa";
import ExpertisePage from "./ExpertisePage";

// Project Management – Resource Management Page
const ResourceManagementPage = () => {
  const imagePath = process.env.PUBLIC_URL + "/heroimg21.jpg";

  const resourceSolution = {
    title: "Resource Management",
    acronym: "RM",
    description:
      "Ensure optimal utilization of personnel, skills, and time across projects through dynamic resource planning, allocation, and tracking. Our resource management solutions help you reduce bench time, balance workloads, and align talent with business priorities.",
    imageSrc: imagePath,
    ctaText: "Streamline Resource Utilization",
    ctaLink: "/services/resource-management",

    features: [
      {
        icon: <FaUsers />,
        title: "Capacity Planning",
        description:
          "Forecast resource demand vs. availability across current and upcoming projects to make informed hiring or allocation decisions.",
        additionalContent: (
          <FeatureHighlights>
            <li>Role-based forecasting</li>
            <li>Skill-gap analysis</li>
            <li>Scenario modeling</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaTasks />,
        title: "Allocation & Assignment",
        description:
          "Assign the right resources to the right projects based on availability, skillset, and workload to maximize delivery efficiency.",
        additionalContent: (
          <FeatureHighlights>
            <li>Drag-and-drop assignment tools</li>
            <li>Real-time conflict alerts</li>
            <li>Billable vs. non-billable tracking</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaRegCalendarCheck />,
        title: "Time Tracking & Utilization",
        description:
          "Monitor resource hours, effort spent per task, and overall utilization rates for continuous optimization.",
        additionalContent: (
          <FeatureHighlights>
            <li>Integrated time logging</li>
            <li>Utilization dashboards</li>
            <li>Idle/burnout detection</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaChartPie />,
        title: "Resource Analytics",
        description:
          "Generate insights into workload distribution, under/overutilization, and staffing risks using visual analytics.",
        additionalContent: (
          <FeatureHighlights>
            <li>Heat maps & availability charts</li>
            <li>Attrition risk indicators</li>
            <li>Resource ROI metrics</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaExchangeAlt />,
        title: "Cross-Project Mobility",
        description:
          "Enable seamless transition of resources across teams or projects based on demand spikes or roll-offs.",
        additionalContent: (
          <FeatureHighlights>
            <li>Project rotation workflows</li>
            <li>Knowledge transfer support</li>
            <li>Bench-to-project pipeline</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaMoneyCheckAlt />,
        title: "Cost vs. Value Optimization",
        description:
          "Control project costs through smart resourcing strategies and align talent with high-impact initiatives.",
        additionalContent: (
          <FeatureHighlights>
            <li>Resource cost center mapping</li>
            <li>Profitability-based assignment</li>
            <li>Freelance vs. full-time mix</li>
          </FeatureHighlights>
        ),
      },
    ],

    techStack: [
      "Float",
      "Mavenlink",
      "Smartsheet",
      "Resource Guru",
      "Jira Resource Management",
      "MS Project",
      "ClickUp",
      "Wrike",
      "Hub Planner",
      "Zoho People",
    ],

    testimonial: {
      quote:
        "They helped us cut idle resource hours by 28% while improving team utilization visibility across regions. Planning cycles are now faster and better aligned.",
      author: "Adelina K.",
      position: "PMO Director, Telmaris Technologies",
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
      <ExpertisePage solution={resourceSolution} theme={theme} pageTag="PROJECT MANAGEMENT" />
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

export default ResourceManagementPage;
