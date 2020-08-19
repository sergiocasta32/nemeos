//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//include bootstrap npm library into the bundle
import "bootstrap/dist/css/bootstrap.css";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import Layout from "./layout";
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
//import Demo from "./component/demo";
//import DemoChart from "./component/demoChart";
import Paper from "@material-ui/core/Paper";

//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));
