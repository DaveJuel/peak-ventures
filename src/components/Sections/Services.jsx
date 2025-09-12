import React, { useEffect, useState } from "react";


// Import SVG logos
import ResumeLogo from "../../assets/svg/Services/ResumeIcon";
import InterviewLogo from "../../assets/svg/Services/InterviewIcon";
import MatchingLogo from "../../assets/svg/Services/CareerIcon";
import CounselingLogo from "../../assets/svg/Services/MentorshipIcon";
import BrandingLogo from "../../assets/svg/Services/RollerIcon";
import WorkshopsLogo from "../../assets/svg/Services/SkillIcon";
import { useNavigate } from "react-router-dom";
import { isUserLoggedIn } from "../../utils/AuthHandler";
import { HeaderInfo, HeadingUnderline, LearnMoreButton, LogoWrapper, ServiceCard, ServicesGrid, Wrapper } from "../../style/services.styles";

const loremIpsum = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
  "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.",
];

function getRandomHarmoniousColor() {
  // Base hues from logo colors:
  const baseHues = [35, 0, 240]; // Orange-yellow, gray (neutral), purple-gray
  const baseHue = baseHues[Math.floor(Math.random() * baseHues.length)];

  const hueVariance = 10; // Slight variation
  const hue = (baseHue + Math.floor(Math.random() * hueVariance * 2) - hueVariance + 360) % 360;
  const saturation = 40 + Math.random() * 30; // Keep within 40–70%
  const lightness = 50 + Math.random() * 20;  // Keep within 50–70%

  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

export default function Services() {
  const [services, setServices] = useState([]);
  const [activeService, setActiveService] = useState(null);
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    const logos = [
      ResumeLogo,
      InterviewLogo,
      MatchingLogo,
      CounselingLogo,
      BrandingLogo,
      WorkshopsLogo,
    ];

    const dummyServices = logos.map((Logo, index) => ({
      id: index + 1,
      title: `Service ${index + 1}`,
      description: loremIpsum[index % loremIpsum.length],
      logo: Logo,
      color: getRandomHarmoniousColor(),
    }));

    setIsLoggedIn(isUserLoggedIn());
    setServices(dummyServices);
  }, []);

  const handleMouseEnter = (id) => {
    setActiveService(id);
  };

  const handleMouseLeave = () => {
    setActiveService(null);
  };

  const handleGetStarted = () => {
    navigate("/register");
  };

  return (
    <Wrapper id="services">
      <div className="whiteBg" style={{ padding: "80px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 darkGreenColor extraBold">Our Services</h1>
            <HeadingUnderline />
            <p className="font18">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>
          <ServicesGrid>
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                onMouseEnter={() => handleMouseEnter(service.id)}
                onMouseLeave={handleMouseLeave}
                active={activeService === service.id}
                accentColor={service.color}
              >
                <LogoWrapper
                  accentColor={service.color}
                  active={activeService === service.id}
                >
                  <service.logo />
                </LogoWrapper>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                {!isLoggedIn && (
                  <LearnMoreButton
                    onClick={() => {
                      handleGetStarted();
                    }}
                    accentColor={service.color}
                    active={activeService === service.id}
                  >
                   Take Action
                  </LearnMoreButton>
                )}
              </ServiceCard>
            ))}
          </ServicesGrid>
        </div>
      </div>
    </Wrapper>
  );
}
