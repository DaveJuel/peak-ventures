import React from "react";
import styled from "styled-components";
import {
  FaProjectDiagram,
  FaClock,
  FaCogs,
  FaClipboardList,
  FaUserEdit,
  FaSyncAlt
} from "react-icons/fa";
import ExpertisePage from "./ExpertisePage";

// Project Management – Adaptive Methodologies Page
const AdaptiveMethodologiesPage = () => {
  const imagePath = process.env.PUBLIC_URL + "/heroimg20.jpg";

  const adaptiveSolution = {
    title: "Adaptive Methodologies",
    acronym: "AM",
    description:
      "Adaptive methodologies embrace flexibility and continuous improvement, allowing project teams to adapt to changes in scope, technology, and requirements as the project evolves. We specialize in implementing Agile, Iterative Delivery, and Modern Project Management techniques to deliver projects with speed and precision.",
    imageSrc: imagePath,
    ctaText: "Adapt Your Project Delivery",
    ctaLink: "/services/adaptive-methodologies",

    features: [
      {
        icon: <FaProjectDiagram />,
        title: "Agile Methodology",
        description:
          "Agile is a flexible and collaborative approach to project management, focusing on delivering value through continuous iterations. We guide teams through Agile practices like Scrum and Kanban to maximize efficiency, transparency, and team collaboration.",
        additionalContent: (
          <FeatureHighlights>
            <li>Short, iterative cycles</li>
            <li>Continuous feedback loops</li>
            <li>Cross-functional collaboration</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaClock />,
        title: "Iterative Delivery",
        description:
          "Iterative delivery emphasizes progressive refinement of project outcomes. By delivering components incrementally, teams can adapt based on feedback and new insights, ensuring that the final product better aligns with user needs and expectations.",
        additionalContent: (
          <FeatureHighlights>
            <li>Incremental releases</li>
            <li>Continuous testing and validation</li>
            <li>Early identification of issues</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaCogs />,
        title: "Modern Project Management Techniques",
        description:
          "Incorporating modern techniques like Lean, DevOps, and Continuous Delivery ensures faster delivery and continuous improvement. Our approach integrates these practices into your workflow to optimize efficiency and reduce waste.",
        additionalContent: (
          <FeatureHighlights>
            <li>Lean principles for efficiency</li>
            <li>Continuous delivery and integration</li>
            <li>Automated testing and deployment</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaClipboardList />,
        title: "Scrum & Kanban Frameworks",
        description:
          "Scrum and Kanban are powerful frameworks that facilitate adaptive project management. Scrum focuses on delivering high-value increments through defined roles and ceremonies, while Kanban focuses on continuous flow and visual task management.",
        additionalContent: (
          <FeatureHighlights>
            <li>Daily standups and sprint reviews</li>
            <li>Work-in-progress limits (Kanban)</li>
            <li>Backlog management and prioritization</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaUserEdit />,
        title: "Collaboration & Cross-Functional Teams",
        description:
          "In adaptive methodologies, collaboration is key. We help teams foster communication across departments to break down silos and create high-performing, cross-functional teams capable of delivering projects more effectively.",
        additionalContent: (
          <FeatureHighlights>
            <li>Facilitating team collaboration</li>
            <li>Creating self-organizing teams</li>
            <li>Encouraging knowledge sharing</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaSyncAlt />,
        title: "Continuous Improvement & Retrospectives",
        description:
          "Regular retrospectives and reviews enable teams to reflect on what worked and what didn’t, identifying areas for improvement and optimizing the way they work. This ensures that the team continuously improves its practices and delivers better results over time.",
        additionalContent: (
          <FeatureHighlights>
            <li>Frequent feedback sessions</li>
            <li>Actionable insights for improvement</li>
            <li>Team-driven process enhancement</li>
          </FeatureHighlights>
        ),
      },
    ],

    techStack: [
      "Jira",
      "Trello",
      "Confluence",
      "Slack",
      "GitLab",
      "GitHub",
      "Bitbucket",
      "Azure DevOps",
      "Monday.com",
      "Asana"
    ],

    testimonial: {
      quote:
        "Switching to Agile transformed our project delivery approach. The iterative cycles and constant collaboration kept us aligned with client expectations, and the continuous feedback loop ensured we were always improving.",
      author: "Michael Reeves",
      position: "Project Manager, SynergyTech Solutions"
    },
  };

  const theme = {
    primary: "#3C8C3C",
    dark: "#121212",
    white: "#FFFFFF",
    light: "#F9F9F9",
  };

  return (
    <PageContainer>
      <ExpertisePage solution={adaptiveSolution} theme={theme} pageTag="PROJECT MANAGEMENT" />
    </PageContainer>
  );
};

const PageContainer = styled.div`
  min-height: 100vh;
`;

const FeatureHighlights = styled.ul`
  margin: 0;
  padding-left: 20px;

  li {
    margin-bottom: 8px;
    font-size: 1rem;
    color: #444;
  }
`;

export default AdaptiveMethodologiesPage;
