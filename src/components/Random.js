import React from "react";
import styled from "styled-components";

const Random = styled.img`
	display: flex;
	align-items: center;
	width: 100%;
	max-width: 500px;
	margin: 0 auto;
	z-index: 3;
`;

export default function() {
	return <Random />;
}
