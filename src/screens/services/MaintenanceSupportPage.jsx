import React from "react";
import ServicePage from "./ServicePage";
import { FaWrench, FaHeadset, FaHeartbeat, FaSyncAlt } from "react-icons/fa";

export default function MaintenanceSupportPage() {
  const props = {
    hero: {
      title: "Maintenance & Support",
      subtitle:
        "Ensure your web applications stay up-to-date, secure, and running smoothly with proactive maintenance and expert support.",
    },
    intro: {
      title: "Continuous Support for Long-Term Success",
      description:
        "Our maintenance and support services help you keep your web application optimized, addressing issues quickly and adapting to changes in technology or business needs.",
    },
    focusTitle: "Our Maintenance & Support Pillars",
    pillars: [
      {
        icon: <FaWrench />,
        title: "Bug Fixes & Patches",
        description: "Address critical issues and ensure application stability.",
        color: "#FF5722",
      },
      {
        icon: <FaHeadset />,
        title: "24/7 Technical Support",
        description: "Provide around-the-clock support for troubleshooting and assistance.",
        color: "#4CAF50",
      },
      {
        icon: <FaHeartbeat />,
        title: "Health Monitoring",
        description: "Continuously monitor application performance and system health.",
        color: "#9C27B0",
      },
      {
        icon: <FaSyncAlt />,
        title: "Updates & Upgrades",
        description: "Regularly update software and implement new features or improvements.",
        color: "#2196F3",
      },
    ],
    cta: {
      title: "Need ongoing support for your application?",
      buttonText: "Contact Our Support Team",
      buttonHref: "/contact-us",
    },
  };

  return <ServicePage {...props} />;
}
