import React from "react";
import { connect } from "react-redux";
import ProductItem from "./item";
import products from "../../api/products";
import { addProduct } from "../../redux/actions";
import Title from "../title";
import AddProduct from "./addProduct";

//container component
class Product extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			items : [],
			nextId : 3
		};

		this.onAddProduct = this.onAddProduct.bind(this);
	}

	onAddProduct(nextId, title){
		
		let id = nextId; 
		let newProduct = {id, title};

		this.setState((prevState, props) => {
			return {
				items: [...prevState.items,
					newProduct],
				nextId : prevState.nextId + 1
			};
		});
	}

	componentDidMount(){
		this.setState({
			items : products.items
		});
	}


	render(){
		return (
			<div>
				<Title title="Products" />
				<ProductItem items={this.state.items} />              
				<AddProduct onAddProduct={this.onAddProduct} nextId={this.state.nextId} />
			</div>
		);
	}
}

export default Product;