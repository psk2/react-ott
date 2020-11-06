import React, { useState, useEffect } from "react";
import "./Nav.css";
import Avatar from "./Images/Avatar.jpg";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/archive/0/08/20160220053054%21Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />
      <img className="nav__avatar" src={Avatar} alt="Netflix Logo" />
    </div>
  );
}

export default Nav;
