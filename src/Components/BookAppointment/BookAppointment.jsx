import { useState, useEffect } from "react";
import "./BookAppointment.css";
import appointmentData from "./appointmentData";

const BookAppointment = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === appointmentData.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="book-appointment">
      <div className="appointment-slider">
        {appointmentData.map((slide, index) => (
          <div
            key={index}
            className={`appointment-slide ${
              currentSlide === index ? "active" : ""
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(27, 55, 107, 0.85), rgba(27, 55, 107, 0.85)), url(${slide.backgroundImage})`,
            }}
          >
            <div className="slide-content">
              <div className="text-content">
                <h2>{slide.title}</h2>
                <h3>{slide.subtitle}</h3>
                <div className="description">
                  <p>{slide.description1}</p>
                  <p>{slide.description2}</p>
                </div>
                <button className="book-now-btn">Book Now</button>
              </div>
              <span
                style={{
                  backgroundImage: `linear-gradient(rgba(150, 232, 154, 0.85), rgba(120, 159, 231, 0.85)), url(${slide.featureImage})`,
                }}
                className="content-img"
              ></span>
            </div>
          </div>
        ))}
      </div>

      <div className="appointment-dots">
        {appointmentData.map((_, index) => (
          <button
            key={index}
            className={`appointment-dot ${
              currentSlide === index ? "active" : ""
            }`}
            onClick={() => handleDotClick(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default BookAppointment;