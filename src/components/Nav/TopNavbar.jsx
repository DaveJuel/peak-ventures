import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import LogoIcon from "../../assets/svg/Logo";
import FullButton from "../Buttons/FullButton";
import {
  BtnWrapper,
  CloseButton,
  DropdownItem,
  LogoWrapper,
  MegaMenu,
  MegaMenuColumn,
  MenuColumnTitle,
  MenuItemList,
  MobileDropdownMenu,
  MobileDropdownToggle,
  MobileMenu,
  MobileMenuIcon,
  MobileNavLink,
  NavInner,
  ProfileLink,
  UlWrapper,
  UlWrapperRight,
  Wrapper,
} from "../../style/navbar.styles";

const defaultMenu = [
  {
    label: "Services",
    href: "#",
    megaMenu: [
      {
        title: "Product Design",
        items: [
          { label: "Product Management", href: "/services/product-management" },
          { label: "UI/UX Design", href: "/services/ui-design" },
          {
            label: "Prototyping & Testing",
            href: "/services/prototyping-testing",
          },
        ],
      },
      {
        title: "Engineering",
        items: [
          { label: "Web Applications", href: "/services/web-applications" },
          {
            label: "Mobile Applications",
            href: "/services/mobile-applications",
          },
          { label: "Cloud & DevOps", href: "/services/cloud-devops" },
        ],
      },
      {
        title: "Project Delivery",
        items: [
          {
            label: "Agile Project Management",
            href: "/services/agile-project-management",
          },
          { label: "Quality Assurance", href: "/services/quality-assurance" },
          {
            label: "Maintenance & Support",
            href: "/services/maintenance-and-support",
          },
        ],
      },
      {
        title: "Technical Advisory",
        items: [
          {
            label: "Architecture Consulting",
            href: "/services/architecture-consulting",
          },
          {
            label: "Digital Transformation",
            href: "/services/digital-transformation",
          },
          { label: "Security Audits", href: "/services/security-audits" },
        ],
      },
    ],
  },
  {
    label: "Expertise",
    href: "#",
    megaMenu: [
      {
        title: "Software Solutions",
        items: [
          { label: "Social Registry", href: "/solution/social-registry" },
          {
            label: "Rwanda's Valuation System",
            href: "/solution/rwanda-valuation-system",
          },
          { label: "Deedz Platform", href: "/solution/deeds-platform" },
          { label: "Repz", href: "/solution/repz" },
        ],
      },
      {
        title: "Project Management",
        items: [
          {
            label: "Planning & Integration",
            href: "/project/planning",
          },
          {
            label: "Resource Management",
            href: "/project/resource-management",
          },
          {
            label: "Risk, Quality & Monitoring",
            href: "/project/risk-quality-monitoring",
          },
          {
            label: "Stakeholder & Communication Strategy",
            href: "/project/stakeholder-comms",
          },
          {
            label: "Adaptive Methodologies",
            href: "/project/adaptive-methodologies",
          },
        ],
      },
      {
        title: "Quality Assurance",
        items: [
          {
            label: "Manual & Automated Testing",
            href: "/qa/manual-test",
          },
          {
            label: "Performance & Load Testing",
            href: "/qa/performance-load-testing",
          },
          {
            label: "Security & Compliance Testing",
            href: "/qa/security-compliance-testing",
          },
          {
            label: "Integration & E2E Testing",
            href: "/qa/integration-testing",
          },
          {
            label: "QA Team & Process Management",
            href: "/qa/team-management",
          },
        ],
      },
      {
        title: "System Administration",
        items: [
          {
            label: "Infrastructure Provisioning",
            href: "/sysadmin/infrastructure-provisioning",
          },
          {
            label: "Server & Network Management",
            href: "/sysadmin/server-network",
          },
          {
            label: "Security & Access Control",
            href: "/sysadmin/security-access-control",
          },
          {
            label: "Backup & Disaster Recovery",
            href: "/sysadmin/backup-disaster-recovery",
          },
          {
            label: "Monitoring & Performance Tuning",
            href: "/sysadmin/monitoring-performance",
          },
        ],
      },
    ],
  },
  {
    label: "Dedicated Team",
    href: "/dedicated-team",
  },
  {
    label: "About Us",
    href: "/about-us",
  },
];

