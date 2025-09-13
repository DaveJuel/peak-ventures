import React from "react";
import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import MainLayout from "./components/Layouts/MainLayout.js";
import ContactUsPage from "./screens/ContactUsPage.jsx";
import CompanyProfile from "./screens/about_us/CompanyProfile.jsx";

export default function App() {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700&display=swap" rel="stylesheet"></link>
      </Helmet>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<CompanyProfile />} />
          <Route path="/home" element={<CompanyProfile />} />
          <Route path="/about-us" element={<CompanyProfile />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
        </Route>
      </Routes>
    </>
  );
}

