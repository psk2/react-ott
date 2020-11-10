import React, { useState, useEffect } from "react";
import "./Nav.css";
import logo from "./Images/logo.png";
import { Link, useLocation } from "react-router-dom";
import bride from "./Images/bride.png";
import groom from "./Images/groom.png";

function Nav() {
  const [show, handleShow] = useState(false);
  // const [showAvatar, handleShowAvatar] = useState(false);
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
  // useEffect(() => {
  //   if ((location.pathname !== "/browse") || (location.pathname !== "/invitation")) {
  //     handleShowAvatar(false)
  //   } else {
  //     console.log("inside else");
  //     handleShowAvatar(true)
  //   }
  // }, [location.pathname]);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <Link to="/browse" >
        <img className="nav__logo" src={logo} alt="Netflix Logo" />
      </Link>
      {/* { ((location.pathname !== "/browse") || (location.pathname !== "/invitation")) && */}
      <img className="nav__avatar" src={location.pathname === "/bride" ? bride : location.pathname === "/groom" ? groom : null} alt="" />
      {/* } */}
    </div>
  );
}
export default Nav;
