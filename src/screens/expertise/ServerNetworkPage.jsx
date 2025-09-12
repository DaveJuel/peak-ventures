import React from "react";
import styled from "styled-components";
import {
  FaServer,
  FaNetworkWired,
  FaShieldAlt,
  FaSatelliteDish,
  FaTools,
  FaChartLine
} from "react-icons/fa";
import ExpertisePage from "./ExpertisePage";

// Server & Network Management Page
const ServerNetworkPage = () => {
  const imagePath = process.env.PUBLIC_URL + "/heroimg21.jpg";

  const serverNetworkSolution = {
    title: "Server & Network Management",
    acronym: "SNM",
    description:
      "Our Server and Network Management services ensure the seamless operation of your IT backbone. We handle everything from server provisioning and health monitoring to network performance optimization, allowing your infrastructure to run securely and efficiently 24/7.",
    imageSrc: imagePath,
    ctaText: "Boost Your Infrastructure Reliability",
    ctaLink: "/services/server-network",

    features: [
      {
        icon: <FaServer />,
        title: "Server Provisioning & Maintenance",
        description:
          "Deploy and maintain high-performance servers for any workload—on-premises or in the cloud. We handle OS installation, patching, performance tuning, and hardware integration.",
        additionalContent: (
          <FeatureHighlights>
            <li>Linux & Windows server setup</li>
            <li>Resource and service monitoring</li>
            <li>Automated patch management</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaNetworkWired />,
        title: "Network Topology Design",
        description:
          "Build structured, scalable, and resilient networks. Our architects design layered topologies for high availability, segmentation, and ease of maintenance.",
        additionalContent: (
          <FeatureHighlights>
            <li>Layer 2/3 switching & VLANs</li>
            <li>Redundant and failover paths</li>
            <li>Traffic segmentation & QoS</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaShieldAlt />,
        title: "Firewall & Security Configuration",
        description:
          "Secure network perimeters with advanced firewall setups, VPNs, and intrusion detection systems. We protect your infrastructure from unauthorized access and cyber threats.",
        additionalContent: (
          <FeatureHighlights>
            <li>Port filtering & NAT rules</li>
            <li>Site-to-site & remote VPNs</li>
            <li>IDS/IPS integration</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaSatelliteDish />,
        title: "Connectivity & Remote Access",
        description:
          "Ensure fast, reliable, and secure access to internal resources. We optimize connectivity for remote teams, branches, and mobile devices.",
        additionalContent: (
          <FeatureHighlights>
            <li>Remote Desktop & SSH gateways</li>
            <li>Load-balanced access</li>
            <li>Bandwidth throttling & shaping</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaChartLine />,
        title: "Performance Monitoring & Alerts",
        description:
          "Continuously monitor server and network health with proactive alerts and analytics. We help you resolve issues before they impact users.",
        additionalContent: (
          <FeatureHighlights>
            <li>Real-time metrics dashboards</li>
            <li>Threshold-based alerting</li>
            <li>Uptime and SLA reporting</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaTools />,
        title: "Configuration Management",
        description:
          "Ensure consistency across systems using automated configuration management tools. We reduce manual errors and enforce compliance at scale.",
        additionalContent: (
          <FeatureHighlights>
            <li>Ansible, Puppet, Chef automation</li>
            <li>System state enforcement</li>
            <li>Change tracking and rollback</li>
          </FeatureHighlights>
        ),
      },
    ],

    techStack: [
      "Nagios",
      "Zabbix",
      "Prometheus",
      "Ansible",
      "Puppet",
      "Cisco IOS",
      "pfSense",
      "OpenVPN",
      "Windows Server",
      "Ubuntu Server"
    ],

    testimonial: {
      quote:
        "Their server and network management services allowed us to scale without disruption. We now enjoy uninterrupted uptime and detailed visibility across our infrastructure—something we lacked for years.",
      author: "Karla Simmons",
      position: "Director of IT Operations, BlueOak Logistics"
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
      <ExpertisePage solution={serverNetworkSolution} theme={theme} pageTag="SYSTEM ADMINISTRATION" />
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

export default ServerNetworkPage;
