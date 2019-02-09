import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { LoginView } from "../../views/LoginView";
import { HomeView } from "../../views/HomeView";

const authenticate = HomeView => LoginView => {
  return class extends Component {
    render() {
      return this.props.loggedIn ? (
        <HomeView match={this.props.match} history={this.props.history} />
      ) : (
        <LoginView match={this.props.match} history={this.props.history} />
      );
    }
  };
};

authenticate.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  loggedIn: state.userReducer.loggedIn
});

export default connect(
  mapStateToProps,
  {}
)(authenticate(HomeView)(LoginView));
