import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ButtonRed } from "../../style/view.styles";
import { FaUpload } from "react-icons/fa";
import LoadingSpinner from "./LoadingSpinner";
import {
  appUrl,
  fetchEntityData,
  getUserCredentials,
} from "../../utils/RequestHandler";
import DocumentPreview from "./DocumentPreview";

const UserDocumentsSection = () => {
  const [documents, setDocuments] = useState([]);
  const [newFile, setNewFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const response = await fetchEntityData("file_upload", true);
        if (response.success) {
          setDocuments(response.result);
        } else {
          setError("An unexpected error occured, please try again!");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchDocuments();
  }, []);

  const handleDelete = (id) => {
    try {
      setDeleting(true);
      setDocuments(documents.filter((doc) => doc.id !== id));
    } catch (error) {
      setError(error.message);
    } finally {
      setDeleting(false);
    }
  };

  const handleUpload = async () => {
    if (!newFile) {
      setError("Please select a file to upload.");
      return;
    }

    setUploading(true);
    setError(null);

    const formData = new FormData();
    formData.append("file", newFile);

    try {
      const headers = getUserCredentials();

      const response = await fetch(`${appUrl}/upload/`, {
        method: "POST",
        headers,
        body: formData,
      });
      if (!response.ok) {
        throw new Error("File upload failed. Please try again.");
      }
      const data = await response.json();
      setDocuments((prev) => [
        ...prev,
        {
          id: data.id || Date.now(),
          name: newFile.name,
          type: newFile.name.split(".").pop(),
        },
      ]);

      setNewFile(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <>
      {loading && <LoadingSpinner />}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && documents.length > 0 && (
        <DocumentPreview
          documents={documents}
          handleDelete={handleDelete}
          deleting={deleting}
        />
      )}
      <UploadContainer>
        <input type="file" onChange={(e) => setNewFile(e.target.files[0])} />
        <ButtonRed onClick={handleUpload} disabled={uploading}>
          {uploading ? (
            "Uploading..."
          ) : (
            <>
              <FaUpload /> Upload
            </>
          )}
        </ButtonRed>
      </UploadContainer>
    </>
  );
};

const UploadContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  padding: 10px;
  background: #eee;
  border-radius: 5px;

  input {
    flex-grow: 1;
    padding: 5px;
  }

  button {
    margin-left: 10px;
  }
`;

export default UserDocumentsSection;
