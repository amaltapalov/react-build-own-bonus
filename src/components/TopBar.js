import React from "react";
import styled from "styled-components";

import casinoLogo from "../images/logo.png";
const url = "https://www.planet7casino.com/";

const Bar = styled.div`
	display: block;
	text-align: center;
	padding: 1rem 0;
	background: #ce181e;
	@media (max-width: 768px) {
		padding: 1rem 6rem;
	}
`;

function TopBar() {
	return (
		<Bar>
			<a href={url}>
				<img src={casinoLogo} alt="Planet 7" />
			</a>
		</Bar>
	);
}

export default TopBar;
