import React from "react";
import ServicePage from "./ServicePage";
import {
  FaProjectDiagram,
  FaTasks,
  FaClock,
  FaSync,
  FaComments,
  FaUsers,
} from "react-icons/fa";

export default function AgileProjectManagementPage() {
  const props = {
    hero: {
      title: "Agile Project Management",
      subtitle:
        "Deliver high-impact projects with flexibility, transparency, and continuous improvement.",
    },
    intro: {
      title: "Agile for Reliable Delivery",
      description:
        "We manage projects using Agile frameworks that emphasize collaboration, responsiveness to change, and rapid iteration. Our approach keeps stakeholders aligned and teams focused on value delivery.",
    },
    focusTitle: "Our Agile Delivery Pillars",
    pillars: [
      {
        icon: <FaProjectDiagram />,
        title: "Incremental Planning",
        description: "Define clear goals and adapt plans iteratively.",
        color: "#3C8C3C",
      },
      {
        icon: <FaTasks />,
        title: "Backlog Management",
        description: "Prioritize work based on value and urgency.",
        color: "#2196F3",
      },
      {
        icon: <FaClock />,
        title: "Sprint Execution",
        description: "Deliver focused outcomes within short cycles.",
        color: "#FF9800",
      },
      {
        icon: <FaSync />,
        title: "Continuous Improvement",
        description: "Refine processes through retrospectives.",
        color: "#4CAF50",
      },
      {
        icon: <FaComments />,
        title: "Stakeholder Engagement",
        description: "Maintain transparency and feedback loops.",
        color: "#F44336",
      },
      {
        icon: <FaUsers />,
        title: "Cross-functional Teams",
        description: "Enable collaboration across roles and skills.",
        color: "#9C27B0",
      },
    ],
    cta: {
      title: "Want to accelerate your delivery process?",
      buttonText: "Let's Talk",
      buttonHref: "/contact-us",
    },
  };

  return <ServicePage {...props} />;
}
