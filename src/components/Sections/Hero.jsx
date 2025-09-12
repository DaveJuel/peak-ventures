import React, { useEffect, useState } from "react";
import HeroStyle2 from "./Hero/HeroStyle2";

export default function Hero() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
  }, []);

  return (
    <HeroStyle2
      title="Build, Scale & Optimize Digital Products."
      paragraphs={[
        "Knack Fusion is a leading technology solutions provider based in Rwanda, working across Africa on various projects with a profound understanding of market needs.",
        "Our company excels in developing cost-effective IT solutions that significantly enhance client workflows and efficiencies.",
      ]}
      buttonText="Contact Us"
      buttonLink="/register"
      showButton={!isLoggedIn}
      bgImage={process.env.PUBLIC_URL + "/heroimg8.jpg"}
    />
  );
}
