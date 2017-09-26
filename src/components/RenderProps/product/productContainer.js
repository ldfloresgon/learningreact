import React from "react";
import products from "../../../api/products";

//container component
export default class ProductContainer extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			items : [], 
			nextId : 3
		};

		this.onAddProduct = this.onAddProduct.bind(this);
	}
	
	componentDidMount(){
		let productItems = JSON.parse(sessionStorage.getItem("productItems")) || products.items;
		let nextId = productItems.length + 1 || 3;
        
		this.setState({
			items : productItems,
			nextId : nextId
		});        
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
    
	render(){
		let state = this.state;
		let onAddProduct = this.onAddProduct;

		let params = {
			state,
			onAddProduct
		};
        
		return(
			<div>
				{this.props.children(params)}
			</div>
		);
	}
}