import React from "react";

import { Link } from "react-router-dom";
import logo from "./Images/logo.png";
import groom from "./Images/groom.png";
import bride from "./Images/bride.png";
import "./Nav.css";

function Home() {
  return (
    <div>
      <div className="logo">
        <img className="nav__logo" src={logo} alt="Netflix Logo" />

        {/* <img src={logo} width="320" height="70" alt="" /> */}
      </div>

      <div className="h-70 d-flex justify-content-center align-items-center adjust-center">
        <div>
          <div className="d-flex justify-content-center align-items-center heading">
            Whose Wedding ?
          </div>
          <div className="row d-flex justify-content-center align-items-center  profiles-row">
            <div className="">
              <Link to="/bride" className="profile">
                <div>
                  <img
                    className="profiles-gate-container"
                    src={groom}
                    width="120"
                    height="120"
                    alt="PSK"
                  />
                  <label className="profile-name">PSK</label>
                </div>
              </Link>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="">
              <Link to="/bride" className="profile">
                <div>
                  <img
                    className="profiles-gate-container"
                    src={bride}
                    width="120"
                    height="120"
                    alt=""
                  />
                  <label className="profile-name">Lahari</label>
                </div>
              </Link>
            </div>
          </div>
          <span className="d-flex justify-content-center invitation-heading">
            <a href="/"> Wedding Invitation </a>
          </span>
        </div>
      </div>
    </div>
  );
}
export default Home;
