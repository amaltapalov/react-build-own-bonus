import React from "react";
import styled from "styled-components";

import TermsImage from "../images/terms.png";

const Footer = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	width: 100vw;
	height: 75px;
	overflow: hidden;
	background-image: url(${TermsImage});
	z-index: 5;
`;

export default function() {
	return <Footer>Terms</Footer>;
}
