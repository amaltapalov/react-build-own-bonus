import React from "react";
import styled from "styled-components";

// Images
import startImage from "../images/start.png";
import randomImage from "../images/random.png";

const Start = styled.div`
	position: relative;
	top: 40px;
	display: block;
	width: 100%;
	max-width: 800px;
	margin: 0 auto;
	z-index: 2;
	cursor: pointer;
`;

const Random = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100px;
	max-width: 500px;
	margin: 0 auto;
	z-index: 3;
	cursor: pointer;
`;

export default function() {
	return (
		<Start>
			<img src={startImage} alt="Start Build Your Bonus" />
			<Random>
				<img src={randomImage} alt="Generate a Random Bonus" />
			</Random>
		</Start>
	);
}
