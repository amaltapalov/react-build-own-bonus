import React from "react";
import { Container, Row } from "react-bootstrap";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import Start from "./components/Start";

// Style
import "./index.scss";

//Images
import campaignLogo from "./images/campaign-logo.png";

export default function Layout({ children }) {
	return (
		<Container className="page homepage__content">
			<Row className="d-flex text-center">
				<TopBar />
				<img
					src={campaignLogo}
					alt="Build your own bonus"
					style={{
						display: "block",
						width: "100%",
						maxWidth: "825px",
						margin: "0 auto",
						padding: "15px 0"
					}}
				/>
				<Start />
				<Footer />
			</Row>
		</Container>
	);
}
