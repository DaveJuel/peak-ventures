import React from "react";
import ServicePage from "./ServicePage";
import { FaBuilding, FaLightbulb, FaCogs, FaCloud } from "react-icons/fa";

export default function ArchitectureConsultingPage() {
  const props = {
    hero: {
      title: "Architecture Consulting",
      subtitle:
        "Gain expert technical advisory to build scalable, reliable, and efficient system architectures tailored to your business needs.",
    },
    intro: {
      title: "Why Architecture Consulting Matters",
      description:
        "With the right architecture, your application is poised for long-term success. Our consulting services help you design robust systems, optimize performance, and ensure scalability while meeting business objectives.",
    },
    focusTitle: "Our Architecture Consulting Pillars",
    pillars: [
      {
        icon: <FaBuilding />,
        title: "System Design & Optimization",
        description: "Craft scalable and resilient architectures tailored to your needs.",
        color: "#FF5722",
      },
      {
        icon: <FaLightbulb />,
        title: "Innovative Solutions",
        description: "Bring cutting-edge technologies and solutions to the table.",
        color: "#FFC107",
      },
      {
        icon: <FaCogs />,
        title: "Operational Excellence",
        description: "Optimize operational workflows for better performance and reliability.",
        color: "#4CAF50",
      },
      {
        icon: <FaCloud />,
        title: "Cloud Strategy & Migration",
        description: "Enable seamless cloud adoption and migration strategies for scalability.",
        color: "#2196F3",
      },
    ],
    cta: {
      title: "Ready to optimize your system architecture?",
      buttonText: "Contact Our Experts",
      buttonHref: "/contact-us",
    },
  };

  return <ServicePage {...props} />;
}