export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [isLoggedIn] = useState(false);
  const [menuItems] = useState(defaultMenu);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const location = useLocation();
  const mobileMenuRef = useRef(null);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setMobileMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuRef]);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Toggle dropdown in mobile view
  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Handle scroll appearance
  const navbarStyle = {
    backgroundColor: y > 30 ? "#ffffff" : "rgba(255, 255, 255, 0.9)",
    boxShadow: y > 30 ? "0px 2px 10px rgba(0,0,0,0.08)" : "none",
    transition: "all 0.3s ease-in-out",
  };

  return (
    <Wrapper className="flexCenter" style={navbarStyle}>
      <NavInner className="container flexSpaceCenter">
        <LogoWrapper>
          <a className="pointer flexNullCenter" href="/" aria-label="Home">
            <LogoIcon />
          </a>
          <MobileMenuIcon onClick={toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </MobileMenuIcon>
        </LogoWrapper>

        {/* Desktop Navigation */}
        <UlWrapper className="flexCenter">
          {menuItems.map((item, index) => (
            <React.Fragment key={index}>
              {item.megaMenu ? (
                <DropdownItem className="semiBold font15 pointer">
                  <a
                    href={item.href}
                    className={location.pathname === item.href ? "active" : ""}
                  >
                    {item.label}
                  </a>
                  {/* Mega Menu */}
                  <MegaMenu className="mega-menu">
                    {item.megaMenu.map((column, colIndex) => (
                      <MegaMenuColumn key={colIndex}>
                        <MenuColumnTitle>{column.title}</MenuColumnTitle>
                        <MenuItemList>
                          {column.items.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <a
                                href={subItem.href}
                                className={
                                  location.pathname === subItem.href
                                    ? "active"
                                    : ""
                                }
                              >
                                {subItem.label}
                              </a>
                            </li>
                          ))}
                        </MenuItemList>
                      </MegaMenuColumn>
                    ))}
                  </MegaMenu>
                </DropdownItem>
              ) : (
                <DropdownItem className="semiBold font15 pointer">
                  <a
                    href={item.href}
                    className={location.pathname === item.href ? "active" : ""}
                  >
                    {item.label}
                  </a>
                </DropdownItem>
              )}
            </React.Fragment>
          ))}
        </UlWrapper>

        {/* Right side menu (desktop) */}
        <UlWrapperRight className="flexNullCenter">
          {isLoggedIn ? (
            <ProfileLink className="semiBold font15 pointer flexCenter">
              <a href="/my-profile" className="radius8 lightBg">
                My Profile
              </a>
            </ProfileLink>
          ) : (
            <li className="semiBold font15 pointer flexCenter">
              <BtnWrapper>
                <FullButton
                  title="Contact Us"
                  action={() => (window.location.href = "/contact-us")}
                />
              </BtnWrapper>
            </li>
          )}
        </UlWrapperRight>

        {/* Mobile Navigation */}
        <MobileMenu ref={mobileMenuRef} isOpen={mobileMenuOpen}>
          <CloseButton onClick={toggleMobileMenu}>&times;</CloseButton>

          {menuItems.map((item, index) => (
            <div key={index}>
              {item?.megaMenu && (
                <>
                  <MobileDropdownToggle
                    className="semiBold"
                    onClick={() => toggleDropdown(index)}
                  >
                    {item.label}
                    <span>{openDropdown === index ? "−" : "+"}</span>
                  </MobileDropdownToggle>
                  <MobileDropdownMenu isOpen={openDropdown === index}>
                    {item.megaMenu
                      .flatMap((section) => section.items)
                      .map((menuItem, subIndex) => (
                        <li key={subIndex}>
                          <a
                            href={menuItem.href}
                            className={
                              location.pathname === menuItem.href
                                ? "active"
                                : ""
                            }
                          >
                            {menuItem.label}
                          </a>
                        </li>
                      ))}
                  </MobileDropdownMenu>
                </>
              )}
              {!item?.megaMenu && (
                <MobileNavLink className="semiBold font15">
                  <a
                    href={item.href}
                    className={location.pathname === item.href ? "active" : ""}
                  >
                    {item.label}
                  </a>
                </MobileNavLink>
              )}
            </div>
          ))}

          <div className="mobile-auth">
            {isLoggedIn ? (
              <MobileNavLink className="semiBold font15">
                <a href="/my-profile" className="profile-link">
                  My Profile
                </a>
              </MobileNavLink>
            ) : (
              <div className="mobile-btn-wrapper">
                <FullButton
                  title="Contact Us"
                  action={() => (window.location.href = "/contact-us")}
                />
              </div>
            )}
          </div>
        </MobileMenu>
      </NavInner>
    </Wrapper>
  );
}
