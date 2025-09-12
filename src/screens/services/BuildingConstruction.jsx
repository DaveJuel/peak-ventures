import React from "react";
import ServicePage from "./ServicePage";
import { FaBuilding } from "react-icons/fa";

export default function BuildingConstructionPage() {
  const props = {
    hero: {
      title: "Building Construction",
      subtitle:
        "Full-scale residential, commercial, and industrial building construction delivered with quality and safety in mind.",
    },
    intro: {
      title: "Our Expertise",
      description:
        "PEAK VENTURES Construction specializes in delivering complete building projects that adhere to the highest standards of quality, safety, and efficiency.",
    },
    focusTitle: "Why Choose Us",
    pillars: [
      {
        icon: <FaBuilding />,
        title: "Quality Construction",
        description: "We ensure durable and reliable buildings that stand the test of time.",
        color: "#4CAF50",
      },
    ],
    cta: {
      title: "Ready to start your building project?",
      buttonText: "Get in Touch",
      buttonHref: "/contact-us",
    },
  };

  return <ServicePage {...props} />;
}
