import {combineReducers} from "redux";
import products from "./products";
import properties from "./properties";

const rootReducer = combineReducers(
	{
		products,
		properties
	}
);

export default rootReducer;