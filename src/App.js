import React from "react";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";

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
				<Route path="/about/:id?" component={About} />
				<Route path="/contact" component={Contact} />
				<Route component={ErrorPage} />
			</Switch>
		</Router>
	);
}

export default App;
