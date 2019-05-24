import React from "react";
import { Container, Row } from "react-bootstrap";
import TopBar from "./TopBar";

// Style
import "./index.scss";

//Images
import campaignlogo from "../images/campaign-logo.png";

export default function Layout({ children }) {
	return (
		<Container className="page homepage__content">
			<Row className="text-center">
				<TopBar />
				<img
					src={campaignlogo}
					alt="Build your own bonus"
					style={{
						width: "100%",
						maxWidth: "825px",
						padding: "15px 0"
					}}
				/>
			</Row>
		</Container>
	);
}
