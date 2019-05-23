import React from "react";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./pages/Home";

function App() {
	return (
		<Router>
			<div>
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/contact">Contact</Link>
			</div>
			<Switch>
				<Route exact path="/" component={Home} />
			</Switch>
		</Router>
	);
}

export default App;
