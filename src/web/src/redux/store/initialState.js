import properties from "../../api/properties";

let initialState =
{
	products : {
		items : [],
		nextId : 3
	},
	properties : {
		items : properties.items,
		nextId: 3
	}
};

export default initialState;