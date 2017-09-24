import {compose} from "recompose";
import PropertyItem from "../../property/item";
import { withRedux, withTitle } from "../";

let mapStateToProps = (state) => {
	return {
		items: state.properties.items || []
	};
};

let propertyWithRedux = compose(
	withRedux
)(PropertyItem, mapStateToProps);

let ComposeProperty = compose(
	withTitle    
)(propertyWithRedux, "Properties HOC");

export default ComposeProperty;