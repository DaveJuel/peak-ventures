import React, { useState, useEffect } from "react";
import { ViewCard, ViewList } from "../../style/view.styles";
import EmptyState from "./EmptyState";
import LoadingSpinner from "./LoadingSpinner";
import { fetchEntityData } from "../../utils/RequestHandler";

const UserApplicationsSection = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await fetchEntityData("job_applications", true);
        if (response.success) {
          setApplications(response.result);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  return (
    <>
      {loading && <LoadingSpinner />}
      {!loading && applications.length > 0 && (
        <ViewList style={{ flex: "1 1 auto", overflowY: "auto" }}>
          {applications.map(({ id, opportunity, organization, status }) => (
            <ViewCard key={id}>
              <h4>{opportunity}</h4>
              <p>At {organization}</p>
              <span>Status: {status}</span>
            </ViewCard>
          ))}
        </ViewList>
      )}
      {!loading && applications.length === 0 && (
        <EmptyState>No job applications found.</EmptyState>
      )}
    </>
  );
};

export default UserApplicationsSection;
