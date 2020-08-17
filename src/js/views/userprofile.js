import React, { Component } from "react";
import { Nav } from "../component/navbarmenu";
import "../../styles/userprofile.scss";

export const UserProfile = () => {
	(function() {
		var colors = {
			secondary: "#ed4e7c",
			primary: "#36e2be"
		};

		function ready(fn) {
			if (document.readyState != "loading") {
				fn();
			} else {
				document.addEventListener("DOMContentLoaded", fn);
			}
		}

		ready(function() {
			var data = {
				labels: [
					"Intusion Prevention",
					"Bug Detection",
					"Computer Forensics",
					"Network Security",
					"Code Retirement"
				],
				datasets: [
					{
						data: [90, 70, 50, 35, 80],
						fillColor: "transparent",
						strokeColor: colors.secondary,
						pointColor: colors.secondary
					}
				]
			};

			var radarOpts = {
				pointLabelFontFamily: "'Roboto Condensed', 'Roboto', sans-serif",
				pointLabelFontStyle: "300",
				pointLabelFontSize: 14,
				pointLabelFontColor: "white",
				pointDotRadius: 4,
				angleLineColor: "rgba(255,255,255,0.1)",
				scaleLineColor: "rgba(255,255,255,0.1)",
				scaleOverride: true,
				scaleSteps: 2,
				scaleStepWidth: 50,
				showTooltips: false
			};

			var ctx = document.getElementById("skills-radar").getContext("2d");
			var radar = new Chart(ctx).Radar(data, radarOpts);
		});
	})();
	return (
		<div className="main">
			<div className="banner">
				<div className="banner-content">
					<h1>Rick Deckard</h1>
					<div className="location">Los Angeles, CA</div>
					<a className="button banner-button">Connect</a>
				</div>
			</div>
			<div className="content">
				<ul className="tabs">
					<li className="tab selected">
						<a>Overview</a>
					</li>
					<li className="tab">
						<a>Skills</a>
					</li>
					<li className="tab">
						<a>Projects</a>
					</li>
					<li className="tab">
						<a>Contact</a>
					</li>
				</ul>
				<div className="tab-panes">
					<div className="tab-pane">
						<h2>Skills</h2>
						<canvas className="skills-radar" id="skills-radar"></canvas>
						<h2>Bio</h2>
						<p>blablabla</p>
					</div>
				</div>
			</div>
		</div>
	);
};
