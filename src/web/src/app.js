import React from "react";
import {Provider} from "react-redux";
import { Router } from "react-router";
import store from "./redux/store/configureStore";
import "./app.scss";
import { createBrowserHistory } from "history";
import * as Bootstrap from "react-bootstrap";
import routes, { RouteWithSubRoutes } from "./routes";
import Navigation from "./navigation";

const App = () => {
	return (
		<Provider store={store}>
			<Router history={createBrowserHistory()}>
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