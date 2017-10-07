import React from "react";
import { connect } from "react-redux";
import { addProduct } from "../../../redux/actions";

//container component
class ProductContainer extends React.Component{
	constructor(props){
		super(props);
	}
	
	shouldComponentUpdate(nextProps){
		return this.props.items !== nextProps.items;
	}

	render(){
		let {items, onAddProduct, nextId} = this.props;

		let params = {
			items,
			onAddProduct,
			nextId
		};
        
		return(
			<div>
				{this.props.render(params)}
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
	}
});


export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);