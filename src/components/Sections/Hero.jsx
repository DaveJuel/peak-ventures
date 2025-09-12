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
      title="Constructing Excellence, Brick by Brick."
      paragraphs={[
        // "Peak Ventures We boast of a highly qualified team of Engineers, Architects and Risk professionals with a combined 2 years of practical experience in Construction, Civil Works and Risk Management.",
        "We boast of a highly qualified team of Engineers, Architects and Risk professionals in Construction, Civil Works and Risk Management.",
      ]}
      buttonText="Contact Us"
      buttonLink="/register"
      showButton={!isLoggedIn}
      bgImage={process.env.PUBLIC_URL + "/heroimg1.jpg"}
    />
  );
}
