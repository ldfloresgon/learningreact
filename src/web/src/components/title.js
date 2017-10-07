import React from "react";
import { PageHeader } from "react-bootstrap";

//presentational component
const Title = ({title = "Default Title"}) => {
	return <PageHeader><small>{title}</small></PageHeader>;
};

export default Title;