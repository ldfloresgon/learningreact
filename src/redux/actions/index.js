import constants from "../constants";

export const addProduct = (id, title) => {
	return {
		type: constants.ADD_PRODUCT, 
		payload: {id, title}
	};
};

export const removeAllProducts = () => {
	return {
		type: constants.REMOVE_ALL_PRODUCTS,
	};
};