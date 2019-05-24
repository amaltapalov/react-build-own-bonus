import React from "react";
import { Container, Row, Modal, Button } from "react-bootstrap";
import styled from "styled-components";

import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import Start from "./components/Start";
import campaignLogo from "./images/campaign-logo.png";

import button1 from "./images/buttons/button-1.png";
import button2 from "./images/buttons/button-2.png";
import button3 from "./images/buttons/button-3.png";
import button4 from "./images/buttons/button-4.png";
import button5 from "./images/buttons/button-5.png";
import button6 from "./images/buttons/button-6.png";
import button7 from "./images/buttons/button-7.png";
import button8 from "./images/buttons/button-8.png";
import button9 from "./images/buttons/button-9.png";
import button10 from "./images/buttons/button-10.png";

// Style
import "./index.scss";

const questions = [button1, button2];

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
					<img src={this.state.currentQuestion} alt="" />
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
