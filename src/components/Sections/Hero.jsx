import HeroStyle2 from "./Hero/HeroStyle2";

export default function Hero() {
  return (
    <HeroStyle2
      title="PEAK VENTURES CONSTRUCTION"
      paragraphs={[
        "Peak Ventures We boast of a highly qualified team of Engineers, Architects and Risk professionals with a combined 2 years of practical experience in Construction, Civil Works and Risk Management.",
        "We boast of a highly qualified team of Engineers, Architects and Risk professionals in Construction, Civil Works and Risk Management.",
      ]}
      buttonText="Contact Us"
      buttonLink="/register"
      showButton={false}
      bgImage={process.env.PUBLIC_URL + "/heroimg4.jpg"}
    />
  );
}
