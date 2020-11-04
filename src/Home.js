import React from "react";

import { Link } from "react-router-dom";
import wi from "./Images/wi.jpg";
import psk from "./Images/psk.jpg";

function Home() {

    return (
        <div>
            <img src={wi} width="320" height="70" alt="" />

            <div class="h-70 d-flex justify-content-center align-items-center adjust-center">
                <div>
                    <div class="d-flex justify-content-center align-items-center heading">Whose Wedding ?</div>
                    <div class="row d-flex justify-content-center align-items-center  profiles-row">
                        <div class="profiles-gate-container">
                            <Link to="/bride">
                                <img src={psk} width="100" height="100" alt="" />
                            </Link>
                        </div>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <div class="profiles-gate-container">
                            <Link to="/bride">
                                <img src={psk} width="100" height="100" alt="" />
                            </Link>
                        </div>
                    </div>
                    <span class="d-flex justify-content-center invitation-heading">
                        <a href="#"> Wedding Invitation </a>
                    </span>
                </div>
            </div>
        </div>
    )
}
export default Home;

