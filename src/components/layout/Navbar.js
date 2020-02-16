import React, { useState } from "react";
import Menu from "./Menu";

const Navbar = () => {
  const [menuToggled, setMenuToggled] = useState(false);
  const body = document.getElementsByTagName("body");

  if (menuToggled) {
    body[0].style.overflowY = "hidden";
  } else {
    body[0].style.overflowY = "visible";
  }

  return (
    <nav className="navbar">
      <div className="navbar__logo"></div>
      <button
        className={
          menuToggled ? "navbar__menu-btn toggled" : "navbar__menu-btn"
        }
        onClick={() => {
          setMenuToggled(true);
        }}
      >
        <div className="top"></div>
        <div className="middle"></div>
        <div className="bottom"></div>
      </button>
      <Menu menuToggled={menuToggled} setMenuToggled={setMenuToggled} />
    </nav>
  );
};

export default Navbar;
