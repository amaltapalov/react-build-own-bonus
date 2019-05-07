import React from "react";
import { Link } from "react-router-dom";

const Button = ({ title, onClick }) => <Link to={title}>{title}</Link>;

export default Button;
