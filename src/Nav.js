import React, { useState, useEffect } from "react";
import "./Nav.css";
import logo from "./Images/logo.png";
import { Link, useLocation } from "react-router-dom";
import bride from "./Images/bride.png";
import groom from "./Images/groom.png";

function Nav() {
  const [show, handleShow] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 75) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", () => { });
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <Link to="/browse" >
        <img className={`nav__logo ${location.pathname === "/browse" && "nav__logo_responsive"}`} src={logo} alt="Netflix Logo" />
      </Link>
      {location.pathname === "/bride" &&
        <Link to="/groom" >
          <img className="nav__avatar" src={bride} alt="" />
        </Link>
      }
      {location.pathname === "/groom" &&
        <Link to="/bride" >
          <img className="nav__avatar" src={groom} alt="" />
        </Link>
      }
    </div>
  );
}
export default Nav;
