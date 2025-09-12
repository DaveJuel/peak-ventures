import React from "react";
import ServicePage from "./ServicePage";
import { FaShieldAlt, FaLock, FaSearch, FaExclamationTriangle } from "react-icons/fa";

export default function SecurityAuditPage() {
  const props = {
    hero: {
      title: "Security Audits",
      subtitle:
        "Ensure the integrity of your systems with comprehensive security audits that identify vulnerabilities and safeguard your business from threats.",
    },
    intro: {
      title: "Why Security Audits Matter",
      description:
        "Security is the backbone of any digital infrastructure. Our security audits help you identify potential risks, address vulnerabilities, and ensure compliance with industry standards to protect your assets and data.",
    },
    focusTitle: "Our Security Audit Pillars",
    pillars: [
      {
        icon: <FaShieldAlt />,
        title: "Risk Assessment",
        description: "Identifying and assessing potential security risks across your systems.",
        color: "#FF9800",
      },
      {
        icon: <FaLock />,
        title: "Vulnerability Testing",
        description: "Testing for weaknesses and vulnerabilities to prevent unauthorized access.",
        color: "#4CAF50",
      },
      {
        icon: <FaSearch />,
        title: "Compliance Check",
        description: "Ensuring your system complies with the latest security regulations and standards.",
        color: "#2196F3",
      },
      {
        icon: <FaExclamationTriangle />,
        title: "Incident Response",
        description: "Developing a plan for rapid detection and response to security incidents.",
        color: "#F44336",
      },
    ],
    cta: {
      title: "Ready to secure your systems?",
      buttonText: "Contact Our Experts",
      buttonHref: "/contact-us",
    },
  };

  return <ServicePage {...props} />;
}
