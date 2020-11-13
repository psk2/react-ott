import React, { useState, useEffect } from "react";

import Home from "./Home";
import Welcome from "./welcome";


function Landing() {
    const [welcomeScreen, setWelcomeScreen] = useState(true)

	useEffect(() => {
		setTimeout(() => {
            setWelcomeScreen(false);
        }, 2000)
    }, []);
    
    return (
        <React.Fragment>
            {welcomeScreen ? <Welcome /> : <Home />}
        </React.Fragment>
    );
}

export default Landing;
