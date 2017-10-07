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

	shouldComponentUpdate(nextProps, nextState){
		return this.state.data.items !== nextState.data.items;
	}

	componentDidMount(){
		this.setState({
			data : properties
		});
	}

	render(){
		return (
			<div>
				<Title title="Properties Container with traditional state" />
				<PropertyItem items={this.state.data.items}/>
			</div>
		);
	}

}