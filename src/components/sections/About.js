import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SiteContext from "../../context/siteContext";

const About = () => {
  const siteContext = useContext(SiteContext);

  return (
    <section
      className={
        siteContext.isAboutToggled ? "section-about toggled" : "section-about"
      }
    >
      <div className="section-about__container box-shadow">
        <h1 className="title">
          About <span>Me</span>
        </h1>
        <p className="about-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque earum
          in id sint explicabo, nostrum beatae vero quia quidem harum deleniti
          eos aspernatur necessitatibus saepe optio odit facere nihil
          dignissimos. Ex voluptates eaque officia sit eligendi praesentium eos
          accusamus voluptatem!
        </p>
        <Link to="/contact" className="contact-btn">
          Hire Me
        </Link>
      </div>
    </section>
  );
};

export default About;
