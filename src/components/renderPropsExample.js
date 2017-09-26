import React from "react";
import * as Bootstrap from "react-bootstrap";

const RenderPropsExample = () => {
	return <Bootstrap.Row className="show-grid"> 
		<Bootstrap.Col md={6} mdPush={6}><span>Comming soon..</span></Bootstrap.Col>               
	</Bootstrap.Row>;
};

export default RenderPropsExample;