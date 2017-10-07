import React from "react";
import { withRouter } from "react-router";
import * as  Bootstrap from "react-bootstrap";


let pages = [
	{
		"eventKey" : "1",
		"url" : "/hoc",
		"title" : "High Order Component"
	},
	{
		"eventKey" : "2",
		"url" : "/container",
		"title" : "Container Presentational Components"
	},
	{
		"eventKey" : "3",
		"url" : "/render-props",
		"title" : "Render props"
	}
];

class Navigation extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			selectedTab : sessionStorage.getItem("selectedTab") || "1"
		};

		this.handleSelect = this.handleSelect.bind(this);
	}


	shouldComponentUpdate(nextProps){
		return nextProps.location.pathname !== this.props.location.pathname;
	}

	componentWillReceiveProps(nextProps){
		let page = pages.filter((page) => page.url == nextProps.location.pathname);
		if (page){
			let actualselectedTab = this.state.selectedTab;

			if (actualselectedTab !== page[0].eventKey){
				this.linkTo(page[0].eventKey);
			}
		}
	}

	handleSelect(selectedTab){
		this.linkTo(selectedTab);
	}
  
	linkTo(selectedTab){
		this.updateState(selectedTab);
		
		this.updateSessionStorage(selectedTab);

		this.loadPathFromNavigation(selectedTab);
	}

	updateState(selectedTab){
		this.setState({
			selectedTab : selectedTab			
		});
	}

	updateSessionStorage(selectedTab){
		if (sessionStorage){
			sessionStorage.setItem("selectedTab", selectedTab);
		}
	}

	loadPathFromNavigation(selectedTab){

		let child = this.navHeader.props.children.filter((child) => child.props.eventKey === selectedTab);

		let url = child[0].props.href || "/";

		this.props.history.push(url);
	}

	componentDidMount(){
		this.loadPathFromNavigation(this.state.selectedTab);
	}

	render(){
		let navItems = pages.map((page, index) => {
			return (<Bootstrap.NavItem key={index}
				eventKey={page.eventKey}
				href={page.url}>{page.title}
			</Bootstrap.NavItem>);
		});
		return (
			<div>
				<Bootstrap.PageHeader><small>Patrones</small></Bootstrap.PageHeader>
				<Bootstrap.Row> 
					<Bootstrap.Nav 
						bsStyle="tabs" 
						ref={(nav) => this.navHeader = nav} 
						activeKey={this.state.selectedTab} 
						onSelect={this.handleSelect}>

						{navItems}

					</Bootstrap.Nav>        
				</Bootstrap.Row>          
			</div>  
		);
	}

}

export default withRouter(Navigation);