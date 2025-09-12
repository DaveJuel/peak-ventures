import React from "react";
import { Outlet } from "react-router-dom";
import TopNavbar from "../Nav/TopNavbar";
import Footer from "../Sections/Footer";

export default function Layout() {
  return (
    <>
      <TopNavbar />
      <Outlet />
      <Footer />
    </>
  );
}
