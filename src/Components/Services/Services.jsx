import { useState } from "react";
import "./Services.css";
import servicesData from "./servicesData";
import doctorMeeting from "../../assets/doctors-meeting.jpg"; // Add your image

const Services = () => {
  const [selectedService, setSelectedService] = useState(servicesData[0]);

  return (
    <section className="services-section">
      <div className="services-container">
        <div className="services-image">
          <img src={doctorMeeting} alt="Doctors in meeting" />
        </div>

        <div className="services-content">
          <h2>See Our Outstanding Services</h2>
          <p className="services-description">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters
          </p>

          <div className="services-grid">
            <div className="services-list">
              {servicesData.map((service) => (
                <div
                  key={service.id}
                  className={`service-item ${
                    selectedService.id === service.id ? "active" : ""
                  }`}
                  onClick={() => setSelectedService(service)}
                >
                  <img
                    src={service.icon}
                    alt={service.name}
                    className="service-icon"
                  />
                  <h3>{service.name}</h3>
                </div>
              ))}
            </div>

            <div className="service-details">
              <h3>{selectedService.name}</h3>
              <p>{selectedService.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
