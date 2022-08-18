import React from "react";
import "./invitation.css";
import invitation1 from "./Images/invitations/invitation1.jpeg";
import invitation2 from "./Images/invitations/invitation2.jpeg";
import invitation3 from "./Images/invitations/invitation3.jpeg";
import invitation4 from "./Images/invitations/invitation4.jpeg";
import Nav from "./Nav";

function Invitation() {
  return (
    <React.Fragment>
      <Nav />
      <div className="invitation">
        <div className="gallery gallery1">
          <img className="gallery__image" src={invitation1} alt="Invitation" />
          <div className="desc">Sreeja Weds Subramanyam</div>
        </div>
        <div className="gallery">
          <img className="gallery__image" src={invitation2} alt="Invitation" />
          <div className="desc">Sreeja Weds Subramanyam</div>
        </div>
        <div className="gallery">
          <img className="gallery__image" src={invitation3} alt="Invitation" />
          <div className="desc">Subramanyam weds Sreeja</div>
        </div>
        <div className="gallery">
          <img className="gallery__image" src={invitation4} alt="Invitation" />
          <div className="desc">Subramanyam weds Sreeja</div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Invitation;
