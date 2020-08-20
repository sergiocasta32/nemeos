import React, { Component, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Nav } from "../component/navbarmenu";
import "../../styles/userprofile.scss";

export const UserProfile = () => {
	const { store, actions } = useContext(Context);
	const [header, setHeader] = React.useState("");

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

	function ready(fn) {
		if (document.readyState != "loading") {
			fn();
		} else {
			document.addEventListener("DOMContentLoaded", fn);
		}
	}

	ready(function() {
		document.getElementById("header-tab").innerText = "Personalidad";

		var ctx = document.getElementById("skills-radar").getContext("2d");
		new Chart(ctx).Radar(store.dataProfile.dataPersonality, radarOpts);
	});

	function chart() {
		var data = "";

		if (event.srcElement.id == "personality") {
			data = store.dataProfile.dataPersonality;
		} else if (event.srcElement.id == "motivation") {
			data = store.dataProfile.dataMotivation;
		} else if (event.srcElement.id == "projects") {
			data = store.dataProfile.dataProjects;
		} else {
			data = store.dataProfile.dataContact;
		}

		const value = event.srcElement.outerText;

		document.getElementById("header-tab").innerText = value;

		var ctx = document.getElementById("skills-radar").getContext("2d");
		new Chart(ctx).Radar(data, radarOpts);
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
					<li className="tab">
						<a id="personality" onClick={chart}>
							Personalidad
						</a>
					</li>
					<li className="tab">
						<a id="motivation" onClick={chart}>
							Motivación
						</a>
					</li>
				</ul>
				<div className="tab-panes">
					<div className="tab-pane">
						<h2 id="header-tab">{header}</h2>
						<canvas className="skills-radar" id="skills-radar"></canvas>
						<h2>Bio</h2>
						<p>blablabla</p>
					</div>
				</div>
			</div>
		</div>
	);
};
