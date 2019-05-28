import React from "react";
import { Container, Row } from "react-bootstrap";

import TopBar from "./components/TopBar";
import Content from "./components/Content";
import ModalBlock from "./components/ModalBlock";
import Footer from "./components/Footer";

// Images
import headingImage from "./images/campaign-logo.png";

import options from "./data/options";

class App extends React.Component {
	state = {
		show: false,
		currentOption: options[0]
	};

	toggleModal = () => {
		this.setState({
			show: !this.state.show,
			currentOption: options[0]
		});
	};

	selectAnswer = id => {
		this.setState({
			currentOption: options[id]
		});
	};

	render() {
		return (
			<Container className="page homepage__content">
				<Row className="d-block" style={{ overflow: "hidden" }}>
					<TopBar />
					<div
						style={{
							maxWidth: "866px",
							margin: "0 auto"
						}}
					>
						<img src={headingImage} alt="Build Your own Bonus" />
					</div>
					<Content showModal={this.toggleModal} />
					<Footer optionData={this.state.currentOption} />
				</Row>

				<ModalBlock
					optionData={this.state.currentOption}
					selectAnswer={this.selectAnswer}
					show={this.state.show}
					onHide={this.toggleModal}
				/>
			</Container>
		);
	}
}

export default App;
