import React from "react";
import ServicePage from "./ServicePage";
import {
  FaMobileAlt,
  FaCogs,
  FaCloudUploadAlt,
  FaBolt,
  FaPalette,
  FaBug,
} from "react-icons/fa";

export default function MobileApplicationsPage() {
  const props = {
    hero: {
      title: "Mobile Application Engineering",
      subtitle:
        "Custom mobile apps that are performant, native-like, and built to scale across devices and ecosystems.",
    },
    intro: {
      title: "Building Impactful Mobile Experiences",
      description:
        "From concept to launch, we engineer mobile applications with clean architecture, responsive interfaces, and modern deployment strategies. Whether Android, iOS, or cross-platform, our solutions are designed for usability and long-term growth.",
    },
    focusTitle: "Our Mobile Engineering Pillars",
    pillars: [
      {
        icon: <FaMobileAlt />,
        title: "Native & Cross-Platform",
        description: "React Native, Swift, Kotlin — built to fit your goals.",
        color: "#3C8C3C",
      },
      {
        icon: <FaCogs />,
        title: "Robust Backend Integration",
        description: "Sync apps with secure, scalable backend services.",
        color: "#4CAF50",
      },
      {
        icon: <FaCloudUploadAlt />,
        title: "Cloud Deployment",
        description: "Automated builds and rollouts via app stores or OTA.",
        color: "#2196F3",
      },
      {
        icon: <FaBolt />,
        title: "Optimized Performance",
        description: "Fast, smooth interfaces with minimal lag.",
        color: "#FF9800",
      },
      {
        icon: <FaPalette />,
        title: "User-Centered Design",
        description: "Intuitive interfaces for great mobile experiences.",
        color: "#9C27B0",
      },
      {
        icon: <FaBug />,
        title: "Testing & QA",
        description: "Automated and manual testing for every release.",
        color: "#F44336",
      },
    ],
    cta: {
      title: "Looking to launch your next mobile app?",
      buttonText: "Contact Us",
      buttonHref: "/contact-us",
    },
  };

  return <ServicePage {...props} />;
}
