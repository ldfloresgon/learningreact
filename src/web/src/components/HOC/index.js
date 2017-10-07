import React from "react";
import Title from "../title";
import { connect } from "react-redux";

export let withTitle = (WrapperComponent, title) => (props) => {
	return( 
		<div>
			<Title title={title}/>
			<WrapperComponent {...props}/>        
		</div>
	);
};

export let withRedux = (WrapperComponent, mapStateToProps, mapDispatchToProps) => {
	let enhancementComponent = class EnhancementComponent extends React.Component{
		render(){
			return (
				<WrapperComponent {...this.props} items={this.props.items}/>
			);
		}
	};

	return connect(mapStateToProps,mapDispatchToProps)(enhancementComponent);
};