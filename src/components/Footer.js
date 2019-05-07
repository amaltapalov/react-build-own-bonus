import React from "react";
import { withRouter } from "react-router-dom";

const Footer = ({ match }) => (
	<div>
		<h1>{match.params.id}</h1>
	</div>
);

export default withRouter(Footer);
