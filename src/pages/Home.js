import React from "react";
import styled from "styled-components";

const Button = styled.button`
	display: inline-block;
	border-radius: 1px;
	padding: 0.5rem 0;
	margin: 0.5rem 1rem;
	width: 11rem;
	background: transparent;
	color: red;
	border: 2px solid black;
`;

class Home extends React.Component {
	render() {
		return (
			<div>
				<h1>This is Home page</h1>
				<Button>Click Me</Button>
			</div>
		);
	}
}

export default Home;
