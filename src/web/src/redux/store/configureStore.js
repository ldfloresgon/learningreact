import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import thunkMiddleware from "redux-thunk";
import initialState from "./initialState";
import { getProductsInitial } from "../actions";

let store = createStore(
	rootReducer,
	initialState,
	applyMiddleware(
		thunkMiddleware
	)
);

store.dispatch(getProductsInitial());

export default store;