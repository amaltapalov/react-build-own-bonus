import React from "react";
import styled from "styled-components";

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

const TermsBg = styled.div`
	display: flex;
	position: absolute;
	top: 0;
	right: 0;
	transform: translateY(-100%);
	width: 100%;
	height: 65px;
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

const TermsButton = styled.img`
	display: ${props => (props.showTerms ? "block" : "none")};
	cursor: pointer;
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
		const terms = this.props.optionData.terms;
		return (
			<TermsContainer isVisible={this.state.isVisible}>
				<TermsContent>
					<TermsBg>
						<TermsButton
							onClick={this.toggleTerms}
							showTerms={this.props.showTerms}
							src={termsImage}
							alt="Terms"
						/>
					</TermsBg>
					<p
						style={{
							maxWidth: "1200px",
							padding: "0 1rem 0",
							margin: "0 auto"
						}}
					>
						{terms}
					</p>
				</TermsContent>
			</TermsContainer>
		);
	}
}

export default Terms;
