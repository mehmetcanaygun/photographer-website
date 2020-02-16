import React, { useContext } from "react";
import SiteContext from "../../context/siteContext";

const Contact = () => {
  const siteContext = useContext(SiteContext);

  return (
    <section
      className={
        siteContext.isContactToggled
          ? "section-contact toggled"
          : "section-contact"
      }
    >
      <div className="section-contact__container box-shadow">
        <h1 className="title">
          Contact <span>Me</span>
        </h1>
        <p className="contact-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          voluptas totam reiciendis unde iusto minima dolorum molestias
          praesentium minus. Ab.
        </p>
        <div className="contact-info">
          <div className="home">
            <i className="fas fa-home"></i> XYZ Street, No: 10, NY
          </div>
          <div className="phone">
            <i className="fas fa-phone"></i> 0123 456 789
          </div>
          <div className="mail">
            <i className="fas fa-envelope"></i> info@jdoephotography.com
          </div>
          <div className="time">
            <i className="fas fa-clock"></i> Monday - Saturday 07:30 - 22:30
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
