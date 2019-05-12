import React, { Component, Fragment } from "react";

import NavBar from "./Utilities/NavBar";
import Footer from "./Utilities/Footer";

export default class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: ""
		};
	}

	handleSubmit = e => {
		e.preventDefault();

		console.log(this.state);
		// const { email, password } = this.state;

		// Add to firebase
	};

	onChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		return (
			<Fragment>
				<NavBar />
				<div className="container mt-5 mb-5">
					<div className="row align-items-center mb-2">
						<div className="col">
							<p className="h3 text-center">Login</p>
						</div>
					</div>
					<div className="row align-items-center">
						<div className="col" />
						<div className="col border border-dark mx-auto mb-2 rounded-lg">
							<form className="pt-4 pl-2 pr-2" onSubmit={this.handleSubmit}>
								<div className="form-group">
									<label htmlFor="exampleInputEmail1">Email address</label>
									<input
										type="email"
										className="form-control"
										id="email"
										name="email"
										aria-describedby="emailHelp"
										placeholder="Enter email"
										onChange={this.onChange}
									/>
									<small id="emailHelp" className="form-text text-muted">
										We'll never share your email with anyone else.
									</small>
								</div>
								<div className="form-group">
									<label htmlFor="exampleInputPassword1">Password</label>
									<input
										type="password"
										className="form-control"
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
												className="btn btn-dark mb-3 p-auto mt-1"
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
				<Footer />
			</Fragment>
		);
	}
}
