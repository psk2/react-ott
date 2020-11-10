import React, { useState, useEffect } from "react";
import "./Nav.css";
import Avatar from "./Images/Avatar.jpg";
import logo from "./Images/logo.png";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", () => { });
    };
  }, []);

  const location = useLocation();
  console.log(location.pathname);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <Link to="/browse" >
        <img className="nav__logo" src={logo} alt="Netflix Logo" />
      </Link>
      {location.pathname !== "/browse" &&
        <img className="nav__avatar" src={Avatar} alt="Netflix Logo" />
      }
    </div>
  );
}

export default Nav;
