import React from "react";
import ServicePage from "./ServicePage";
import {
  FaDraftingCompass,
  FaFlask,
  FaUserFriends,
  FaCogs,
  FaBug,
  FaRedo,
} from "react-icons/fa";

export default function PrototypingTestingPage() {
  const props = {
    hero: {
      title: "Prototyping & Testing",
      subtitle:
        "Validate your product ideas early through rapid prototyping and continuous user testing.",
    },
    intro: {
      title: "Why Prototyping & Testing Matter",
      description:
        "Building the right product starts with testing the right assumptions. Our iterative approach helps reduce risk and sharpen product-market fit.",
    },
    focusTitle: "Our Prototyping & Testing Pillars",
    pillars: [
      {
        icon: <FaDraftingCompass />,
        title: "Low-Fidelity Prototypes",
        description: "Sketch early ideas to explore possibilities.",
        color: "#9C27B0",
      },
      {
        icon: <FaCogs />,
        title: "High-Fidelity Prototypes",
        description: "Simulate real product interactions in detail.",
        color: "#2196F3",
      },
      {
        icon: <FaUserFriends />,
        title: "User Testing",
        description: "Observe real users to uncover usability issues.",
        color: "#4CAF50",
      },
      {
        icon: <FaBug />,
        title: "Feedback Loops",
        description: "Quickly capture and act on insights.",
        color: "#FF9800",
      },
      {
        icon: <FaFlask />,
        title: "A/B Testing",
        description: "Compare options with live user data.",
        color: "#F44336",
      },
      {
        icon: <FaRedo />,
        title: "Iteration",
        description: "Refine designs based on test outcomes.",
        color: "#795548",
      },
    ],
    cta: {
      title: "Let’s validate before you build.",
      buttonText: "Talk to Us",
      buttonHref: "/contact-us",
    },
  };

  return <ServicePage {...props} />;
}
