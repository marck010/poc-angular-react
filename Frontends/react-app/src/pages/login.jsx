import React, { Component } from 'react';
import Logo from '../components/Logo/Logo.react';
import './login.css';
import Input from '../components/Input/Input.react'
import Button from '../components/Button/button.react'

class Login extends Component {
  state = { user: {} }

  constructor() {
    super();
    this.user = {}
  }

  setLogin = value => {

    this.user.login = value 
    this.setState({ user: this.user });
  }


  setPassword = value => {

    this.user.password = value 

    this.setState({ user: this.user });
  }

  render() {
    return (
      <form action="" class="form-content">
        <div class="row">

          <div class="col-sm-4 block-center">

            <div class="row">
              <Logo></Logo>

            </div>

            <div class="form-group row">
              <Input type="text" col="col-sm-12" placeholder="Login" setValue={this.setLogin} />
            </div>

            <div class="form-group row">
              <Input type="password" col="col-sm-12" placeholder="Password" setValue={this.setPassword} />
            </div>

            <div class="row mb-3">
              <Button col="col-sm-12" value="Sign In" user={this.state.user} />
            </div>
            <div class="row">
              <div class="col-sm-12">
                <span>First time? <a href="/register">Sing Up </a></span>
              </div>
            </div>

          </div>
        </div>
      </form >
    );
  }
}

export default Login;
