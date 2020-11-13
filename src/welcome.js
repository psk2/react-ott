import React from "react";
import logo from "./Images/logo.png";
import { useHistory } from "react-router-dom";


function Welcome() {
    const history = useHistory();

    setTimeout(() => {
        history.push("/browse");
    }, 2000)
    return (
        <div className="container-div">
            <img className="welcome-logo" src={logo} alt="Club Card" />
        </div>
    );
}

export default Welcome;
