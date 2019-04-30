import React, { Component, Fragment } from "react";

import NavBar from "./Utilities/NavBar";
import Footer from "./Utilities/Footer";

import { Container, Row, Form, FormGroup, Label, Input } from "reactstrap";

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
      <Fragment>
        <NavBar />
        <Footer />

        <Container>
          <Row>
            <h2>Login Form</h2>
            <Form>
              <Row>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="with a placeholder"
                  />
                </FormGroup>
              </Row>
              <Row>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="password placeholder"
                  />
                </FormGroup>
              </Row>
            </Form>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
