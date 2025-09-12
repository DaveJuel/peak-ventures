import React from "react";
import ServicePage from "./ServicePage";
import {
  FaLaptopCode,
  FaCubes,
  FaRocket,
  FaShieldAlt,
  FaMobileAlt,
  FaSyncAlt,
} from "react-icons/fa";

export default function WebApplicationsPage() {
  const props = {
    hero: {
      title: "Web Application Engineering",
      subtitle:
        "Modern, scalable, and secure web applications engineered for performance and user impact.",
    },
    intro: {
      title: "Smart Engineering for the Web",
      description:
        "We build robust web applications by blending architecture, security, and usability into every layer of development. Whether you're launching a platform or modernizing a legacy system, our approach ensures stability, scalability, and speed.",
    },
    focusTitle: "Our Engineering Pillars",
    pillars: [
      {
        icon: <FaLaptopCode />,
        title: "Scalable Architecture",
        description: "Design systems that grow with your business.",
        color: "#3C8C3C",
      },
      {
        icon: <FaCubes />,
        title: "Modular Development",
        description: "Component-based coding for reusability and speed.",
        color: "#4CAF50",
      },
      {
        icon: <FaRocket />,
        title: "High Performance",
        description: "Fast load times and optimized code delivery.",
        color: "#2196F3",
      },
      {
        icon: <FaShieldAlt />,
        title: "Security by Design",
        description: "Built-in safeguards for data and infrastructure.",
        color: "#F44336",
      },
      {
        icon: <FaMobileAlt />,
        title: "Responsive UX",
        description: "Seamless experience across all screen sizes.",
        color: "#FF9800",
      },
      {
        icon: <FaSyncAlt />,
        title: "CI/CD Automation",
        description: "Ship updates faster with continuous delivery.",
        color: "#9C27B0",
      },
    ],
    cta: {
      title: "Ready to launch your next web platform?",
      buttonText: "Let's Talk",
      buttonHref: "/contact-us",
    },
  };

  return <ServicePage {...props} />;
}
