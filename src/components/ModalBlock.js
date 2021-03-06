import React from "react";
import styled from "styled-components";
import { Modal } from "react-bootstrap";
import plateImage from "../images/plate.png";
import plateImageBonus from "../images/plateBonus.png";
import closeImage from "../images/closeButton.svg";

const CloseButton = styled.button`
	position: absolute;
	top: 2rem;
	right: 2rem;
	display: block;
	width: 40px;
	height: 40px;
	background: url(${closeImage}) center center / cover no-repeat;
	border: none;
	outline: none;
	cursor: pointer;
	&:active,
	&:focus {
		outline: none;
	}

	@media (max-width: 751px) {
		top: 2rem;
		right: 2rem;
		width: 11vw;
		max-width: 30px;
		height: 11vw;
		max-height: 30px;
	}
`;

const Plate = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 650px;
	height: 650px;
	background: url('${props => (props.question ? plateImage : plateImageBonus)}');
	background-position: center center;
	background-size: cover;
	background-repeat: no-repeat;
	padding: ${props => (props.question ? "3.5" : "1")}rem;

	@media (max-width: 650px) {
		width: calc(100vw - 1rem);
		height: calc(100vw - 1rem);
		padding: ${props => (props.question ? "3" : "1")}rem;
	}
	@media (max-width: 400px) {
		padding: ${props => (props.question ? "2.5" : "1")}rem;
	}
`;

const PlateRow = styled.div`
	margin-bottom: ${props => (props.main ? "1.2rem" : "0.6rem")};
	@media (max-width: 696px) {
		margin-bottom: 0.5rem;
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
						{optionData.questions.map((question, i) => (
							<PlateRow key={i}>
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
			<CloseButton onClick={onHide} />
		</Modal>
	);
}
