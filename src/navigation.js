import React from 'react';
import { withRouter  } from "react-router-dom";
import * as  Bootstrap from "react-bootstrap";


class Navigation extends React.Component{
    constructor(props){
        super(props);

        this.state = {
			selectedTab : localStorage.getItem("selectedTab") || "1"
        };

        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect = (selectedTab)  => {

        event.preventDefault();

        this.updateState(selectedTab);

        this.updateLocalStorage(selectedTab);

        this.loadPathFromNavigation(selectedTab);
    };
  
    updateState(selectedTab){
        this.setState((prevState) => {
            return {
                selectedTab : selectedTab
            }
        });
    }

    updateLocalStorage(selectedTab){
        if (localStorage){
            localStorage.setItem("selectedTab", selectedTab);
        }
    };

    loadPathFromNavigation(selectedTab){

        let child = this.navHeader.props.children.filter((child) => child.props.eventKey === selectedTab);

        let url = child[0].props.href || '/';

        this.props.history.push(url);
    };

    componentDidMount(){
        this.loadPathFromNavigation(this.state.selectedTab);
    };

    render(){
        return (
            <div>
                <Bootstrap.PageHeader><small>Patrones</small></Bootstrap.PageHeader>
                <Bootstrap.Row> 
                    <Bootstrap.Nav 
                        bsStyle="tabs" 
                        ref={(nav) => this.navHeader = nav} 
                        activeKey={this.state.selectedTab} 
                        onSelect={this.handleSelect}>

                        <Bootstrap.NavItem 
                            eventKey="1"
                            href="/hoc">High Order Component
                        </Bootstrap.NavItem>

                        <Bootstrap.NavItem 
                            eventKey="2" 
                            href="/container">Container Presentational Components
                        </Bootstrap.NavItem>
                    </Bootstrap.Nav>        
                </Bootstrap.Row>          
            </div>  
        )
    }

}

export default withRouter(Navigation);