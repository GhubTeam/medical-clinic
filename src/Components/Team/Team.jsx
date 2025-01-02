import { useState } from "react";
import "./Team.css";
import teamMembers from "./teamData";
import linkedin from "../../assets/linkedin.png";
import instagram from "../../assets/Instagram Icon.png";
import twitter from "../../assets/Twitter Icon.png";

function Team() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesToShow =
    window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
  const totalSlides = Math.ceil(teamMembers.length / slidesToShow);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  const getVisibleMembers = () => {
    const start = currentSlide * slidesToShow;
    return teamMembers.slice(start, start + slidesToShow);
  };

  return (
    <div className="team">
      <h2>See Our Professional Team</h2>
      <p>
        Our team is made up of highly skilled professionals who are dedicated to
        providing the best care and service to our patients. Get to know them
        better!
      </p>

      <div className="team-container">
        <div
          className="team-slider"
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${slidesToShow}, 1fr)`,
            gap: "20px",
          }}
        >
          {getVisibleMembers().map((member, index) => (
            <div
              key={currentSlide * slidesToShow + index}
              className="team-format"
            >
              <div className="member-image-container">
                <img src={member.image} alt={member.name} />
                <div className="social-overlay">
                  <a href="#" className="social-icon">
                    <img src={twitter} alt="twitter-icon" />
                  </a>
                  <a href="#" className="social-icon">
                    <img src={instagram} alt="instagram-icon" />
                  </a>
                  <a href="#" className="social-icon">
                    <img src={linkedin} alt="linkedin-icon" />
                  </a>
                </div>
              </div>
              <h3>{member.name}</h3>
              <span>{member.position}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-dots">
        {[...Array(totalSlides)].map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${currentSlide === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Team;
