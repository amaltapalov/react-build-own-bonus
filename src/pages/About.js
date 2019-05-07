import React from "react";
import { Link } from "react-router-dom";

const About = ({ match }) => {
	const { id } = match.params;
	return (
		<div>
			<Link to="/about/path1">Path 1</Link>
			<Link to="/about/path2">Path 2</Link>
			<Link to="/about/path3">Path 3</Link>
			<h1>This is About page</h1>
			<p>{id}</p>
		</div>
	);
};

export default About;
