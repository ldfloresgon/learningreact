import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

//presentational component
const PropertyItem = ({items = []}) => {

	let properties = items.map((property, key) => 
	{
		return (
			<ListGroup key={key}>
				<ListGroupItem>
					<div>Id : {property.id}</div>
					<div>Description: {property.description}</div>
				</ListGroupItem>
			</ListGroup>        
		);
	});

	return (
		<div>
			{properties}
		</div>
	);
};

export default PropertyItem;