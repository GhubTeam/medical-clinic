import "./Hero.css";
import play_icon from "../../assets/play-button-green-icon.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-title">
            Quality Healthcare
            <h1 className="block mt-2">Every Patient!</h1>
          </span>
          <p className="hero-subtitle">
            At our clinic, we are committed to providing the highest quality
            healthcare services, ensuring you receive the best treatment
            possible for a healthy and fulfilling life.
          </p>
          <div className="hero-actions">
            <button className="default-button">Get Started</button>
            <img src={play_icon} alt="play-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
