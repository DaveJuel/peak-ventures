import React from "react";
import styled from "styled-components";
import {
  FaLock,
  FaUserShield,
  FaFingerprint,
  FaKey,
  FaUserSecret,
  FaShieldVirus
} from "react-icons/fa";
import ExpertisePage from "./ExpertisePage";

// Security & Access Control Page
const SecurityAccessControlPage = () => {
  const imagePath = process.env.PUBLIC_URL + "/heroimg21.jpg";

  const securitySolution = {
    title: "Security & Access Control",
    acronym: "SAC",
    description:
      "We help organizations establish airtight security and access policies to safeguard their digital assets. Our layered approach protects your infrastructure, data, and users through robust authentication, fine-grained authorization, endpoint protection, and continuous auditing.",
    imageSrc: imagePath,
    ctaText: "Harden Your Security Posture",
    ctaLink: "/services/security-access",

    features: [
      {
        icon: <FaUserShield />,
        title: "Role-Based Access Control (RBAC)",
        description:
          "Define user access by roles and responsibilities. We implement structured RBAC to ensure users only access the data and systems relevant to their job.",
        additionalContent: (
          <FeatureHighlights>
            <li>Permission modeling</li>
            <li>Group-based policy enforcement</li>
            <li>Segregation of duties (SoD)</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaFingerprint />,
        title: "Multi-Factor Authentication (MFA)",
        description:
          "Enforce identity verification beyond passwords using biometrics, OTPs, and hardware tokens. Our MFA solutions protect against unauthorized access even if credentials are compromised.",
        additionalContent: (
          <FeatureHighlights>
            <li>Time-based OTPs (TOTP)</li>
            <li>Biometric device support</li>
            <li>Authenticator app integration</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaKey />,
        title: "Credential Management",
        description:
          "Securely manage passwords, keys, and secrets across your environment. We implement vaults and rotation policies to prevent credential leaks.",
        additionalContent: (
          <FeatureHighlights>
            <li>Vault integration (e.g., HashiCorp Vault)</li>
            <li>Secret rotation policies</li>
            <li>Audit trail and access logging</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaUserSecret />,
        title: "Privileged Access Management (PAM)",
        description:
          "Control and monitor access to critical systems by privileged users and admins. PAM enforces session control, just-in-time access, and activity auditing.",
        additionalContent: (
          <FeatureHighlights>
            <li>Time-bound admin access</li>
            <li>Session recording and playback</li>
            <li>Policy-based access elevation</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaShieldVirus />,
        title: "Endpoint & Perimeter Security",
        description:
          "Deploy antivirus, anti-malware, and endpoint protection platforms (EPP/EDR) to prevent intrusions and data breaches.",
        additionalContent: (
          <FeatureHighlights>
            <li>Device hardening</li>
            <li>Zero Trust access models</li>
            <li>Behavior-based threat detection</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaLock />,
        title: "Security Audits & Compliance",
        description:
          "Conduct periodic reviews and security assessments to ensure compliance with standards like ISO 27001, GDPR, HIPAA, and SOC 2.",
        additionalContent: (
          <FeatureHighlights>
            <li>Access control policy reviews</li>
            <li>Security posture assessments</li>
            <li>Compliance reporting</li>
          </FeatureHighlights>
        ),
      },
    ],

    techStack: [
      "Okta",
      "Azure AD",
      "Keycloak",
      "HashiCorp Vault",
      "Duo Security",
      "CrowdStrike",
      "Bitdefender",
      "Tailscale",
      "AWS IAM",
      "GCP Identity"
    ],

    testimonial: {
      quote:
        "With their help, we transitioned to a Zero Trust model, implemented MFA, and eliminated shared credentials across the board. We passed our SOC 2 audit with zero findings—something we hadn’t achieved in three years.",
      author: "Daniel Ayers",
      position: "CISO, FinaLogic Inc."
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
      <ExpertisePage solution={securitySolution} theme={theme} pageTag="SYSTEM ADMINISTRATION" />
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

export default SecurityAccessControlPage;
