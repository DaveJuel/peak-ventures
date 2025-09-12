import React from "react";
import styled from "styled-components";

export default function Pagination({ totalItems, itemsPerPage, currentPage, onPageChange }) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <PageNumber
          key={i}
          active={i === currentPage}
          onClick={() => onPageChange(i)}
        >
          {i}
        </PageNumber>
      );
    }
    return pages;
  };

  return (
    <PaginationContainer>
      {currentPage > 1 && (
        <PaginationButton onClick={() => onPageChange(currentPage - 1)}>
          Prev
        </PaginationButton>
      )}
      {renderPageNumbers()}
      {currentPage < totalPages && (
        <PaginationButton onClick={() => onPageChange(currentPage + 1)}>
          Next
        </PaginationButton>
      )}
    </PaginationContainer>
  );
}

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const PageNumber = styled.div`
  padding: 10px 15px;
  border-radius: 5px;
  background: ${(props) => (props.active ? "#6AA84F" : "#f0f0f0")};
  color: ${(props) => (props.active ? "#fff" : "#000000")};
  cursor: ${(props) => (props.active ? "default" : "pointer")};
  &:hover {
    background: ${(props) => (props.active ? "#6AA84F" : "#ddd")};
  }
`;

const PaginationButton = styled.div`
  padding: 10px 20px;
  background: #6aa84f;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: #5a9240;
  }
`;
