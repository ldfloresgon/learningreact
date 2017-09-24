import constants from "../constants";

const products = (state = [], action) => {
	switch (action.type) {
	case constants.ADD_PRODUCT:
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