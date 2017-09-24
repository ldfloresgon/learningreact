import React from "react";
import { Route } from "react-router-dom";
import ContainerExample from "./components/containerexample";
import HocExample from "./components/hocexample";

const routes = [
	{ 
		path: "/hoc",
		component: HocExample
	},
	{
		path: "/container",
		component:  ContainerExample
	}
];


export const RouteWithSubRoutes = (route) => (
	<Route path={route.path} render={props => (
		<route.component {...props} routes={route.routes}/>
	)}/>
);

export default routes;