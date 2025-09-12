import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MdWork } from "react-icons/md";
import LoadingSpinner from "../Elements/LoadingSpinner";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaUser, FaStar } from "react-icons/fa";
export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const colors = [
    "#4CAF50", 
    "#2196F3", 
    "#FF9800", 
    "#9C27B0", 
    "#E91E63", 
    "#607D8B"];

  useEffect(() => {
    const dummyTestimonials = [
      {
        fullnames: "Jane Doe",
        job_title: "Marketing Specialist",
        message:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel turpis non ipsum sagittis iaculis.",
      },
      {
        fullnames: "John Smith",
        job_title: "Software Engineer",
        message:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      },
      {
        fullnames: "Alice Johnson",
        job_title: "Product Manager",
        message:
          "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
      },
      {
        fullnames: "Mark Lee",
        job_title: "HR Coordinator",
        message:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
      {
        fullnames: "Sophia Brown",
        job_title: "Graphic Designer",
        message:
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        fullnames: "Michael Green",
        job_title: "Business Analyst",
        message:
          "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
      },
    ].map((item) => ({
      ...item,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    setTestimonials(dummyTestimonials);
    setLoading(false);
  }, [colors]);

  const nextTestimonial = () => {
    if (testimonials.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }
  };

  const prevTestimonial = () => {
    if (testimonials.length > 0) {
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex - 1 + testimonials.length) % testimonials.length
      );
    }
  };

  const getVisibleCount = () => {
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1200) return 2;
    return 3;
  };

  return (
    <TestimonialsWrapper id="testimonials">
      <div className="container">
        <HeaderInfo>
          <h1 className="font40 darkGreenColor extraBold">
            Our Impact, Their Stories
          </h1>
          <HeadingUnderline />
          <p className="font18">
            Success stories from students, businesses, and organizations we've
            helped achieve their goals.
          </p>
        </HeaderInfo>

        {loading ? (
          <LoadingSpinner />
        ) : testimonials.length === 0 ? (
          <NoTestimonials>No testimonials available at the moment.</NoTestimonials>
        ) : (
          <TestimonialsContainer>
            {testimonials.length > getVisibleCount() && (
              <NavButton onClick={prevTestimonial} direction="left">
                <FaChevronLeft />
              </NavButton>
            )}

            <TestimonialGrid>
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  color={testimonial.color}
                  isVisible={
                    index >= currentIndex &&
                    index < currentIndex + getVisibleCount()
                  }
                >
                  <QuoteIcon>
                    <FaQuoteLeft />
                  </QuoteIcon>
                  <TestimonialContent>
                    <p className="feedback">"{testimonial.message}"</p>
                  </TestimonialContent>
                  <TestimonialFooter>
                    <AvatarWrapper color={testimonial.color}>
                      <FaUser />
                    </AvatarWrapper>
                    <PersonInfo>
                      <h3>{testimonial.fullnames}</h3>
                      <p className="role">
                        <MdWork /> {testimonial.job_title}
                      </p>
                    </PersonInfo>
                  </TestimonialFooter>
                  <RatingStars>
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </RatingStars>
                </TestimonialCard>
              ))}
            </TestimonialGrid>

            {testimonials.length > getVisibleCount() && (
              <NavButton onClick={nextTestimonial} direction="right">
                <FaChevronRight />
              </NavButton>
            )}
          </TestimonialsContainer>
        )}

        {testimonials.length > 1 && (
          <TestimonialDots>
            {testimonials.map((_, index) => (
              <Dot
                key={index}
                active={
                  index >= currentIndex &&
                  index < currentIndex + getVisibleCount()
                }
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </TestimonialDots>
        )}
      </div>
    </TestimonialsWrapper>
  );
}

const TestimonialsWrapper = styled.section`
  width: 100%;
  padding: 80px 0;
  background: linear-gradient(to bottom, #f9f9f9, #fff);
`;

const HeaderInfo = styled.div`
  margin-bottom: 50px;
  text-align: center;
  position: relative;

  h1 {
    margin-bottom: 20px;
    font-size: 2.5rem;
  }

  p {
    max-width: 700px;
    margin: 0 auto;
    color: #666;
    line-height: 1.6;
  }

  @media (max-width: 860px) {
    text-align: center;
  }
`;

const HeadingUnderline = styled.div`
  width: 80px;
  height: 4px;
  background: linear-gradient(to right, #A2A3B0, #656565);
  margin: 0 auto 25px;
  border-radius: 2px;
`;

const TestimonialsContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TestimonialCard = styled.div`
  position: relative;
  background: #fff;
  border-radius: 12px;
  padding: 30px 25px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  text-align: left;
  transition: all 0.4s ease;
  display: ${(props) => (props.isVisible ? "block" : "none")};
  border-top: 4px solid ${(props) => props.color || "#A2A3B0"};

  h3 {
    font-size: 18px;
    margin: 0 0 5px;
    color: #000000;
    font-weight: 600;
  }

  .role {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #777;
    margin: 0;

    svg {
      margin-right: 5px;
      font-size: 14px;
      color: ${(props) => props.color || "#A2A3B0"};
    }
  }

  .feedback {
    font-size: 16px;
    color: #444;
    line-height: 1.6;
    margin-bottom: 20px;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  }
`;

const QuoteIcon = styled.div`
  color: rgba(46, 204, 113, 0.15);
  font-size: 28px;
  margin-bottom: 15px;
`;

const TestimonialContent = styled.div`
  margin-bottom: 20px;
`;

const TestimonialFooter = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const AvatarWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${(props) => `${props.color}15` || "rgba(46, 204, 113, 0.15)"};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  color: ${(props) => props.color || "#A2A3B0"};
  font-size: 22px;
`;

const PersonInfo = styled.div`
  flex: 1;
`;

const RatingStars = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  color: #ffd700;
  display: flex;

  svg {
    margin-left: 2px;
  }
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  ${(props) => (props.direction === "left" ? "left: -20px;" : "right: -20px;")}
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #fff;
  border: none;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 2;
  transition: all 0.3s ease;

  &:hover {
    background: #A2A3B0;
    color: white;
  }

  @media (max-width: 768px) {
    ${(props) =>
      props.direction === "left" ? "left: -10px;" : "right: -10px;"}
    width: 36px;
    height: 36px;
  }
`;

const TestimonialDots = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${(props) => (props.active ? "#A2A3B0" : "#ddd")};
  margin: 0 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #A2A3B0;
  }
`;

const NoTestimonials = styled.div`
  text-align: center;
  padding: 50px 0;
  color: #666;
  font-style: italic;
`;
