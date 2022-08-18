import React from "react";

import { Link } from "react-router-dom";
import groom from "./Images/groom.png";
import bride from "./Images/bride.png";
import Nav from "./Nav";

function Home() {
	return (
		<div className="adjust-center">
			<div className="logo">
				<Nav />
			</div>

			<div className="h-70 d-flex justify-content-center align-items-center adjust-center">
				<div>
					<div className="d-flex justify-content-center align-items-center heading">
						Whose Wedding ?
					</div>
					<div className="row d-flex justify-content-center align-items-center  profiles-row">
						<div className="">
							<Link to="/groom" className="profile">
								<div>
									<img
										className="profiles-gate-container"
										src={groom}
										width="120"
										height="120"
										alt="Subbu"
									/>
									<label className="profile-name">Subramanyam</label>
								</div>
							</Link>
						</div>
          				  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           				<div className="">
							<Link to="/bride" className="profile">
								<div>
									<img
										className="profiles-gate-container"
										src={bride}
										width="120"
										height="120"
										alt="Sreeja"
									/>
									<label className="profile-name">Sreeja</label>
								</div>
							</Link>
						</div>
					</div>
					<span className="d-flex justify-content-center invitation-heading">
						<Link to="/invitation"> Wedding Invitation </Link>
					</span>
				</div>
			</div>
		</div>
	);
}
export default Home;
