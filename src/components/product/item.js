import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

//presentational component
const ProductItem = ({items = []}) => {
	let products = items.map((product, key) => 
	{
		return (        
			<ListGroup key={key}>
				<ListGroupItem>
					<div>Id : {product.id}</div>
					<div>Title: {product.title}</div>
				</ListGroupItem>
			</ListGroup>
		);
	});
    
	return (
		<div>
			{products}
		</div>
	);
};

export default ProductItem;