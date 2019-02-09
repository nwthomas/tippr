import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { loginSite } from "../../../store/actions";
import styled from "styled-components";

const LoginFormContainer = styled.div`
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

const SignUpFormContainer = styled(LoginFormContainer)`
  margin: 35px auto 0;
`;

class LoginForm extends Component {
  state = {
    loginUsername: "",
    loginPassword: ""
  };
  componentDidMount() {
    this.props.history.push("/");
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  clearForm = e => {
    e.preventDefault();
    this.setState({
      loginUsername: "",
      loginPassword: ""
    });
  };
  submitForm = e => {
    e.preventDefault();
    this.props.loginSite({
      username: this.state.loginUsername,
      password: this.state.loginPassword
    });
  };
  render() {
    return (
      <>
        <LoginFormContainer>
          <h1>Sign In</h1>
          <form onSubmit={this.submitForm}>
            <input
              required
              autoComplete="off"
              type="text"
              name="loginUsername"
              value={this.state.loginUsername}
              placeholder="Username"
              onChange={this.handleChange}
            />
            <input
              required
              autoComplete="off"
              type="password"
              name="loginPassword"
              value={this.state.loginPassword}
              placeholder="Password"
              onChange={this.handleChange}
            />
            <div>
              <button type="submit">Sign In</button>
              <button type="button" onClick={this.clearForm}>
                Clear
              </button>
            </div>
          </form>
        </LoginFormContainer>
        <SignUpFormContainer>
          <p>
            Need an account? <Link to="/signup">Sign Up</Link>
          </p>
        </SignUpFormContainer>
      </>
    );
  }
}

LoginForm.propTypes = {
  history: PropTypes.object.isRequired,
  loginSite: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  loginUsername: state.userReducer.loginUsername,
  loginPassword: state.userReducer.loginPassword
});

const mapActionsToProps = {
  loginSite
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(LoginForm);
