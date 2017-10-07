
import { ADD_PRODUCT, REMOVE_ALL_PRODUCTS, GET_PRODUCTS_INITIAL } from "../constants";

const products = (state = [], action) => {
	switch (action.type) {
	case GET_PRODUCTS_INITIAL:
		return Object.assign({},
			state,
			{
				items : action.payload.items,
				nextId : action.payload.items.length + 1
			}
		);
	case REMOVE_ALL_PRODUCTS:
		sessionStorage.removeItem("storeProductItems");

		return Object.assign(
			{}, 
			state,
			{
				items : action.payload.items,
				nextId : 3
			}
		);

	case ADD_PRODUCT:
	{
		return Object.assign({},
			state,
			{
				items : action.payload.items,
				nextId : action.payload.items.length + 1
			}
		);
	}
	default:
		return state;
	}
};

export default products;