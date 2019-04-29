import React, { Component } from "react";

import { Link } from "react-router-dom";

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

    const { email, password } = this.state;

    // Add to firebase
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <NavBar />
        <Footer />

        <div className="login-form">
          <h2>Login</h2>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="form-group">
              <label className="sr-only" htmlFor="email">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                autoCapitalize={false}
                name="email"
                placeholder="Enter email..."
                autoFocus
                onChange={this.onChange}
              />
            </div>

            <div className="form-group">
              <label className="sr-only" htmlFor="password">
                Password
              </label>
              <input
                className="form-control"
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.onChange}
              />
            </div>

            <div className="form-group">
              <button className="btn btn-primary btn-block" type="submit">
                <span>Sign-In</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
