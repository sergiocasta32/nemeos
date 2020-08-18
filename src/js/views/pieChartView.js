import React, { Component } from "react";
import { PieChartComponent } from "../component/pieChart";
import { Nav } from "../component/navbarmenu";
import "../../styles/dashboard.scss";

export const PieChartView = () => {
	return (
		<div className="dashboard">
			<Nav />
			<div className="divpiechart">
				<PieChartComponent />
			</div>
		</div>
	);
};
