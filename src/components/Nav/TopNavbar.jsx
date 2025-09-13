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
    href: "/#service-section",
    // megaMenu: [
    //   {
    //     title: "Building & Civil Works",
    //     items: [
    //       { label: "Building Construction", href: "/services/building-construction" },
    //       { label: "General Civil Works", href: "/services/civil-works" },
    //       { label: "Concrete Works", href: "/services/concrete-works" },
    //       { label: "Kerbs & Walkway Pavements", href: "/services/kerbs-walkways" },
    //     ],
    //   },
    //   {
    //     title: "Finishes & Interiors",
    //     items: [
    //       { label: "Painting", href: "/services/painting" },
    //       { label: "Tiling", href: "/services/tiling" },
    //       { label: "Ceiling & Bulkhead Design", href: "/services/ceiling-bulkhead" },
    //       { label: "Custom Finishes", href: "/services/custom-finishes" },
    //     ],
    //   },
    //   {
    //     title: "Utilities & Reticulation",
    //     items: [
    //       { label: "Water Reticulation", href: "/services/water-reticulation" },
    //       { label: "Waste-water Reticulation", href: "/services/wastewater-reticulation" },
    //       { label: "Piping & Infrastructure", href: "/services/piping-infrastructure" },
    //     ],
    //   },
    //   {
    //     title: "Project Delivery & Consultancy",
    //     items: [
    //       { label: "Project Management", href: "/services/project-management" },
    //       { label: "Consultancy Services", href: "/services/consultancy" },
    //     ],
    //   },
    // ],
  },
  {
    label: "About Us",
    href: "/about-us",
  },
  {
    label: "Certifications",
    href: "/about-us#certifications",
  },
  {
    label: "Our Team",
    href: "/about-us#team",
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
