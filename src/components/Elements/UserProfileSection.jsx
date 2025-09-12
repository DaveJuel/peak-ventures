import React, { useState, useEffect } from "react";
import OrgProfileSection from "./OrgProfileSection";
import TalentProfileSection from "./TalentProfileSection";

const UserProfileSection = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);
  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
    if (user) {
      setIsLoggedIn(true);
      const parsedUser = JSON.parse(user);
      setUserRole(parsedUser.role);
    } else {
      setIsLoggedIn(false);
      setUserRole(null);
    }
  }, []);

  return isLoggedIn ? (
    userRole === "organization" ? (
      <OrgProfileSection />
    ) : (
      <TalentProfileSection />
    )
  ) : (
    <></>
  );
};

export default UserProfileSection;
