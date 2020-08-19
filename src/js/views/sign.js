import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/sign.scss";

export class Sign extends React.Component {
	// const email = useFormInput("");
	// const password = useFormInput("");
	// const [error, setError] = useState(null);
	// const [loading, setLoading] = useState(false);

	// handle button click of signin form
	// const handleSignIn = () => {
	// 	props.history.push("/dashboard");
	// };
	constructor(props) {
		super(props);

		this.state = {
			name: "",
			last_name: "",
			email: "",
			phone: "",
			password: ""
		};
	}
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div className="container h-100">
							<div className="row h-100 justify-content-center align-items-center">
								<div className="col-12 col-sm-6 col-md-8 col-lg-6 h-75 login-box">
									<div className="login-snip">
										<input id="tab-1" type="radio" name="tab" className="sign-in" checked />
										<label htmlFor="tab-1" className="tab">
											Login
										</label>
										<input id="tab-2" type="radio" name="tab" className="sign-up" />
										<label htmlFor="tab-2" className="tab">
											Sign Up
										</label>
										<div className="login-space">
											<div className="login">
												<div className="group">
													<label htmlFor="exampleInputEmail1">Email address</label>
													<input
														id="exampleInputEmail1"
														type="email"
														className="input"
														placeholder="Enter your email"
														onChange={e => this.setState({ email: e.target.value })}
													/>
													<small id="emailHelp" className="subtext">
														Well never share your email with anyone else.
													</small>
												</div>
												<div className="group">
													<label htmlFor="exampleInputPassword1">Password</label>
													<input
														onChange={e => this.setState({ password: e.target.value })}
														id="exampleInputPassword1"
														type="password"
														className="input"
														data-type="password"
														placeholder="Enter your password"
													/>
												</div>
												<div className="group">
													<input id="check" type="checkbox" className="check" />
													<label htmlFor="check" className="check-signed-in">
														<span className="icon" /> Keep me Signed in
													</label>
												</div>
												<div className="group">
													<input
														type="submit"
														className="button"
														value="Sign In"
														onClick={() =>
															actions.login(this.state.email, this.state.password)
														}
													/>
												</div>
												<div className="hr" />
												<div className="col-md-12 text-center">
													<ul className="social-network social-circle">
														<li>
															<a href="#" className="icoFacebook" title="Facebook">
																<i className="fab fa-facebook-f" />
															</a>
														</li>
														<li>
															<a href="#" className="icoTwitter" title="Twitter">
																<i className="fab fa-twitter" />
															</a>
														</li>
														<li>
															<a href="#" className="icoGoogle" title="Google +">
																<i className="fab fa-google-plus" />
															</a>
														</li>
													</ul>
												</div>
												<div className="hr" />
												<div className="foot">
													<a href="#">Forgot Password?</a>
												</div>
											</div>
											<div className="sign-up-form">
												<div className="group">
													<label htmlFor="user" className="label">
														Name
													</label>
													<input
														id="user"
														type="text"
														className="input"
														placeholder="Create your Username"
														onChange={e => this.setState({ name: e.target.value })}
													/>
												</div>
												<div className="group">
													<label htmlFor="lastName" className="label">
														Last Name
													</label>
													<input
														id="lastname"
														type="text"
														className="input"
														placeholder="Enter your last name"
														onSubmit={e => this.setState({ name: e.target.value })}
													/>
												</div>
												<div className="group">
													<label htmlFor="pass" className="label">
														Email Address
													</label>
													<input
														id="pass"
														type="text"
														className="input"
														placeholder="Enter your email address"
														onSubmit={e => this.setState({ email: e.target.value })}
													/>
												</div>
												<div className="group">
													<label htmlFor="phone" className="label">
														Phone
													</label>
													<input
														id="phone"
														type="text"
														className="input"
														placeholder="Enter your phone number"
														onSubmit={e => this.setState({ phone: e.target.value })}
													/>
												</div>
												<div className="group">
													<label htmlFor="pass" className="label">
														Password
													</label>
													<input
														id="pass"
														type="password"
														className="input"
														data-type="password"
														placeholder="Create your password"
														onSubmit={e => this.setState({ password: e.target.value })}
													/>
												</div>
												<div className="group">
													<input
														type="submit"
														className="button"
														value="Sign Up"
														onClick={() =>
															actions.signUp(
																this.state.name,
																this.state.last_name,
																this.state.email,
																this.state.phone,
																this.state.password
															)
														}
													/>
												</div>
												<div className="hr" />
												<div className="foot">
													<label htmlFor="tab-1">Already Member?</label>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					);
				}}
			</Context.Consumer> //store.action cierre
		);
	} //render cierre
} //class cierre

// const useFormInput = initialValue => {
// 	const [value, setValue] = useState(initialValue);

// 	const handleChange = e => {
// 		setValue(e.target.value);
// 	};
// 	return {
// 		value,
// 		onChange: handleChange
// 	};
//};
