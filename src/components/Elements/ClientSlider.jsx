import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { fetchEntityData } from "../../utils/RequestHandler";

export default function ClientSlider() {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const data = await fetchEntityData("company"); // Missing `await` fixed
        if (data.success) {
          setCompanies(data.result); // Set the correct fetched data
        } else {
          console.error("Failed to fetch companies: No success flag");
        }
      } catch (error) {
        console.error("Failed to load companies:", error);
      } finally {
        setLoading(false); // Always end the loading state
      }
    };

    fetchCompanies();
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <SliderContainer>
      {loading ? (
        <LoadingText>Loading companies...</LoadingText>
      ) : companies.length > 0 ? (
        <Slider {...settings}>
          {companies.map((company, index) => (
            <CompanyWrapper key={company.id || index}>
              <NameStyle>{company.name}</NameStyle>
            </CompanyWrapper>
          ))}
        </Slider>
      ) : (
        <NoCompaniesText>No companies to display.</NoCompaniesText>
      )}
    </SliderContainer>
  );
}

const SliderContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 20px 0;
`;

const LoadingText = styled.p`
  font-size: 16px;
  text-align: center;
  color: #616161;
`;

const NoCompaniesText = styled.p`
  font-size: 16px;
  text-align: center;
  color: #ff5252;
`;

const CompanyWrapper = styled.div`
  width: 100%;
  height: 100px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  :focus-visible {
    outline: none;
    border: 0px;
  }
`;

const NameStyle = styled.div`
  width: 100%;
  height: 100%;
  padding: 10%;
  background-color: #f5f5f5;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2e7d32;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #e8f5e9;
    transition: background-color 0.3s ease;
  }
`;
