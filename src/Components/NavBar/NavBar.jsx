import { useState, useEffect } from "react";
import "./NavBar.css";
import Logo from "../../assets/logo.jpg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <img src={Logo} alt="Logo" className="logo" />
        <button className="mobile-menu-button" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? "open" : ""}`}></span>
        </button>

        
        <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <a href="#" className="nav-link">
            Home
          </a>
          <a href="#" className="nav-link">
            Services
          </a>
          <a href="#" className="nav-link">
            Find a Doctor
          </a>
          <a href="#" className="nav-link">
            Testimonials
          </a>
          <a href="#" className="nav-link">
            Contact Us
          </a>
          <button className="book-button">Book Appointment</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
