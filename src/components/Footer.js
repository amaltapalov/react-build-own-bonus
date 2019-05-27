import React from "react";
import styled from "styled-components";

import Terms from "./Terms";

const FooterContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Footer = () => (
	<FooterContainer>
		<Terms />
	</FooterContainer>
);

export default Footer;
