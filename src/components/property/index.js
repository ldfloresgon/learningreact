import React from "react";
import PropertyItem from "./item";
import properties from "../../api/properties";
import Title from "../title";

//container component
export default class Property extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			data: []
		};
	}

	componentDidMount(){
		this.setState({
			data : properties
		});
	}

	render(){

		return (
			<div>
				<Title title="Properties" />
				<PropertyItem items={this.state.data.items}/>
			</div>
		);
	}

}