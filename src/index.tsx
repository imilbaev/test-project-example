import React from "react";
import ReactDOM from "react-dom";

const today = new Date();

const App = () => <h1>Test project! {today.toLocaleDateString()}</h1>;

ReactDOM.render(<App />, document.getElementById("root"));
