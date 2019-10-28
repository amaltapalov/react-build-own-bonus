import React from "react";
import { Container, Row } from "react-bootstrap";
import TopBar from "./components/TopBar";
import Content from "./components/Content";
import ModalBlock from "./components/ModalBlock";
import Footer from "./components/Footer";
import headingImage from "./images/campaign-logo.png";
import ImagesToPreload from "./data/imagesToPreload";
import options, { getRandomBonus } from "./data/options";

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

	generateRandomBonus = () => {
		this.setState({
			show: true,
			currentOption: getRandomBonus()
		});
	};

	componentDidMount() {
		window.__onload = function() {
			ImagesToPreload.forEach(image => {
				const img = new Image();
				img.src = image;
			});
		};
	}

	render() {
		return (
			<Container className="page homepage__content">
				<Row
					style={{
						overflow: "hidden",
						minHeight: "100vh",
						height: "100%",
						display: "flex",
						flexDirection: "column"
					}}
				>
					<TopBar />
					<div
						style={{
							maxWidth: "700px",
							margin: "0 auto"
						}}
					>
						<img src={headingImage} alt="Build Your own Bonus" />
					</div>
					<div style={{ flexGrow: "1" }}>
						<Content
							showModal={this.toggleModal}
							generateRandomBonus={this.generateRandomBonus}
						/>
					</div>

					<Footer
						optionData={this.state.currentOption}
						showTerms={this.state.currentOption.type === "bonus"}
					/>
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
