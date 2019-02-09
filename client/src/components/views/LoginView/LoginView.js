import React, { Component } from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";

import { LoginForm } from "../../presentational/LoginForm";
import { CreateUsernameForm } from "../../presentational/CreateUsernameForm";
import { CreateProfileForm } from "../../presentational/CreateProfileForm";

const LoginViewContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  padding: 0 5%;
`;

class LoginView extends Component {
  render() {
    return (
      <LoginViewContainer>
        <Route exact path="/" render={props => <LoginForm {...props} />} />
        {this.props.userCreated ? (
          <Route
            path="/signup"
            render={props => <CreateProfileForm {...props} />}
          />
        ) : (
          <Route
            path="/signup"
            render={props => <CreateUsernameForm {...props} />}
          />
        )}
      </LoginViewContainer>
    );
  }
}

LoginView.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  userCreated: state.userReducer.userCreated
});

export default connect(
  mapStateToProps,
  {}
)(LoginView);
