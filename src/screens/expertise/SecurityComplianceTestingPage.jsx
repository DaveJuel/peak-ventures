import React from "react";
import styled from "styled-components";
import {
  FaShieldAlt,
  FaUserSecret,
  FaFingerprint,
  FaKey,
  FaExclamationTriangle,
  FaGavel
} from "react-icons/fa";
import ExpertisePage from "./ExpertisePage";

// Security & Compliance Testing Page
const SecurityComplianceTestingPage = () => {
  const imagePath = process.env.PUBLIC_URL + "/heroimg28.jpg";

  const securitySolution = {
    title: "Security & Compliance Testing",
    acronym: "SCT",
    description:
      "Protect your applications and ensure alignment with industry regulations through rigorous security and compliance testing. We identify vulnerabilities, enforce best practices, and validate adherence to standards like GDPR, HIPAA, ISO, and PCI-DSS.",
    imageSrc: imagePath,
    ctaText: "Secure Your Application",
    ctaLink: "/services/security-testing",

    features: [
      {
        icon: <FaShieldAlt />,
        title: "Vulnerability Assessment",
        description:
          "Systematically scan for and classify security weaknesses across your application stack. Our expert-led assessments provide detailed remediation guidance.",
        additionalContent: (
          <FeatureHighlights>
            <li>OWASP Top 10 coverage</li>
            <li>Static and dynamic analysis</li>
            <li>Risk severity scoring</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaUserSecret />,
        title: "Penetration Testing",
        description:
          "Simulate real-world attacks to identify exploitable flaws in your systems. Our ethical hackers assess how far a breach could go and how to stop it.",
        additionalContent: (
          <FeatureHighlights>
            <li>External and internal pentesting</li>
            <li>API and mobile app security</li>
            <li>Zero-day exploit simulation</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaFingerprint />,
        title: "Identity & Access Management (IAM)",
        description:
          "Ensure strong authentication, authorization, and identity governance. We evaluate role-based access and enforce least privilege principles.",
        additionalContent: (
          <FeatureHighlights>
            <li>SSO and MFA validation</li>
            <li>Role hierarchy testing</li>
            <li>Access policy enforcement</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaKey />,
        title: "Data Protection Validation",
        description:
          "Validate encryption, masking, and secure storage mechanisms to protect sensitive user and organizational data at rest and in transit.",
        additionalContent: (
          <FeatureHighlights>
            <li>TLS/SSL enforcement</li>
            <li>Database and file encryption</li>
            <li>Secrets and credential protection</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaExclamationTriangle />,
        title: "Security Regression Testing",
        description:
          "Ensure new code or configuration changes do not reintroduce past vulnerabilities. Maintain a secure baseline release over time.",
        additionalContent: (
          <FeatureHighlights>
            <li>Automated security scans in CI</li>
            <li>Change-impact assessments</li>
            <li>Baseline deviation detection</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaGavel />,
        title: "Compliance Verification",
        description:
          "Validate technical controls, policies, and reporting against regulatory standards such as GDPR, HIPAA, SOC 2, and PCI-DSS.",
        additionalContent: (
          <FeatureHighlights>
            <li>Policy enforcement checks</li>
            <li>Audit-ready reports</li>
            <li>Control gap analysis</li>
          </FeatureHighlights>
        ),
      },
    ],

    techStack: [
      "OWASP ZAP",
      "Burp Suite",
      "Nessus",
      "Metasploit",
      "Qualys",
      "Nikto",
      "SonarQube",
      "Fortify",
      "Snyk",
      "Arachni"
    ],

    testimonial: {
      quote:
        "The security team helped us pass a critical compliance audit by identifying overlooked vulnerabilities and aligning our systems with GDPR and ISO requirements. Their deep knowledge and practical fixes were invaluable.",
      author: "Jordan Riley",
      position: "Chief Compliance Officer, SecureFleet Ltd."
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
      <ExpertisePage solution={securitySolution} theme={theme} pageTag="QUALITY ASSURANCE" />
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

export default SecurityComplianceTestingPage;
