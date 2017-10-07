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
			<ProductContainer render={({items, onAddProduct, nextId}) => (
				<div>
					<ProductItem items={items} />
					<AddProduct nextId={nextId} onAddProduct={onAddProduct}/>
				</div>
			)}/>
		</div>
	);

};

export default Product;
