import React from "react";
import ServicePage from "./ServicePage";
import {
  FaCloud,
  FaServer,
  FaSyncAlt,
  FaShieldAlt,
  FaCogs,
  FaCodeBranch,
} from "react-icons/fa";

export default function CloudDevOpsPage() {
  const props = {
    hero: {
      title: "Cloud & DevOps Engineering",
      subtitle:
        "Deliver faster, safer, and more scalable software through automation, infrastructure-as-code, and modern cloud practices.",
    },
    intro: {
      title: "Modern Infrastructure for Modern Applications",
      description:
        "We build cloud-native systems that support continuous delivery, fault tolerance, and efficient scaling. Our DevOps practices improve team velocity while ensuring security and reliability at every stage.",
    },
    focusTitle: "Our Cloud & DevOps Pillars",
    pillars: [
      {
        icon: <FaCloud />,
        title: "Cloud Architecture",
        description: "Design systems on AWS, Azure, or GCP to scale smart.",
        color: "#3C8C3C",
      },
      {
        icon: <FaSyncAlt />,
        title: "CI/CD Automation",
        description: "Automate builds, tests, and deployments with pipelines.",
        color: "#2196F3",
      },
      {
        icon: <FaServer />,
        title: "Infrastructure as Code",
        description: "Use tools like Terraform and Pulumi for infrastructure.",
        color: "#4CAF50",
      },
      {
        icon: <FaShieldAlt />,
        title: "Security & Monitoring",
        description: "Integrate secure logging, audit trails, and alerts.",
        color: "#F44336",
      },
      {
        icon: <FaCogs />,
        title: "Environment Management",
        description: "Control dev, staging, and production with ease.",
        color: "#FF9800",
      },
      {
        icon: <FaCodeBranch />,
        title: "Scalable Deployments",
        description: "Use containers, serverless, and orchestrators like K8s.",
        color: "#9C27B0",
      },
    ],
    cta: {
      title: "Looking to modernize your cloud infrastructure?",
      buttonText: "Contact Us",
      buttonHref: "/contact-us",
    },
  };

  return <ServicePage {...props} />;
}
