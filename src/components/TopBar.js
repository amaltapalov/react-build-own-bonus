import React from "react";
import styled from "styled-components";

import casinoLogo from "../images/logo.svg";
const url = "https://www.planet7casino.com/";

const Bar = styled.div`
	display: block;
	text-align: center;
	padding: 0.6rem 0;
	background: #ce181e;
	@media (max-width: 768px) {
		padding: 0.6rem 7rem;
	}
`;

function TopBar() {
	return (
		<Bar>
			<a href={url}>
				<img
					src={casinoLogo}
					alt="Planet 7"
					style={{ width: "200px" }}
				/>
			</a>
		</Bar>
	);
}

export default TopBar;
