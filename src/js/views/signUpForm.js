import React, { useState } from "react";
// import "../../styles/sign.scss";
import "../../styles/signupform.scss";
export function SignUpForm() {
	const [age, setAge] = React.useState("");
	const [errorAge, setErrorAge] = React.useState(null);
	const [height, setHeight] = React.useState("");
	const [errorHeight, setErrorHeight] = React.useState(null);
	const [weight, setWeight] = React.useState("");
	const [errorWeight, setErrorWeight] = React.useState(null);
	const [dedication, setDedication] = React.useState("");
	const [errorDedication, setErrorDedication] = React.useState(null);
	const [option, setOption] = React.useState(option);
	const [error, setError] = React.useState(null);

	function handleSubmit(event) {
		event.preventDefault();
		alert("You are submitting " + age + height + weight + dedication + option);
	}
	function handleInput(event) {
		const integerPattern = /^[0-9\b]+$/;
		const floatPattern = /^[-+]?[0-9]+\.[0-9]+$/;
		const name = event.target.name;
		const value = event.target.value;

		if (name == "age" && (value === "" || integerPattern.test(value))) {
			setAge(value);
			setErrorAge(null);
		} else if (name == "age" && (value !== "" || !integerPattern.test(value))) {
			setAge(value);
			setErrorAge("Tiene que introducir un número entero.");
		}
		if (name == "height" && (value === "" || integerPattern.test(value))) {
			setHeight(value);
			setErrorHeight(null);
		} else if (name == "height" && (value !== "" || !integerPattern.test(value))) {
			setHeight(value);
			setErrorHeight("Tiene que introducir un número entero.");
		}
		if (name == "weight" && (value === "" || floatPattern.test(value))) {
			setWeight(value);
			setErrorWeight(null);
		} else if (name == "weight" && (value !== "" || !floatPattern.test(value))) {
			setWeight(value);
			setErrorWeight("Tiene que introducir un número decimal.");
		}
		if (name == "dedication" && (value === "" || integerPattern.test(value))) {
			setDedication(value);
			setErrorDedication(null);
		} else if (name == "dedication" && (value !== "" || !integerPattern.test(value))) {
			setDedication(value);
			setErrorDedication("Tiene que introducir un número entero.");
		}
	}

	function handleChangeOption(event) {
		setOption(event.target.value);
	}

	return (
		<div id="form-view" className="container h-100">
			<div className="row h-100 justify-content-center align-items-center">
				<div className="col-12 col-sm-6 col-md-8 col-lg-6 h-75 form-box">
					<div className="form-snip">
						<div className="form-space">
							<div className="form-data">
								<div className="form-group">
									<label htmlFor="user" className="label">
										Edad
									</label>
									<form onSubmit={handleSubmit}>
										<input
											id="age"
											className="imput"
											name="age"
											type="text"
											onChange={handleInput}
											value={age}
											required
										/>
										{errorAge && (
											<label style={{ color: "red" }} htmlFor="age">
												{errorAge}
											</label>
										)}
										<label htmlFor="user" className="label">
											Altura
										</label>
										<input
											id="height"
											className="imput"
											name="height"
											type="text"
											onChange={handleInput}
											value={height}
											required
										/>
										{errorHeight && (
											<label style={{ color: "red" }} htmlFor="height">
												{errorHeight}
											</label>
										)}
										<label htmlFor="user" className="label">
											Peso
										</label>
										<input
											id="weight"
											className="imput"
											name="weight"
											type="text"
											onChange={handleInput}
											value={weight}
											required
										/>
										{errorWeight && (
											<label style={{ color: "red" }} htmlFor="weight">
												{errorWeight}
											</label>
										)}
										<label htmlFor="user" className="label">
											Dedicacion
										</label>
										<input
											id="dedication"
											className="imput"
											name="dedication"
											type="text"
											onChange={handleInput}
											value={dedication}
											required
										/>
										{errorDedication && (
											<label style={{ color: "red" }} htmlFor="dedication">
												{errorDedication}
											</label>
										)}

										<label htmlFor="user" className="label">
											Objetivo
										</label>
										<select
											className="form-control"
											onChange={handleChangeOption}
											value={option}
											required>
											<option value="" selected disabled="disabled">
												Selecciona un objetivo
											</option>
											<option value="increaseVolumen">Aumento de volumen</option>
											<option value="muscleDefinition">Definición Muscular</option>
											<option value="functionalTraining">Entrenamiento funcional</option>
											<option value="weightLoss">Perdida de peso</option>
										</select>

										<input type="submit" className="button" value="Enviar" />
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
