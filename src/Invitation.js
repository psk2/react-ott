import React from "react";
import "./invitation.css";
import invitation1 from "./Images/invitations/invitation1.jpg";
import invitation2 from "./Images/invitations/invitation2.jpg";
import invitation3 from "./Images/invitations/invitation3.jpg";
import invitation4 from "./Images/invitations/invitation4.jpg";
import Nav from "./Nav";

function Invitation() {
  return (
    <React.Fragment>
      <Nav />
      <div className="invitation">
        <div className="gallery">
          <img className="gallery__image" src={invitation1} alt="Invitation" />
          <div className="desc">Sai Krishna weds Mohana Lahari</div>
        </div>
        <div className="gallery">
          <img className="gallery__image" src={invitation2} alt="Invitation" />
          <div className="desc">Sai Krishna weds Mohana Lahari</div>
        </div>
        <div className="gallery">
          <img className="gallery__image" src={invitation3} alt="Invitation" />
          <div className="desc">Mohana Lahari Weds Sai Krishna</div>
        </div>
        <div className="gallery">
          <img className="gallery__image" src={invitation4} alt="Invitation" />
          <div className="desc">Mohana Lahari Weds Sai Krishna</div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Invitation;
