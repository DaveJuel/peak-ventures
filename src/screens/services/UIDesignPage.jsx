import React from "react";
import ServicePage from "./ServicePage";
import {
  FaPalette,
  FaSitemap,
  FaUserCheck,
  FaDrawPolygon,
  FaRegObjectGroup,
  FaAccessibleIcon,
} from "react-icons/fa";

export default function UIDesignPage() {
  const props = {
    hero: {
      title: "UI/UX Design",
      subtitle:
        "Craft seamless digital experiences that balance user needs with product vision.",
    },
    intro: {
      title: "Why UI/UX Matters in Product Design",
      description:
        "UI/UX is more than just visuals. It's about designing thoughtful, intuitive experiences that make your product usable, lovable, and aligned with business goals.",
    },
    focusTitle: "Our UI/UX Design Pillars",
    pillars: [
      {
        icon: <FaUserCheck />,
        title: "User Research",
        description: "Understand behaviors, goals, and pain points.",
        color: "#2196F3",
      },
      {
        icon: <FaSitemap />,
        title: "Information Architecture",
        description: "Structure content for clear and easy flow.",
        color: "#4CAF50",
      },
      {
        icon: <FaDrawPolygon />,
        title: "Interaction Design",
        description: "Design intuitive, meaningful user flows.",
        color: "#FF9800",
      },
      {
        icon: <FaRegObjectGroup />,
        title: "Interface Design",
        description: "Create clean, scalable design systems.",
        color: "#9C27B0",
      },
      {
        icon: <FaPalette />,
        title: "Visual Aesthetics",
        description: "Design with beauty, clarity, and brand alignment.",
        color: "#F44336",
      },
      {
        icon: <FaAccessibleIcon />,
        title: "Accessibility",
        description: "Ensure usability for all audiences.",
        color: "#795548",
      },
    ],
    cta: {
      title: "Let's design a product users love to use.",
      buttonText: "Start Your Project",
      buttonHref: "/contact-us",
    },
  };

  return <ServicePage {...props} />;
}
