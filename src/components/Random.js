import React from "react";
import styled from "styled-components";

const RandomContainer = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	max-width: 500px;
	margin: 0 auto;
	z-index: 3;
`;

function Random() {
	return <RandomContainer />;
}

export default Random;
