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


export default initialState;