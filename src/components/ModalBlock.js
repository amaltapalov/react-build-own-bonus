import React from "react";
import styled from "styled-components";
import { Modal } from "react-bootstrap";

import plateImage from "../images/plate.png";
import plateImageBonus from "../images/plateBonus.png";

const Plate = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 696px;
	height: 696px;
	background: url(${props =>
		props.question ? plateImage : plateImageBonus});
	background-position: center center;
	background-size: cover;
	background-repeat: no-repeat;
	padding: ${props => (props.question ? "3.5" : "1")}rem;

	@media (max-width: 696px) {
		width: calc(100vw - 1rem);
		height: calc(100vw - 1rem);
	}
`;

const PlateRow = styled.div`
	margin-bottom: ${props => (props.main ? "1.2rem" : "0.6rem")};
	@media (max-width: 696px) {
		margin-bottom: 0.45rem;
	}
`;

const PlateButton = styled.button`
	border: none;
	background: none;
	cursor: pointer;
	&:active,
	&:focus {
		outline: none;
	}
`;

export default function ModalBlock({ optionData, show, onHide, selectAnswer }) {
	const { type } = optionData;
	console.log(type);
	return (
		<Modal show={show} onHide={onHide} animation={false}>
			<Plate question={type === "question"}>
				{type === "question" ? (
					<React.Fragment>
						<PlateRow main={true}>
							<img src={optionData.title} alt="title" />
						</PlateRow>
						{optionData.questions.map(question => (
							<PlateRow>
								<PlateButton
									onClick={() => {
										selectAnswer(question.to);
									}}
								>
									<img src={question.image} alt="title" />
								</PlateButton>
							</PlateRow>
						))}
					</React.Fragment>
				) : (
					<div>
						<a href={optionData.to}>
							<img src={optionData.image} alt="123" />
						</a>
					</div>
				)}
			</Plate>
		</Modal>
	);
}
