import React from "react";
import styled from "styled-components";
import {
  FaServer,
  FaNetworkWired,
  FaCloudUploadAlt,
  FaLock,
  FaDocker,
  FaTerminal
} from "react-icons/fa";
import ExpertisePage from "./ExpertisePage";

const InfrastructureProvisioningPage = () => {
  const imagePath = process.env.PUBLIC_URL + "/heroimg21.jpg";

  const systemAdminSolution = {
    title: "Infrastructure Provisioning",
    acronym: "IP",
    description:
      "We specialize in robust infrastructure provisioning and system administration, ensuring high availability, security, and performance. Our services streamline deployment workflows, enforce infrastructure as code, and manage complex server environments—on-premise or in the cloud.",
    imageSrc: imagePath,
    ctaText: "Optimize Your Infrastructure",
    ctaLink: "/services/system-admin",

    features: [
      {
        icon: <FaCloudUploadAlt />,
        title: "Infrastructure as Code (IaC)",
        description:
          "Provision and manage infrastructure using modern declarative tools to ensure repeatability, scalability, and version control. Our team helps you build and maintain reliable infrastructure pipelines.",
        additionalContent: (
          <FeatureHighlights>
            <li>Terraform & Pulumi configurations</li>
            <li>CloudFormation & ARM templates</li>
            <li>Version-controlled deployments</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaServer />,
        title: "Server & OS Management",
        description:
          "Complete lifecycle management for Linux and Windows servers. We handle installation, hardening, monitoring, and updates, ensuring optimal server health and compliance.",
        additionalContent: (
          <FeatureHighlights>
            <li>Patch management</li>
            <li>Configuration automation</li>
            <li>Resource monitoring</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaNetworkWired />,
        title: "Network Configuration",
        description:
          "Design and implement secure, scalable network architectures including firewall policies, VPNs, subnets, and routing. We ensure robust internal and external connectivity.",
        additionalContent: (
          <FeatureHighlights>
            <li>VPC and subnet design</li>
            <li>Security group policies</li>
            <li>DNS, DHCP, and routing</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaDocker />,
        title: "Container Orchestration",
        description:
          "Deploy and manage scalable containerized applications using Docker and Kubernetes. We implement orchestration best practices for availability and fault tolerance.",
        additionalContent: (
          <FeatureHighlights>
            <li>Kubernetes cluster setup</li>
            <li>Helm chart management</li>
            <li>Autoscaling and load balancing</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaLock />,
        title: "Security & Access Control",
        description:
          "Implement industry-standard security practices across your infrastructure. We manage roles, permissions, encryption, and intrusion prevention strategies.",
        additionalContent: (
          <FeatureHighlights>
            <li>IAM role governance</li>
            <li>Audit logging & monitoring</li>
            <li>TLS/SSL & secrets management</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaTerminal />,
        title: "Scripting & Automation",
        description:
          "Automate repetitive sysadmin tasks with custom scripts and job schedulers. We streamline operations and improve reliability through automation.",
        additionalContent: (
          <FeatureHighlights>
            <li>Bash, PowerShell, Python scripting</li>
            <li>CRON & systemd automation</li>
            <li>Infrastructure auditing scripts</li>
          </FeatureHighlights>
        ),
      },
    ],

    techStack: [
      "Terraform",
      "Ansible",
      "Docker",
      "Kubernetes",
      "AWS/GCP/Azure",
      "Bash",
      "Linux",
      "Prometheus",
      "Grafana",
      "Vault"
    ],

    testimonial: {
      quote:
        "Their system administration and infrastructure provisioning transformed our operations. With automated deployments and secure, scalable environments, we cut down our provisioning time from days to under an hour.",
      author: "Ravi Shah",
      position: "Infrastructure Lead, NexusWare Solutions"
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
      <ExpertisePage solution={systemAdminSolution} theme={theme} pageTag="SYSTEM ADMINISTRATION" />
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

export default InfrastructureProvisioningPage;
