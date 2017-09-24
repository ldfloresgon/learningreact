import React, {Component} from "react";
import {Provider} from "react-redux";
import configureStore from "./redux/store/configureStore";
import initialState from "./redux/store/initialState";
import "./app.scss";
import * as Bootstrap from "react-bootstrap";
import ContainerExample from "./components/containerexample";
import HocExample from "./components/hocexample";

let store = configureStore(initialState);

const App = () => {
	return (
		<Provider store={store}>
			<div>
				<Bootstrap.Jumbotron>
					<h1>Learning React</h1>
				</Bootstrap.Jumbotron>

				<ContainerExample />
				<HocExample />
			</div>
		</Provider>            
	);
};

export default App;