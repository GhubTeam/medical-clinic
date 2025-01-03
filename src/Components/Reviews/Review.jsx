import { useState, useEffect } from "react";
import "./Review.css";
import reviews from "./reviewData";
import quoteIcon from "../../assets/quote-icon.svg";
import doctor_patient from "../../assets/doctor-patient.jpg";

const Review = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => 
        prevSlide === reviews.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="review-section">
      <div className="review-container">
        <div className="review-content">
          <h2>
            Words From
            <br />
            Our Amazing Patients
          </h2>

          <p className="review-subtitle">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>

          <div className="review-carousel">
            <div className="review-slider-container">
              <div
                className="review-slider"
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                }}
              >
                {reviews.map((review, index) => (
                  <div key={index} className="review-card">
                    <div className="reviewer-info">
                      <img
                        src={review.image}
                        alt={review.name}
                        className="reviewer-image"
                      />
                      <div className="reviewer-details">
                        <h3>{review.name}</h3>
                        <p>{review.title}</p>
                      </div>
                    </div>
                    <p className="review-text">{review.content}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="carousel-dots">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  className={`carousel-dot ${
                    currentSlide === index ? "active" : ""
                  }`}
                  onClick={() => handleDotClick(index)}
                  aria-label={`Review slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="review-image-container">
          <img
            src={doctor_patient}
            alt="Doctor with patients"
            className="review-hero-image"
          />
          <div className="review-stats">
            <img src={quoteIcon} alt="Quote icon" className="quote-icon" />
            <div className="stats-content">
              <h4>8000+</h4>
              <p>Positive Review</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;