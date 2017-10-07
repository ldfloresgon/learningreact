import React from "react";
import { Button } from "react-bootstrap";
import ProductItem from "./item";
import Title from "../title";
import AddProduct from "./addProduct";
import { connect } from "react-redux";
import { addProduct, removeAllProducts } from "../../redux/actions";

//container component
class Product extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return (			
			<div>
				<Title title="Products Container with traditional state" />
				<ProductItem items={this.props.items} />              
				<AddProduct onAddProduct={this.props.onAddProduct} nextId={this.props.nextId} />
				<br/>
				<Button bsStyle="warning" onClick={this.props.removeAllProducts}>Restart products from initial state</Button>
			</div>
		);
	}
}


let mapStateToProps = (state) => {
	return {
		items : state.products.items,
		nextId : state.products.nextId || 0
	};
};

let mapDispatchToProps = (dispatch) => ({
	onAddProduct(id, title){
		dispatch(addProduct(id,title));
	},
	removeAllProducts(){
		dispatch(removeAllProducts());
	}
});

export default connect(mapStateToProps,mapDispatchToProps)(Product);