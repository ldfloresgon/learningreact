import constants from "../constants";
import products from "../../api/products";

export const addProduct = (id, title) => {
	return {
		type: constants.ADD_PRODUCT, 
		payload: {id, title}
	};
};