import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      username: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.name.length > 0 && this.state.email.length > 0 && this.state.username.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="SignUp form-wrapper">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="Name" bsSize="large">
            <ControlLabel>Name</ControlLabel>
            <FormControl
              autoFocus
              type="Name"
              value={this.state.Name}
              onChange={this.handleChange}
            />
          </FormGroup>
             <FormGroup controlId="Email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="Email"
              value={this.state.Email}
              onChange={this.handleChange}
            />
          </FormGroup>
            <FormGroup controlId="username" bsSize="large">
            <ControlLabel>Username</ControlLabel>
            <FormControl
              autoFocus
              type="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            SignUp
          </Button>
        </form>
        
      </div>
    );
  }
}