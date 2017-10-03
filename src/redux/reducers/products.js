
import { ADD_PRODUCT, REMOVE_ALL_PRODUCTS } from "../constants";
import productsApi from "../../api/products";

const products = (state = [], action) => {
	switch (action.type) {

	case REMOVE_ALL_PRODUCTS:
		sessionStorage.removeItem("storeProductItems");

		return Object.assign(
			{}, 
			state,
			{
				items : productsApi.items,
				nextId : 3
			}
		);

	case ADD_PRODUCT:
	{
		let id = action.payload.id;
		let title = action.payload.title;

		let item = {id, title};
		
		let newState = Object.assign(
			{}, 
			state, {
				items : [
					...state.items,
					item
				],
				nextId : state.nextId + 1
			}
		);

		if (sessionStorage){
			sessionStorage.setItem("storeProductItems", JSON.stringify(newState.items));
		}

		return newState;
	}
	default:
		return state;
	}
};

export default products;