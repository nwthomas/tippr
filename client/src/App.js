import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { authenticate } from "./components/container/authenticate";
import { GlobalStyle } from "./styles";

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <div className="App">
          <DisplayedComponent
            match={this.props.match}
            history={this.props.history}
          />
        </div>
      </>
    );
  }
}

App.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

const DisplayedComponent = authenticate;

export default withRouter(App);
