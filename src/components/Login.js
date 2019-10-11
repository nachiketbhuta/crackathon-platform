import React, { Component, Fragment } from "react";

export default class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: "",
			password: ""
		};
	}

	handleSubmit = e => {
		e.preventDefault();

		console.log(this.state);
		const { username, password } = this.state;

		// Add to firebase
	};

	onChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		return (
			<Fragment>
				<div className="container mt-3 mb-5">
					<div className="row align-items-center mb-2">
						<div className="col">
							<p className="h3 text-center text-white">Welcome to Crackathon Round 1!!</p>
						</div>
					</div>
					<div className="row mt-4 align-items-center">
						<div className="col" />
						<div className="col border border-grey mx-auto mb-2 rounded-lg">
							<form className="pt-4 pl-2 pr-2" onSubmit={this.handleSubmit}>
								<div className="form-group">
									<label htmlFor="username-input" className="text-white">Username</label>
									<input
										type="text"
										id="text"
										className="form-control text-dark"
										name="username"
										aria-describedby="username"
										placeholder="Enter Username"
										onChange={this.onChange}
									/>
								</div>
								<div className="form-group">
									<label htmlFor="password-input" className="text-white">Password</label>
									<input
										type="password"
										className="form-control text-dark"
										id="password"
										name="password"
										placeholder="Password"
										onChange={this.onChange}
									/>
								</div>
								<div className="row">
									<div className="col-sm-12">
										<div className="text-center">
											<button
												className="btn btn-success mb-3 p-auto mt-1"
												id="submitBtn"
											>
												Submit
											</button>
										</div>
									</div>
								</div>
							</form>
						</div>
						<div className="col" />
					</div>
				</div>
			</Fragment>
		);
	}
}
