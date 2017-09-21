import React from "react";
import * as Bootstrap from "react-bootstrap";
import Product from "./product";
import Property from "./property";

const ContainerExample = () => {
	return <Bootstrap.Panel header="Container presentational component">
		<Bootstrap.Row className="show-grid"> 
			<Bootstrap.Col md={6} mdPush={6}><Property /></Bootstrap.Col>
			<Bootstrap.Col md={6} mdPull={6}><Product /></Bootstrap.Col>
		</Bootstrap.Row>
	</Bootstrap.Panel>;
};

export default ContainerExample;