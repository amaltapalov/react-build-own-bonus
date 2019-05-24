import React from "react";
import { Container, Row, Modal, Button } from "react-bootstrap";
import styled from "styled-components";

import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import Start from "./components/Start";
import campaignLogo from "./images/campaign-logo.png";

// Style
import "./index.scss";

const questions = ["Question 1", "Question 2"];

const Logo = styled.img`
	display: block;
	width: 100%;
	max-width: 825px;
	margin: 0 auto;
	padding: 15px 0;
`;

class App extends React.Component {
	state = {
		show: false,
		currentQuestion: questions[0]
	};

	showModal = () => {
		this.setState({ show: true });
	};

	hideModal = () => {
		this.setState({ show: false });
	};

	changeQuestion = i => {
		this.setState({ currentQuestion: questions[i] });
	};

	render() {
		return (
			<Container className="page homepage__content">
				<Row className="d-flex text-center">
					<TopBar />
					<Logo src={campaignLogo} alt="Build your own bonus" />

					<Start showModal={this.showModal} />

					<Footer />
				</Row>
				{/* Modal start */}
				<Modal show={this.state.show} onHide={this.hideModal}>
					<h1>{this.state.currentQuestion}</h1>
					<Button onClick={() => this.changeQuestion(1)}>
						Change question
					</Button>
					<Button variant="secondary" onClick={this.hideModal}>
						Close
					</Button>
				</Modal>
				{/* Modal end */}
			</Container>
		);
	}
}

export default App;
