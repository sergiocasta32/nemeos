import React, { Component } from "react";
import { Demo1 } from "./demo1";
import { DemoChart } from "./demochart";
import "../../styles/dashboard.scss";

export const DashBoard = () => {
	return (
		<div className="dashboard">
			<div className="divdashboard">
				<Demo1 className="demoagenda" />
			</div>
			<div className="divchart">
				<DemoChart className="demografica" />
			</div>
		</div>
	);
};
