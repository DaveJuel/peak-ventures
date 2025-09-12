import React from "react";
import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import MainLayout from "./components/Layouts/MainLayout.js";
// Screens
import Landing from "./screens/Landing.jsx";
import Login from "./screens/Login.jsx";
import Register from "./screens/Register.jsx";
import ProductStrategyPage from "./screens/services/ProductStrategyPage.jsx";
import TeamPage from "./screens/team/TeamPage.jsx";
import AboutUsCompany from "./screens/about_us/CompanyProfile.jsx";
import RepzSolutionPage from "./screens/expertise/RepzSolutionPage.jsx";
import ProjectPlanning from "./screens/expertise/ProjectPlanningPage.jsx";
import QAManualTestingPage from "./screens/expertise/QAManualTestingPage.jsx";
import InfrastructureProvisioningPage from "./screens/expertise/InfrastructureProvisioningPage.jsx";
import ServerNetworkPage from "./screens/expertise/ServerNetworkPage.jsx";
import SecurityAccessControlPage from "./screens/expertise/SecurityAccessControlPage.jsx";
import BackupDisasterRecoveryPage from "./screens/expertise/BackupDisasterRecoveryPage.jsx";
import MonitoringPerformancePage from "./screens/expertise/MonitoringPerformancePage.jsx";
import PerformanceLoadTestingPage from "./screens/expertise/PerformanceLoadTestingPage.jsx";
import SecurityComplianceTestingPage from "./screens/expertise/SecurityComplianceTestingPage.jsx";
import IntegrationTestingPage from "./screens/expertise/IntegrationTestingPage.jsx";
import QATeamManagementPage from "./screens/expertise/QATeamManagementPage.jsx";
import ResourceManagementPage from "./screens/expertise/ResourceManagementPage.jsx";
import RiskQualityMonitoringPage from "./screens/expertise/RiskQualityMonitoringPage.jsx";
import StakeholderCommunicationPage from "./screens/expertise/StakeholderCommunicationPage.jsx";
import AdaptiveMethodologiesPage from "./screens/expertise/AdaptiveMethodologiesPage.jsx";
import SocialRegistryPage from "./screens/expertise/SocialRegistryPage.jsx";
import RwandaValuationSystemPage from "./screens/expertise/RwandaValuationSystemPage.jsx";
import DeedsPlatformPage from "./screens/expertise/DeedsPlatformPage.jsx";
import UIDesignPage from "./screens/services/UIDesignPage.jsx";
import PrototypingTestingPage from "./screens/services/PrototypingTestingPage.jsx";
import WebApplicationsPage from "./screens/services/WebApplicationsPage.jsx";
import MobileApplicationsPage from "./screens/services/MobileApplicationsPage.jsx";
import CloudDevOpsPage from "./screens/services/CloudDevopsPage.jsx";
import AgileProjectManagementPage from "./screens/services/AgileProjectManagementPage.jsx";
import QualityAssurancePage from "./screens/services/QualityAssurance.jsx";
import MaintenanceSupportPage from "./screens/services/MaintenanceSupportPage.jsx";
import ArchitectureConsultingPage from "./screens/services/ArchitectureConsultingPage.jsx";
import DigitalTransformationPage from "./screens/services/DigitalTransformationPage.jsx";
import SecurityAuditPage from "./screens/services/SecurityAuditPage.jsx";
import ContactUsPage from "./screens/ContactUsPage.jsx";
import BuildingConstructionPage from "./screens/services/BuildingConstruction.jsx";

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
          <Route index element={<Landing />} />
          <Route path="/home" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/services/building-construction" element={<BuildingConstructionPage />} />
          <Route path="/services/product-management" element={<ProductStrategyPage />} />
          <Route path="/services/ui-design" element={<UIDesignPage />} />
          <Route path="/services/prototyping-testing" element={<PrototypingTestingPage />} />
          <Route path="/services/web-applications" element={<WebApplicationsPage />} />
          <Route path="/services/mobile-applications" element={<MobileApplicationsPage />} />
          <Route path="/services/cloud-devops" element={<CloudDevOpsPage  />} />
          <Route path="/services/agile-project-management" element={<AgileProjectManagementPage  />} />
          <Route path="/services/quality-assurance" element={<QualityAssurancePage  />} />
          <Route path="/services/maintenance-and-support" element={<MaintenanceSupportPage  />} />
          <Route path="/services/architecture-consulting" element={<ArchitectureConsultingPage  />} />
          <Route path="/services/digital-transformation" element={<DigitalTransformationPage  />} />
          <Route path="/services/security-audits" element={<SecurityAuditPage  />} />
          <Route path="/solution/repz" element={<RepzSolutionPage />} />
          <Route path="/solution/social-registry" element={<SocialRegistryPage />} />
          <Route path="/solution/rwanda-valuation-system" element={<RwandaValuationSystemPage />} />
          <Route path="/solution/deeds-platform" element={<DeedsPlatformPage />} />
          <Route path="/project/planning" element={<ProjectPlanning />} />
          <Route path="/project/resource-management" element={<ResourceManagementPage />} />
          <Route path="/project/risk-quality-monitoring" element={<RiskQualityMonitoringPage />} />
          <Route path="/project/stakeholder-comms" element={<StakeholderCommunicationPage />} />
          <Route path="/project/adaptive-methodologies" element={<AdaptiveMethodologiesPage />} />
          <Route path="/qa/manual-test" element={<QAManualTestingPage />} />
          <Route path="/qa/performance-load-testing" element={<PerformanceLoadTestingPage />} />
          <Route path="/qa/security-compliance-testing" element={<SecurityComplianceTestingPage />} />
          <Route path="/qa/integration-testing" element={<IntegrationTestingPage />} />
          <Route path="/qa/team-management" element={<QATeamManagementPage />} />
          <Route path="/sysadmin/infrastructure-provisioning" element={<InfrastructureProvisioningPage />} />
          <Route path="/sysadmin/server-network" element={<ServerNetworkPage />} />
          <Route path="/sysadmin/security-access-control" element={<SecurityAccessControlPage />} />
          <Route path="/sysadmin/backup-disaster-recovery" element={<BackupDisasterRecoveryPage />} />
          <Route path="/sysadmin/monitoring-performance" element={<MonitoringPerformancePage />} />
          <Route path="/dedicated-team" element={<TeamPage />} />
          <Route path="/about-us" element={<AboutUsCompany />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
        </Route>
      </Routes>
    </>
  );
}

