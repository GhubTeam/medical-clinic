import { useState, useEffect } from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll
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
        <Link to="hero" smooth={true} duration={500}>
          <img src={Logo} alt="Logo" className="logo" />
        </Link>
        <button
          className="mobile-menu-button"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${isMenuOpen ? "open" : ""}`}></span>
        </button>

        <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="nav-link"
            offset={-50}
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="services-section"
            smooth={true}
            duration={500}
            className="nav-link"
            offset={-50}
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            to="review-section"
            smooth={true}
            duration={500}
            className="nav-link"
            offset={-50}
            onClick={() => setIsMenuOpen(false)}
          >
            Testimonials
          </Link>
          <Link
            to="team"
            smooth={true}
            duration={500}
            className="nav-link"
            offset={-50}
            onClick={() => setIsMenuOpen(false)}
          >
            Our Team
          </Link>
          <Link
            to="contact-section"
            smooth={true}
            duration={500}
            className="book-button"
            offset={-50}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
