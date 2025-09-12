import React from "react";
import ServicePage from "./ServicePage";
import { FaLightbulb, FaBullseye, FaChartLine, FaCogs, FaUsers, FaLock } from "react-icons/fa";

export default function ProductStrategyPage() {
  const props = {
    hero: {
      title: "Strategic Product Management",
      subtitle:
        "Turn ideas into scalable products with a structured approach to discovery, validation, and execution.",
    },
    intro: {
      title: "Why Product Management Matters",
      description:
        "A successful product begins with a sound strategy. Our approach aligns business goals with user needs to ensure your product is solving the right problems — at the right time.",
    },
    focusTitle: "Our Product Management Pillars",
    pillars: [
      {
        icon: <FaLightbulb />,
        title: "Idea Validation",
        description:
          "Assess product-market fit and define a strategic direction to ensure your idea is viable and market-ready.",
        color: "#FF9800",
      },
      {
        icon: <FaBullseye />,
        title: "Target Market Research",
        description:
          "Identify your core audience and refine positioning to create a product that resonates with the right people.",
        color: "#4CAF50",
      },
      {
        icon: <FaChartLine />,
        title: "Go-to-Market Planning",
        description:
          "Develop a roadmap from MVP to full release, optimizing for early traction and minimizing market risk.",
        color: "#2196F3",
      },
      {
        icon: <FaCogs />,
        title: "Product Development & Iteration",
        description:
          "Implement an agile development process that focuses on continuous feedback and product enhancement.",
        color: "#FFC107",
      },
      {
        icon: <FaUsers />,
        title: "Customer-Centric Design",
        description:
          "Design intuitive, user-friendly products that prioritize customer needs and enhance user experience.",
        color: "#FF5722",
      },
      {
        icon: <FaLock />,
        title: "Security & Compliance",
        description:
          "Ensure your product meets security standards and complies with relevant regulations to protect data and users.",
        color: "#9C27B0",
      },
    ],
    cta: {
      title: "Ready to shape your product's future?",
      buttonText: "Contact Us",
      buttonHref: "/contact-us",
    },
  };

  return <ServicePage {...props} />;
}
