import products from "../../api/products";
import properties from "../../api/properties";

let initialState =
{
	products : {
		items : products.items,
		nextId : 3
	},
	properties : {
		items : properties.items,
		nextId: 3
	}
};


if (sessionStorage)
{
	let productItems = JSON.parse(sessionStorage.getItem("storeProductItems"));
	let nextId = productItems
		? productItems.length + 1 
		: 3;

	if (productItems){
		initialState.products.items = productItems;
		initialState.products.nextId = nextId;
	}
 
}

export default initialState;