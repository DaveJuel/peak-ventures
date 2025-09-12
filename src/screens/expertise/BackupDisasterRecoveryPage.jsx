import React from "react";
import styled from "styled-components";
import {
  FaDatabase,
  FaCloudUploadAlt,
  FaRedo,
  FaServer,
  FaShieldAlt,
  FaHdd
} from "react-icons/fa";
import ExpertisePage from "./ExpertisePage";

// Backup & Disaster Recovery Page
const BackupDisasterRecoveryPage = () => {
  const imagePath = process.env.PUBLIC_URL + "/heroimg20.jpg";

  const backupSolution = {
    title: "Backup & Disaster Recovery",
    acronym: "BDR",
    description:
      "Ensure business continuity and data protection with robust backup and disaster recovery strategies. Our solutions are designed to minimize downtime, enable rapid recovery, and safeguard against data loss from cyberattacks, hardware failure, or natural disasters.",
    imageSrc: imagePath,
    ctaText: "Secure Your Business Continuity",
    ctaLink: "/services/backup-disaster-recovery",

    features: [
      {
        icon: <FaCloudUploadAlt />,
        title: "Automated Cloud Backups",
        description:
          "Schedule secure, automated backups to cloud storage providers with encryption and versioning to protect critical workloads and data.",
        additionalContent: (
          <FeatureHighlights>
            <li>Incremental and full backups</li>
            <li>Multi-region replication</li>
            <li>Cloud-native backup tools (e.g. AWS Backup)</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaHdd />,
        title: "On-Premises & Hybrid Backups",
        description:
          "Support for local backup infrastructure with optional cloud sync for hybrid resilience and fast local restores.",
        additionalContent: (
          <FeatureHighlights>
            <li>NAS/SAN snapshotting</li>
            <li>Hybrid cloud replication</li>
            <li>Local-to-cloud sync solutions</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaRedo />,
        title: "Disaster Recovery Planning",
        description:
          "Define structured disaster recovery (DR) plans including RTO/RPO objectives, DR sites, and orchestration procedures for seamless failover.",
        additionalContent: (
          <FeatureHighlights>
            <li>Custom DR playbooks</li>
            <li>Failover simulations</li>
            <li>Business impact assessments</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaShieldAlt />,
        title: "Ransomware Protection & Recovery",
        description:
          "Protect backup archives from ransomware and ensure immutable backups to enable clean recovery in the event of compromise.",
        additionalContent: (
          <FeatureHighlights>
            <li>Immutable backup vaults</li>
            <li>Isolated recovery environments</li>
            <li>Air-gapped or WORM storage</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaDatabase />,
        title: "Database Backup & Restore",
        description:
          "Application-aware backups of SQL/NoSQL databases to ensure consistency and rapid recovery of mission-critical data.",
        additionalContent: (
          <FeatureHighlights>
            <li>Point-in-time recovery (PITR)</li>
            <li>Transaction log backups</li>
            <li>Backup integrity verification</li>
          </FeatureHighlights>
        ),
      },
      {
        icon: <FaServer />,
        title: "Full Infrastructure Recovery",
        description:
          "Support bare-metal and virtualized server recovery, including bootable image restoration for disaster scenarios.",
        additionalContent: (
          <FeatureHighlights>
            <li>VM snapshots and replication</li>
            <li>Bare-metal restore (BMR)</li>
            <li>Instant boot recovery</li>
          </FeatureHighlights>
        ),
      },
    ],

    techStack: [
      "Veeam",
      "Acronis",
      "AWS Backup",
      "Azure Site Recovery",
      "Google Backup & DR",
      "Veritas",
      "Rubrik",
      "Datto",
      "Zerto",
      "BorgBackup"
    ],

    testimonial: {
      quote:
        "Their disaster recovery strategy saved us during a major data center outage. Within hours, our systems were running on a secondary region without data loss. It proved their solution was battle-ready.",
      author: "Amrita Bansal",
      position: "IT Director, Horizon Solutions"
    },
  };

  const theme = {
    primary: "#3C8C3C",
    dark: "#121212",
    white: "#FFFFFF",
    light: "#F9F9F9",
  };

  return (
    <PageContainer>
      <ExpertisePage solution={backupSolution} theme={theme} pageTag="SYSTEM ADMINISTRATION" />
    </PageContainer>
  );
};

const PageContainer = styled.div`
  min-height: 100vh;
`;

const FeatureHighlights = styled.ul`
  margin: 0;
  padding-left: 20px;

  li {
    margin-bottom: 8px;
    font-size: 1rem;
    color: #555;
  }
`;

export default BackupDisasterRecoveryPage;
