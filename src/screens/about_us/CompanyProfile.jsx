import React from "react";
import AboutUs from "./AboutUs";

export default function AboutUsCompany() {
  return (
    <AboutUs
      hero={{
        title: "Who We Are",
        subtitle: [
          "PEAK VENTURES Construction was founded to bridge the gap between affordability, quality, and safety in Rwanda’s construction industry.",
          "With over 20 years of industry evolution, we remain committed to delivering projects that meet the highest standards without compromise.",
          "Our mission is to provide reliable, sustainable, and client-focused construction solutions across Rwanda and beyond.",
        ],
      }}
      focus="PEAK VENTURES Construction is committed to sustainable building practices that protect ecosystems and promote green energy. Through careful site planning, erosion and sediment control, water recycling, and energy-efficient methods, we minimize environmental impact while delivering cost-effective projects. Our approach integrates renewable energy solutions and eco-friendly construction standards to ensure a safer, greener future for Rwanda and beyond."
      mission="To be the leading construction company on the Rwandan market and be the market’s preferred choice by attaining excellence in quality and timely completed value-added projects."
      vision="To become the go to construction firm in Rwanda for all building construction and civil works while delivering projects that consistently meet international standards and provide exceptional customer satisfaction."
      values={[
        "Integrity",
        "Responsibility",
        "Excellence",
        "Collaboration",
        "Innovation",
        "Respect",
      ]}
      cta={{
        title: "Your next project deserves the best foundation.",
        button: "Contact Us",
        link: "/contact-us",
      }}
    />
  );
}
