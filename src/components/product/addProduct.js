import React from "react";
import { Button } from "react-bootstrap";

let AddProduct = ({onAddProduct = f=>f, nextId = 0}) => {
	let titleProduct = null;

	let onAddProductClick = () => {
		let title = titleProduct.value;

		if (title === ""){
			return;
		}

        onAddProduct(nextId, title);
	};
    
	return (
		<div>
			<input type="text" ref={(title) => titleProduct = title}/>
			<Button bsStyle="primary" onClick={onAddProductClick}>Add Product</Button>
		</div>
	);
};

export default AddProduct;