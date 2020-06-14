import React, { useState } from "react";
import "../../styles/sign.scss";

export const Sign = props => {
	const username = useFormInput("");
	const password = useFormInput("");
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	// handle button click of signin form
	// const handleSignIn = () => {
	// 	props.history.push("/dashboard");
	// };

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
									<label htmlFor="user" className="label">
										Username
									</label>
									<input id="user" type="text" className="input" placeholder="Enter your username" />
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
										placeholder="Enter your password"
									/>
								</div>
								<div className="group">
									<input id="check" type="checkbox" className="check" />
									<label htmlFor="check">
										<span className="icon" /> Keep me Signed in
									</label>
								</div>
								<div className="group">
									<input type="submit" className="button" value="Sign In" />
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
										Username
									</label>
									<input id="user" type="text" className="input" placeholder="Create your Username" />
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
									/>
								</div>
								<div className="group">
									<label htmlFor="pass" className="label">
										Repeat Password
									</label>
									<input
										id="pass"
										type="password"
										className="input"
										data-type="password"
										placeholder="Repeat your password"
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
									/>
								</div>
								<div className="group">
									<input type="submit" className="button" value="Sign Up" />
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
};

const useFormInput = initialValue => {
	const [value, setValue] = useState(initialValue);

	const handleChange = e => {
		setValue(e.target.value);
	};
	return {
		value,
		onChange: handleChange
	};
};
