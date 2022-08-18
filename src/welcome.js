import React from "react";
// import logo from "./Images/logo.png";
import logoSuSree from "./Images/logoSreeja2.png";
import { useHistory } from "react-router-dom";


function Welcome() {
    const history = useHistory();

    setTimeout(() => {
        history.push("/browse");
    }, 3000)
    return (
        <div className="container-div">
            <img className="welcome-logo" src={logoSuSree} alt="Club Card" />
        </div>
    );
}

export default Welcome;
