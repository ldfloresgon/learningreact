import React from "react";
import * as Bootstrap from "react-bootstrap";
import Product from "./RenderProps/product";

const RenderPropsExample = () => {
	return <Bootstrap.Row className="show-grid"> 
		<Bootstrap.Col md={6} mdPush={6}></Bootstrap.Col>
		<Bootstrap.Col md={6} mdPull={6}><Product /></Bootstrap.Col>
	</Bootstrap.Row>;
};

export default RenderPropsExample;