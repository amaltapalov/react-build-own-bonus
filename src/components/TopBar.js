import React from "react";
import styled from "styled-components";

import casinoLogo from "../images/logo.png";

const TopBar = styled.div`
	display: block;
	width: 100vw;
	padding: 10px 0;
	background: #ce181e;
`;

export default function() {
	return (
		<TopBar>
			<a href="https://www.planet7casino.com/">
				<img src={casinoLogo} alt="Planet 7" />
			</a>
		</TopBar>
	);
}
