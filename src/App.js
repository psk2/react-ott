import React from "react";
import "./App.css";
import Home from "./Home";
import Bride from "./Bride";
import Invitation from "./Invitation";


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
						<Redirect to="/browse" />
					</Route>
					<Route path="/groom">
						<Bride />
					</Route>
					<Route path="/bride">
						<Bride />
					</Route>
					<Route path="/invitation">
						<Invitation />
					</Route>
					<Route path="/">
						<Home />
					</Route>
					<Route path="/browse">
						<Home />
					</Route>
				</Switch>
			</Router>
		</div >
	);
}

export default App;
