import React from "react";
import { addProduct } from "../../../redux/actions";
import { compose } from "recompose";
import ProductItem from "../../product/item";
import { withRedux, withTitle } from "../";
import AddProduct from "../../product/addProduct";

let mapStateToProps = (state) => {
	return {
		items: state.products.items || [],
		nextId: state.products.nextId || 0
	};
};

let mapDispatchToProps = dispatch => ({
	onAddProduct(id, title){
		dispatch(addProduct(id, title));
	}
});

let WithAddProductRedux = compose(
	withRedux
)(AddProduct, mapStateToProps, mapDispatchToProps );

let withAddProduct = (WrapperComponent) => (props) =>  {
	return (
		<div>
			<WrapperComponent props={props} />
			<WithAddProductRedux />
		</div>
	)
};

let productWithRedux = compose(	
	withAddProduct,
	withRedux
)(ProductItem, mapStateToProps, mapDispatchToProps);

let ComposeProduct = compose(
	withTitle
)(productWithRedux, "Products");

export default ComposeProduct;