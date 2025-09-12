import React from "react";
import ServicePage from "./ServicePage";
import {
  FaBug,
  FaCheckCircle,
  FaShieldAlt,
  FaFlask,
  FaRobot,
  FaSearch,
} from "react-icons/fa";

export default function QualityAssurancePage() {
  const props = {
    hero: {
      title: "Quality Assurance & Testing",
      subtitle:
        "Deliver flawless digital experiences through automated, manual, and continuous testing practices.",
    },
    intro: {
      title: "Ensuring Reliability and Performance",
      description:
        "Our QA strategy is built into every stage of development. From functional testing to security and performance, we ensure every product meets high standards before launch.",
    },
    focusTitle: "Our QA & Testing Pillars",
    pillars: [
      {
        icon: <FaCheckCircle />,
        title: "Functional Testing",
        description: "Verify features behave as expected across scenarios.",
        color: "#3C8C3C",
      },
      {
        icon: <FaBug />,
        title: "Bug Tracking",
        description: "Log, prioritize, and resolve defects efficiently.",
        color: "#F44336",
      },
      {
        icon: <FaRobot />,
        title: "Automated Testing",
        description: "Speed up validation with scalable automation scripts.",
        color: "#2196F3",
      },
      {
        icon: <FaFlask />,
        title: "Regression Testing",
        description: "Ensure updates don’t break existing functionality.",
        color: "#FF9800",
      },
      {
        icon: <FaShieldAlt />,
        title: "Security Testing",
        description: "Identify vulnerabilities and prevent exploits.",
        color: "#9C27B0",
      },
      {
        icon: <FaSearch />,
        title: "Performance Testing",
        description: "Test under load to maintain responsiveness.",
        color: "#4CAF50",
      },
    ],
    cta: {
      title: "Want to improve your product's quality?",
      buttonText: "Schedule a QA Session",
      buttonHref: "/contact-us",
    },
  };

  return <ServicePage {...props} />;
}
