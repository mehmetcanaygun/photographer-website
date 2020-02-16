import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SiteContext from "../../context/siteContext";

const Home = () => {
  const siteContext = useContext(SiteContext);
  const { closeCurrentSection, togglePortfolio } = siteContext;

  return (
    <section
      className={
        siteContext.isHomeToggled ? "section-home toggled" : "section-home"
      }
    >
      <div className="section-home__container box-shadow">
        <h1 className="title">
          Hi, I am <span className="text-shadow">John DOE</span>,
        </h1>
        <h1 className="secondary-text">
          and <span>photography</span> is my passion.
        </h1>
        <Link to="/portfolio" className="portfolio-btn">
          My Portfolio
        </Link>
      </div>
    </section>
  );
};

export default Home;
