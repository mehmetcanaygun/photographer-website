import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SiteContext from "../../context/siteContext";

const Menu = ({ menuToggled, setMenuToggled }) => {
  const siteContext = useContext(SiteContext);
  const { currentSection, changeCurrentSection } = siteContext;

  return (
    <div className={`menu menu-${menuToggled}`}>
      <div className="menu__modal">
        <div className="menu__modal__box"></div>
        <Link
          to="/"
          className="menu__modal__box home-btn"
          onClick={() => {
            setMenuToggled();
            changeCurrentSection("home");
          }}
        >
          <p
            style={
              currentSection === "home"
                ? { color: "steelblue" }
                : { color: "white" }
            }
          >
            Home
          </p>
          <p>
            <i className="fas fa-chevron-up"></i>
          </p>
        </Link>
        <div className="menu__modal__box"></div>
        <Link
          to="/contact"
          className="menu__modal__box contact-btn"
          onClick={() => {
            setMenuToggled();
            changeCurrentSection("contact");
          }}
        >
          <p
            style={
              currentSection === "contact"
                ? { color: "steelblue" }
                : { color: "white" }
            }
          >
            Contact
          </p>
          <p>
            <i className="fas fa-chevron-left"></i>
          </p>
        </Link>
        <button
          className="menu__modal__box close-btn"
          onClick={() => {
            setMenuToggled();
          }}
        >
          <i className="fas fa-camera-retro"></i>
        </button>
        <Link
          to="/about"
          className="menu__modal__box about-btn"
          onClick={() => {
            setMenuToggled();
            changeCurrentSection("about");
          }}
        >
          <p>
            <i className="fas fa-chevron-right"></i>
          </p>
          <p
            style={
              currentSection === "about"
                ? { color: "steelblue" }
                : { color: "white" }
            }
          >
            About
          </p>
        </Link>
        <div className="menu__modal__box"></div>
        <Link
          to="/portfolio"
          className="menu__modal__box portfolio-btn"
          onClick={() => {
            setMenuToggled();
            changeCurrentSection("portfolio");
          }}
        >
          <p>
            <i className="fas fa-chevron-down"></i>
          </p>
          <p
            style={
              currentSection === "portfolio"
                ? { color: "steelblue" }
                : { color: "white" }
            }
          >
            Portfolio
          </p>
        </Link>
        <div className="menu__modal__box"></div>
      </div>
    </div>
  );
};

export default Menu;
