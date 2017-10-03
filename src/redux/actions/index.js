import { ADD_PRODUCT, REMOVE_ALL_PRODUCTS } from "../constants";

export const addProduct = (id, title) => {
	return {
		type: ADD_PRODUCT, 
		payload: {id, title}
	};
};

export const removeAllProducts = () => {
	return {
		type: REMOVE_ALL_PRODUCTS,
	};
};