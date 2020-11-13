import React from "react";
import logo from "./Images/logo.png";


function Welcome() {
    return (
        <div className="container-div">
            <img className="welcome-logo" src={logo} alt="Club Card" />
        </div>
    );
}

export default Welcome;
