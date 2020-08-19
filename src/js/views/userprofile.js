import React, { Component, useContext, getStore } from "react";
import { Context } from "../store/appContext";
import { Nav } from "../component/navbarmenu";
import "../../styles/userprofile.scss";

export const UserProfile = () => {
	const { store, actions } = useContext(Context);

	function ready(fn) {
		if (document.readyState != "loading") {
			fn();
		} else {
			document.addEventListener("DOMContentLoaded", fn);
		}
	}

	ready(function() {
		console.log("Estoy aqui linea 11");

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
		new Chart(ctx).Radar(store.dataProfile.dataOverview, radarOpts);
	});

	function chart() {
		// TODO: Aqui se debe de analizar desde donde sellama a esta funcion "id" y hacer la llamada a la funcion ready pasandole el store del tipo de dato a mostrar ya almacenado en una variable

		console.log("Estoy aqui linea 11");

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
		var radar = new Chart(ctx).Radar(store.dataProfile.dataProjects, radarOpts);
	}

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
						<a onClick={chart}>Overview</a>
					</li>
					<li className="tab">
						<a onClick={chart}>Skills</a>
					</li>
					<li className="tab">
						<a onClick={chart}>Projects</a>
					</li>
					<li className="tab">
						<a onClick={chart}>Contact</a>
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
