import React, { useState } from "react";
import "../../styles/signIn.scss";

export const SignIn = props => {
	const username = useFormInput("");
	const password = useFormInput("");
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	// handle button click of signin form
	// const handleSignIn = () => {
	// 	props.history.push("/dashboard");
	// };

	return (
		<div id="content" className="flex">
			<div className="">
				<div className="page-content page-container" id="page-content">
					<div className="padding">
						<div className="row">
							<div className="col-md-6">
								<div className="card">
									<div className="card-header">
										<strong>Login to your account</strong>
									</div>
									<div className="card-body">
										<form>
											<div className="form-group">
												<label className="text-muted" htmlFor="exampleInputEmail1">
													Email address
												</label>
												<input
													type="email"
													className="form-control"
													id="exampleInputEmail1"
													aria-describedby="emailHelp"
													placeholder="Enter email"
												/>{" "}
												<small id="emailHelp" className="form-text text-muted">
													We dont share email with anyone
												</small>
											</div>
											<div className="form-group">
												<label className="text-muted" htmlFor="exampleInputPassword1">
													Password
												</label>
												<input
													type="password"
													className="form-control"
													id="exampleInputPassword1"
													placeholder="Password"
												/>{" "}
												<small id="passwordHelp" className="form-text text-muted">
													your password is saved in encrypted form
												</small>
											</div>
											<div className="form-group">
												<div className="form-check">
													<input type="checkbox" className="form-check-input" />
													<label className="form-check-label">Check me out</label>
												</div>
											</div>{" "}
											<button type="submit" className="btn btn-primary">
												Submit
											</button>
										</form>
									</div>
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
