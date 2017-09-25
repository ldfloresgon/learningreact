import React from "react";
import ProductItem from "./item";
import products from "../../api/products";
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

		this.setState((prevState) => {
			let newState = {
				items: [...prevState.items,
					newProduct],
				nextId : prevState.nextId + 1
			};

			if (sessionStorage){
				sessionStorage.setItem("productItems", JSON.stringify(newState.items));
			}

			return newState;
		});

		
	}

	componentDidMount(){
		let productItems = JSON.parse(sessionStorage.getItem("productItems")) || products.items;
		let nextId = productItems.length + 1 || 3;

		this.setState({
			items : productItems,
			nextId : nextId
		});
	}


	render(){
		return (
			<div>
				<Title title="Products Container with traditional state" />
				<ProductItem items={this.state.items} />              
				<AddProduct onAddProduct={this.onAddProduct} nextId={this.state.nextId} />
			</div>
		);
	}
}

export default Product;