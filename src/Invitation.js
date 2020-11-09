import React from "react";
import "./invitation.css";
import invitation from "./Images/invitation.jpg";
import Nav from "./Nav";

function Invitation() {
    return (
        <React.Fragment>
            <Nav />

            <div className="container">

                <div class="responsive" >
                    < div class="gallery" >
                        <img src={invitation}
                            alt="Cinque Terre" />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Invitation;