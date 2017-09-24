import constants from "../constants";

export const addProduct = (id, title) => {
	return {
		type: constants.ADD_PRODUCT, 
		payload: {id, title}
	};
};