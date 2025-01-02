import "./About.css";
import doctor_1 from "../../assets/doctor-1.jpg";
import doctor_2 from "../../assets/doctor-2.jpg";
import medicals from "../../assets/medics.jpg";

function About() {
  return (
    <>
      <div className="about">
        <div className="about-left">
          <h1>
            We are the best clinic
            <br /> in the city, know about us
          </h1>
          <p>
            At our clinic, we prioritize your health and well-being, offering
            personalized medical services tailored to meet your unique needs.
            Our team of experienced doctors is committed to providing
            exceptional care in a welcoming and compassionate environment.
          </p>
          <p>
            We understand that each patient is different, which is why we offer
            a range of services, from general health checkups to specialized
            treatments, all backed by the latest medical advancements.
          </p>
          <button type="button" className="default-button">
            Read More
          </button>
        </div>
        <div className="about-right">
          <div className="about-images">
            <img src={doctor_1} alt="doctor-1" className="doctor-1" />
            <img src={doctor_2} alt="doctor 2" className="doctor-2" />
          </div>
        </div>
      </div>
      <div className="about-us">
        <img src={medicals} alt="medicals" />
        <div className="abt-why-us">
          <h1>Why Choose Us</h1>
          <ol className="numbered-list">
            <li>
              <span></span>
              <div className="content">
                <span>Over 15 Years of Experience</span>
                <p>
                  With more than 15 years of expertise, our clinic has been a
                  trusted healthcare provider, offering excellent care to
                  patients in our community.
                </p>
              </div>
            </li>
            <li>
              <span></span>
              <div className="content">
                <span>Highly Experienced Doctors</span>
                <p>
                  Our medical team consists of highly skilled and compassionate
                  doctors who are dedicated to providing the best possible care.
                </p>
              </div>
            </li>
            <li>
              <span></span>
              <div className="content">
                <span>24/7 Emergency Support</span>
                <p>
                  We offer round-the-clock emergency care to ensure that you
                  have access to the help you need, whenever you need it.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}

export default About;
