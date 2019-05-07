import React from "react";
import Button from "../components/Button";

const Home = () => (
	<div>
		<h1>This is Home page</h1>
		<Button title="Click me" onClick={() => console.log("hi")} />
	</div>
);

export default Home;
