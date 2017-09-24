import React from "react";
import * as Bootstrap from "react-bootstrap";
import ComposeProduct from "./HOC/products";
import ComposeProperty from "./HOC/properties";

const HocExmaple = () => {
	return <Bootstrap.Row className="show-grid"> 
		<Bootstrap.Col md={6} mdPush={6}><ComposeProperty/></Bootstrap.Col>
		<Bootstrap.Col md={6} mdPull={6}><ComposeProduct /></Bootstrap.Col>                        
	</Bootstrap.Row>;
};

export default HocExmaple;