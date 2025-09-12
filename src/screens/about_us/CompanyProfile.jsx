import React from "react";
import AboutUs from "./AboutUs";

export default function AboutUsCompany() {
  return (
    <AboutUs
      hero={{
        title: "Who We Are",
        subtitle: [
          "We are a team of creative gurus, enthusiastic intellectuals, and pragmatic designers.",
          "Our passion lies in crafting compelling narratives that strengthen the relationship between organizations and their audiences.",
          "Our collective experience enables us to create elevated brand positioning, authentic brand stories, and a robust market presence.",
        ],
      }}
      focus="Knack Fusion is committed to delivering highly qualitative, timely, and cost-effective software solutions and development services. Our rich and varied experience in software development, combined with our project management capabilities and stringent quality standards, ensures that we provide innovative solutions that drive your business forward. We specialize in developing and implementing mission-critical and enterprise-wide applications."
      mission="To simplify innovation through intuitive, scalable digital products."
      vision="To be the global partner of choice for technology-driven transformation."
      values={[
        "Integrity",
        "User-Centricity",
        "Innovation",
        "Collaboration",
        "Excellence",
      ]}
      cta={{
        title: "Ready to build something great together?",
        button: "Get in Touch",
        link: "/contact-us",
      }}
    />
  );
}
