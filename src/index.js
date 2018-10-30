import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

// Appends App component to the "root" div in public/index.html
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
