import { ADD_PRODUCT, REMOVE_ALL_PRODUCTS, GET_PRODUCTS_INITIAL } from "../constants";
import HttpClient from "../../httpClient";
import { endpointapi } from "../../config";

let httpClient = new HttpClient(endpointapi);

export const addProduct = (id, title) => {
	return dispatch => {
		httpClient
			.post("/api/products", {id, title}, (res) => {
				return dispatch({
					type: ADD_PRODUCT,
					payload : res.data
				});
			});
	};
};

export const removeAllProducts = () => {
	return dispatch => {
		httpClient.delete("/api/products", (res) => {
			return dispatch({
				type: REMOVE_ALL_PRODUCTS,
				payload : res.data
			});
		});
	};
};

export const getProductsInitial = () => {
	return dispatch => {
		httpClient.get("/api/products", (res) => {
			return dispatch({
				type: GET_PRODUCTS_INITIAL,
				payload : res.data
			});
		});
	};
};