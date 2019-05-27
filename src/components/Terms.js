import React from "react";
import styled from "styled-components";
import TermsData from "../data/terms";

// import termsBg from "../images/mainBackground.jpg";
import termsImage from "../images/terms.png";
import footerBg from "../images/termsBg.png";

const TermsContainer = styled.div`
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	background: #ec1c24;
	color: #fff;
	font-size: 14px;
	transform: ${props =>
		props.isVisible ? "translateY(0)" : "translateY(100%)"};
	transition: 0.5s;
	z-index: 6;
`;

const TermsContent = styled.div`
	position: relative;
	margin: 0 auto;
	padding: 2rem 0 0.5rem;
`;

const TermsButton = styled.button`
	position: absolute;
	top: 0;
	right: 0;
	transform: translateY(-100%);
	width: 100%;
	height: 65px;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	border: none;
	background: url(${footerBg}) center center / contain repeat-x;
	color: #95afcb;
	&:active,
	&:focus {
		outline: none;
	}
	@media (max-width: 768px) {
		right: 50%;
		transform: translateX(50%) translateY(-100%);
	}
`;

class Terms extends React.Component {
	state = {
		isVisible: false
	};

	toggleTerms = () => {
		this.setState({
			isVisible: !this.state.isVisible
		});
	};

	render() {
		return (
			<TermsContainer isVisible={this.state.isVisible}>
				<TermsContent>
					<TermsButton onClick={this.toggleTerms}>
						<img src={termsImage} alt="Terms" />
					</TermsButton>
					<TermsData />
				</TermsContent>
			</TermsContainer>
		);
	}
}

export default Terms;
