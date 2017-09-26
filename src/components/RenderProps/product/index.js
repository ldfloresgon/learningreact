import React from "react";
import ProductContainer from "./productContainer";
import ProductItem from "../../product/item";
import AddProduct from "../../product/addProduct";
import Title from "../../title";

//render props pattern
const Product  = () => {
	return (
		<div>
			<Title title="Product with render props" />
			<ProductContainer>
				{({state, onAddProduct}) => (
					<div>
						<ProductItem items={state.items} />
						<AddProduct nextId={state.nextId} onAddProduct={onAddProduct}/>
					</div>
				)}
			</ProductContainer>
		</div>
	);

};

export default Product;
