import React, { Component, Fragment } from "react";
import { Redirect } from 'react-router-dom';
// import { BASE_URL } from './../constants';

export default class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			mobile: "",
			teamId: "",
			password: ""
		};
	}

	handleSubmit = async (e) => {
		e.preventDefault();

		console.log(this.state);
		const { email, password, teamId, mobile } = this.state;

		const data = {
			email, password, teamId, mobile
		};

		const res = await fetch(`https://guarded-chamber-94862.herokuapp.com/users/login`, {
			method: 'POST',
			mode: 'cors',
			cache: 'no-cache',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/json'
				// 'Content-Type': 'application/x-www-form-urlencoded',
			  },
			  redirect: 'follow', // manual, *follow, error
			  referrer: 'no-referrer', // no-referrer, *client
			  body: JSON.stringify(data)
		});

		const resData = await res.json();

		console.log(resData);
		if (resData.success) {
			return <Redirect to="/editor" />
		}
		
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
									<label htmlFor="email-input" className="text-white">Email</label>
									<input
										type="email"
										id="text"
										className="form-control text-dark"
										name="email"
										aria-describedby="email"
										placeholder="Enter Email"
										onChange={this.onChange}
									/>
								</div>
								<div className="form-group">
									<label htmlFor="team-id-input" className="text-white">Team ID</label>
									<input
										type="text"
										id="text"
										className="form-control text-dark"
										name="teamId"
										aria-describedby="teamId"
										placeholder="Enter Team ID"
										onChange={this.onChange}
									/>
								</div>
								<div className="form-group">
									<label htmlFor="mobile-input" className="text-white">Mobile Number</label>
									<input
										type="text"
										id="text"
										className="form-control text-dark"
										name="mobile"
										aria-describedby="mobile"
										placeholder="Enter Mobile Number"
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
