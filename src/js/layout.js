import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";

import { Footer } from "./component/footer";
import { Demo1 } from "./component/demo1";
import { DemoChart } from "./component/demochart";
import { LoginSergio } from "./component/loginsergio";
import { DashBoard } from "./component/dashBoard";
import { Sign } from "./views/sign";
import { SignUpForm } from "./views/signUpForm";
import { UserProfileView } from "./views/userprofileview";
import { Nav } from "./component/navbarmenu";

//create your first component
export const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	return (
		<BrowserRouter basename={basename}>
			<ScrollToTop>
				<Nav />
				<Switch>
					<Route exact path="/" component={Sign} />
					<Route path="/signUpForm" component={SignUpForm} />
					<Route path="/dashBoard" component={DashBoard} />
					<Route path="/userprofileview" component={UserProfileView} />
				</Switch>
			</ScrollToTop>
		</BrowserRouter>
	);
};

export default injectContext(Layout);
