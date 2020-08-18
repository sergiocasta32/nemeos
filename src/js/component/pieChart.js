import React from "react";

import PieChart, { Legend, Series, Tooltip, Format, Label, Connector, Export } from "devextreme-react/pie-chart";

import { Exercises } from "./demo-data//datapiechart.js";
import { Paper } from "@material-ui/core";

export class PieChartComponent extends React.Component {
	render() {
		return (
			<Paper>
				<PieChart
					id="pie"
					type="doughnut"
					title="% de ejercicio realizado"
					palette="Soft Pastel"
					dataSource={Exercises}>
					<Series argumentField="exerciseName" valueField="val">
						<Label visible={true} customizeText={this.customizeLabel}>
							<Connector visible={true} />
						</Label>
					</Series>
					<Export enabled={true} horizontalAlignment="center" />
					<Legend margin={50} horizontalAlignment="right" verticalAlignment="top" />
					<Tooltip enabled={true} customizeTooltip={this.customizeTooltip}>
						<Format type="percent" />
					</Tooltip>
				</PieChart>
			</Paper>
		);
	}

	customizeTooltip(arg) {
		return {
			text: ` ${(arg.percent * 100).toFixed(0)}%`
		};
	}
	customizeLabel(point) {
		return `${point.argumentText}: ${point.valueText}%`;
	}
}
