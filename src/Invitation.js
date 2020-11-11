import React from "react";
import "./invitation.css";
import invitation from "./Images/invitation.jpg";
import Nav from "./Nav";

function Invitation() {
    return (
        <React.Fragment>
            <Nav />
            <div className="container">
                <div className="responsive" >
                    <div className="gallery" >
                        <img src={invitation}
                            alt="Invitation" />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Invitation;