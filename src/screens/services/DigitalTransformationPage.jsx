import React from "react";
import ServicePage from "./ServicePage";
import { FaArrowRight, FaDesktop, FaMobileAlt, FaSync } from "react-icons/fa";

export default function DigitalTransformationPage() {
  const props = {
    hero: {
      title: "Digital Transformation",
      subtitle:
        "Embrace the future of business with innovative digital solutions that enhance efficiency, agility, and customer experience.",
    },
    intro: {
      title: "Why Digital Transformation Matters",
      description:
        "Digital transformation is the key to staying competitive in today's fast-paced world. We help businesses transition to modern technologies, improve processes, and deliver exceptional digital experiences.",
    },
    focusTitle: "Our Digital Transformation Pillars",
    pillars: [
      {
        icon: <FaArrowRight />,
        title: "Strategic Innovation",
        description: "Driving business growth through the adoption of disruptive technologies.",
        color: "#FF9800",
      },
      {
        icon: <FaDesktop />,
        title: "Digital Experience Design",
        description: "Creating user-centered designs that optimize customer interactions.",
        color: "#2196F3",
      },
      {
        icon: <FaMobileAlt />,
        title: "Mobile Transformation",
        description: "Transforming business capabilities through mobile-first strategies.",
        color: "#4CAF50",
      },
      {
        icon: <FaSync />,
        title: "Process Automation",
        description: "Automating key business processes for operational efficiency.",
        color: "#FF5722",
      },
    ],
    cta: {
      title: "Ready to transform your business?",
      buttonText: "Contact Our Team",
      buttonHref: "/contact-us",
    },
  };

  return <ServicePage {...props} />;
}
