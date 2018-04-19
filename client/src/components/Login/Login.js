import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import API from '../../utils/API';
import {Redirect} from 'react-router-dom';

import "./Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: {
        username: "",
        password: ""
      },
      signedIn: false,
      userAccount: ""
    };
  }

  validateForm() {
    return this.state.login.username.length > 0 && this.state.login.password.length > 0;
  }

  handleChange = event => {
    const login = this.state.login;
    const { value, id } = event.target;
    login[id] = event.target.value
    this.setState({ login });
  }

  isAuthenticated() {
    this.setState({

    });
  }
  handleSubmit = event => {
    event.preventDefault();
    console.log("in submit");
    API.getUser(this.state.user)
      .then(res => {
        // console.log(res.status)
        console.log(res)
        if ( res.status === 200) {
          console.log('um...')

        }
      
      })
      .catch(err => console.log(err));
  }
  componentDidUpdate() {
    console.log(this.state.signedIn);
  }
  componentDidMount() {
    console.log(this.state.signedIn);
  }

  render() {
    if (this.state.signedIn === true) {
      return <Redirect to='/task' />
    }
    return (
      <div className="Login form-wrapper">
        <form>
          <FormGroup controlId="username" bsSize="large">
            <ControlLabel>Username</ControlLabel>
            <FormControl
              autoFocus
              type="username"
              value={this.state.login.username}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.login.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            href="/users/api/login"
            onClick={this.handleSubmit}
          >
            Login
          </Button>
        </form>

        <div className="signupLink">
            Don't have an account? <a href="/signup"><span>Sign Up</span></a>
        </div>
      </div>
    );
  }
}