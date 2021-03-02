import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

import Search from "./Search";
import Details from "./Details";

const App = () => (
	<Router>
		<div>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
				</ul>
			</nav>

			<Switch>
				<Route path="/details/:npi">
					<Details />
				</Route>
				<Route path="/">
					<Search />
				</Route>
			</Switch>
		</div>
	</Router>
);

ReactDOM.render(<App />, document.getElementById("root"));
