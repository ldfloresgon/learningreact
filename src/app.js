import React, {Component} from "react";
import {Provider} from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "./redux/store/configureStore";
import initialState from "./redux/store/initialState";
import "./app.scss";
import * as Bootstrap from "react-bootstrap";
import ContainerExample from "./components/containerexample";
import HocExample from "./components/hocexample";
import routes, { RouteWithSubRoutes } from "./routes";
import Navigation from "./navigation";

let store = configureStore(initialState);

const App = () => {
	return (
		<Provider store={store}>
			<Router>
				<div>
					<Bootstrap.Jumbotron>
						<h1>Learning React</h1>
					</Bootstrap.Jumbotron>

					<Navigation />
					
					{routes.map((route, i) => (
						<RouteWithSubRoutes key={i} {...route}/>
					))}
				</div>				
			</Router>
		</Provider>            
	);
};

export default App;