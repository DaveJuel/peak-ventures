import React from "react";
import DedicatedTeam from "./DedicatedTeam";
import { FaChartLine, FaCode, FaCogs, FaSearchPlus } from "react-icons/fa";

export default function TeamPage() {
  const teamData = {
    intro:
      "Knack Fusion is powered by a team of dedicated professionals who work together to deliver cutting-edge solutions.",
    count: 40,
    roles: [
      {
        icon: <FaCode />,
        title: "Software Engineers",
        description:
          "Experts in developing scalable and robust digital solutions.",
      },
      {
        icon: <FaChartLine />,
        title: "Product Managers",
        description:
          "Strategists who ensure that our solutions meet market demands.",
      },
      {
        icon: <FaSearchPlus />,
        title: "Quality Assurance Engineers",
        description:
          "Specialists who uphold the highest software reliability standards.",
      },
      {
        icon: <FaCogs />,
        title: "DevOps Engineers",
        description:
          "Professionals who streamline development and deployment processes for optimal performance.",
      },
    ],
    outro:
      "Our multidisciplinary team collaborates to deliver cutting-edge solutions that drive digital transformation.",
  };

  return (
    <DedicatedTeam
      hero={{
        title: "Our Dedicated Team",
        subtitle: [
          "We are committed to providing exceptional software solutions that enhance operational efficiency and foster growth.",
          "Gain immediate access to a multidisciplinary team that aligns with your vision, goals, and execution roadmap.",
        ],
      }}
      values={[
        {
          title: "Aligned With Your Product Vision",
          description:
            "Our team integrates seamlessly with your roadmap, ensuring clarity and alignment from day one.",
        },
        {
          title: "Transparent & Agile",
          description:
            "We follow adaptive delivery processes and provide full visibility through tools and check-ins.",
        },
        {
          title: "Outcome-Driven Mindset",
          description:
            "We focus on results—not just deliverables—measuring success by the impact we create.",
        },
      ]}
      skills={[
        "Frontend (React, Vue, Next.js)",
        "Backend (Node.js, Python, PHP, Java)",
        "DevOps (CI/CD, Docker, Kubernetes)",
        "Mobile (Flutter, React Native)",
        "QA Automation",
        "UX/UI Design",
        "Project Management",
        "Business Analysis",
        "..."
      ]}
      roles={teamData}
      cta={{
        title: "Need a skilled team that delivers?",
        button: "Book a Free Consultation",
        link: "/contact-us",
      }}
    />
  );
}
