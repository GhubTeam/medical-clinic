
import "./Contact.css";
const Contact = () => {
  const handleFormClick = () => {

    window.open("https://forms.google.com/your-form-url", "_blank");
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2>Get in Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <h3>Opening Hours</h3>
              <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 2:00 PM</p>
            </div>
            <div className="info-item">
              <h3>Contact Info</h3>
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@care4uclinic.com</p>
              <p>Address: 123 Healthcare Ave</p>
            </div>
          </div>
          <div className="contact-form">
            <h3>Send Us A  Message</h3>
            <p>
              We&apos;d love to hear from you! Click below to fill out our contact
              form.
            </p>
            <button onClick={handleFormClick} className=" form-button default-button">
              Contact Form
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
