import React from "react";
import styled from "styled-components";
import {
  FaChartLine,
  FaTachometerAlt,
  FaBell,
  FaTools,
  FaServer,
  FaLaptopCode
} from "react-icons/fa";
import ExpertisePage from "./ExpertisePage";

// Monitoring & Performance Tuning Page
const MonitoringPerformancePage = () => {
  const imagePath = process.env.PUBLIC_URL + "/heroimg21.jpg";

  const monitoringSolution = {
    title: "Monitoring & Performance Tuning",
    acronym: "MPT",
    description:
      "Maintain optimal system health, detect issues proactively, and fine-tune performance across infrastructure and applications. Our services ensure visibility, reliability, and responsiveness for mission-critical environments.",
    imageSrc: imagePath,
    ctaText: "Enhance System Visibility",
    ctaLink: "/services/monitoring-performance",

    features: [
      {
        icon: <FaChartLine />,
        title: "Real-Time System Monitoring",
        description:
          "Continuously monitor system health, uptime, and resource consumption across servers, containers, databases, and cloud environments.",
        additionalContent: (
          <FeatureHighlights>
            <li>CPU, memory, disk, network metrics</li>
            <li>Process-level visibility</li>
            <li>Customizable dashboards</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaBell />,
        title: "Alerting & Incident Response",
        description:
          "Define alert thresholds and automate escalation paths for proactive incident detection and faster resolution times.",
        additionalContent: (
          <FeatureHighlights>
            <li>Threshold-based alerts</li>
            <li>On-call rotation integration</li>
            <li>Multi-channel notifications</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaTachometerAlt />,
        title: "Application Performance Tuning",
        description:
          "Identify performance bottlenecks and optimize application behavior under load, ensuring seamless user experiences.",
        additionalContent: (
          <FeatureHighlights>
            <li>Latency and throughput analysis</li>
            <li>Database query optimization</li>
            <li>Code-level instrumentation</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaTools />,
        title: "Infrastructure Optimization",
        description:
          "Fine-tune server, VM, and container configurations for optimal resource utilization and cost-effective scalability.",
        additionalContent: (
          <FeatureHighlights>
            <li>Resource right-sizing</li>
            <li>Auto-scaling recommendations</li>
            <li>Container orchestration tuning</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaLaptopCode />,
        title: "Log Aggregation & Analysis",
        description:
          "Centralize logs from all infrastructure and apps for unified search, error tracking, and forensic analysis.",
        additionalContent: (
          <FeatureHighlights>
            <li>Structured log parsing</li>
            <li>Error pattern identification</li>
            <li>Retention and compliance policies</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaServer />,
        title: "Synthetic & User Monitoring",
        description:
          "Simulate user flows and monitor actual user sessions to measure availability, usability, and performance metrics in real-world conditions.",
        additionalContent: (
          <FeatureHighlights>
            <li>Synthetic transaction monitoring</li>
            <li>Real User Monitoring (RUM)</li>
            <li>Geolocation-based metrics</li>
          </FeatureHighlights>
        ),
      },
    ],

    techStack: [
      "Prometheus",
      "Grafana",
      "Datadog",
      "New Relic",
      "Nagios",
      "Zabbix",
      "Elastic Stack (ELK)",
      "AppDynamics",
      "Splunk",
      "CloudWatch"
    ],

    testimonial: {
      quote:
        "Our systems used to suffer from undetected slowdowns. With their monitoring and tuning expertise, we've gained full visibility and reduced performance-related incidents by over 70%.",
      author: "Derrick Osei",
      position: "Head of IT Operations, FinEdge Ltd"
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
      <ExpertisePage solution={monitoringSolution} theme={theme} pageTag="SYSTEM ADMINISTRATION" />
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

export default MonitoringPerformancePage;
