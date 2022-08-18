import React from "react";
import "./App.css";
import Home from "./Home";
import BrideAndGroom from "./BrideAndGroom";
import Invitation from "./Invitation";
import Welcome from "./welcome";

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";

function App() {
	return (
		<div className="app">
			<Router>
				<Switch>
				<Route exact path="/">
						<Redirect to="/welcome" />
					</Route>
					<Route path="/groom">
						<BrideAndGroom />
					</Route>
					<Route path="/bride">
						<BrideAndGroom />
					</Route>
					<Route path="/invitation">
						<Invitation />
					</Route>
					<Route path="/browse">
						<Home />
					</Route>
					<Route path="/welcome">
						<Welcome />
					</Route>
				</Switch>
			</Router>
		</div >
	);
}

export default App;
