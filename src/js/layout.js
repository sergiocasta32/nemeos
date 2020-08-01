import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Calendar } from "./component/calendar";
import { Calendar2 } from "./component/calendar2";

import { RingChart } from "./component/ringchart";
import { RingChart2 } from "./component/ringchart2";
import { LineChart2 } from "./component/linechart2";
import { LineChart } from "./component/linechart";
import { Footer } from "./component/footer";
import { Demo1 } from "./component/demo1";
import { DemoChart } from "./component/demochart";
import { LoginSergio } from "./component/loginsergio";

//create your first component
export const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-auto" style={{ overflow: "scroll" }}>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Demo1 />
					<DemoChart />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/demo" component={Demo} />
						<Route path="/single" component={Single} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
