import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import API from "../utils/API";

import {Redirect} from "react-router-dom";


export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: "",
        email: "",
        username: "",
        password: ""
      },
      signedIn: false,

    };

    this.updateRoute = this.updateRoute.bind(this)
  }

  validateForm() {
    return this.state.user.name.length > 0 && this.state.user.email.length > 0 && this.state.user.username.length > 0 && this.state.user.password.length > 0;
  }

  handleChange = event => {

    const user = this.state.user;
    const { name, value, id } = event.target;
    user[id] = event.target.value;
    this.setState({ user });
  }
  updateRoute () {
    this.setState({signedIn: true})
  }
  handleSubmit = event => {
    event.preventDefault();
    console.log("in submit");
    API.createUser(this.state.user)
      .then(res => {
        // console.log(res.status)
        console.log(res.status)
        if ( res.status === 200) {
          console.log('um...')
          this.updateRoute()
        } else {
          window.location.reload(); 
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
    //
    return (
      <div className="SignUp form-wrapper">
        <form>
          <FormGroup controlId="name" bsSize="large">
            <ControlLabel>Name</ControlLabel>
            <FormControl
              autoFocus
              type="name"
              name="name"
              value={this.state.user.name}
              onChange={this.handleChange}
            />
          </FormGroup>
             <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              name="email"
              value={this.state.user.email}
              onChange={this.handleChange}
            />
          </FormGroup>
            <FormGroup controlId="username" bsSize="large">
            <ControlLabel>Username</ControlLabel>
            <FormControl
              autoFocus
              type="username"
              name="username"
              value={this.state.user.username}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.user.password}
              onChange={this.handleChange}
              name="password"
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            href="/users/api"
            onClick={this.handleSubmit}
          >
            SignUp
          </Button>
        </form>
        
      </div>
    );
  }
}