import React from "react";
import * as Bootstrap from "react-bootstrap";
import ComposeProduct from "./HOC/products";
import ComposeProperty from "./HOC/properties";

const HocExmaple = () => {
	return <Bootstrap.Panel header="HOC">
		<Bootstrap.Row className="show-grid"> 
			<Bootstrap.Col md={6} mdPush={6}><ComposeProperty/></Bootstrap.Col>
			<Bootstrap.Col md={6} mdPull={6}><ComposeProduct /></Bootstrap.Col>                        
		</Bootstrap.Row>
	</Bootstrap.Panel>;
};

export default HocExmaple;