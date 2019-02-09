import React, { Component } from "react";
import PropTypes from "prop-types";
import { registerUser } from "../../../store/actions";
import { connect } from "react-redux";
import styled from "styled-components";

const CreateUsernameContainer = styled.div`
  background: white;
  border: 1px solid #b5b5b5;
  margin: 15vh auto 0;
  padding: 35px 0;
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin: 0 0 10px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    input {
      margin: 15px;
      width: 70%;
    }

    div {
      width: 70%;
      display: flex;
      justify-content: space-between;

      button {
        margin: 15px 0 10px;
        width: 47%;
      }
    }
  }
`;

const Dropdown = styled.select`
  width: 70%;
  display: block;
  padding: 5px;
  height: 40px;
  margin: 15px;
  font-size: 1.4rem;
  border: 1px solid #b5b5b5;
`;

class CreateUsernameForm extends Component {
  state = {
    username: "",
    password: "",
    user_type: ""
  };

  createUser = e => {
    e.preventDefault();
    this.props.registerUser({
      username: this.state.username,
      password: this.state.password,
      user_type: this.state.user_type
    });
  };

  cancel = e => {
    e.preventDefault();
    this.props.history.push("/");
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <CreateUsernameContainer>
        <h1>Sign Up</h1>
        <form className="login__form" onSubmit={this.createUser}>
          <input
            required
            autoComplete="off"
            type="text"
            name="username"
            value={this.state.username}
            placeholder="New username"
            onChange={this.handleChange}
          />
          <input
            required
            autoComplete="off"
            type="password"
            name="password"
            value={this.state.password}
            placeholder="New password"
            onChange={this.handleChange}
          />
          <Dropdown
            required
            name="user_type"
            placeholder="Profile type"
            onChange={this.handleChange}
            defaultValue=""
          >
            <option disabled value="">
              Select profile type
            </option>
            <option value="employee">Employee</option>
            <option value="guest">Guest</option>
          </Dropdown>
          <div>
            <button stype="submit">Sign Up</button>
            <button type="button" onClick={this.cancel}>
              Cancel
            </button>
          </div>
        </form>
      </CreateUsernameContainer>
    );
  }
}

CreateUsernameForm.propTypes = {
  registerUser: PropTypes.func
};

const mapActionsToProps = {
  registerUser
};

export default connect(
  null,
  mapActionsToProps
)(CreateUsernameForm);
