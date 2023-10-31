import React, { Component } from "react";

class ClassForm extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              onChange={this.handleNameChange}
              value={this.state.name}
              type="text"
              placeholder="Enter your name"
            />
          </label>

          <br />

          <label>
            Email:
            <input
              onChange={this.handleEmailChange}
              value={this.state.email}
              type="email"
              placeholder="Enter your email"
            />
          </label>

          <br />

          <label>
            Password:
            <input
              onChange={this.handlePasswordChange}
              value={this.state.password}
              type="password"
              placeholder="Enter your password"
            />
          </label>

          <br />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default ClassForm;
