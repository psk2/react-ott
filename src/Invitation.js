import React from "react";
import "./invitation.css";
import invitation from "./Images/invitation.jpg";
import Nav from "./Nav";

function Invitation() {
  return (
    <React.Fragment>
      <Nav />
      <div className="invitation">
        <div className="gallery">
          <img className="gallery__image" src={invitation} alt="Invitation" />
        </div>
        <div className="gallery">
          <img className="gallery__image" src={invitation} alt="Invitation" />
        </div>
        <div className="gallery">
          <img className="gallery__image" src={invitation} alt="Invitation" />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Invitation;
