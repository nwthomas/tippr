import React, { Component } from "react";
import { Route } from "react-router-dom";
import { EmployeeView } from "../EmployeeView";
import { GuestView } from "../GuestView";
import { connect } from "react-redux";
import { getUsers } from "../../../store/actions/index";
import PropTypes from "prop-types";
import { Navigation } from "../../presentational/Navigation";
import styled from "styled-components";
import { PaymentModal } from "../../presentational/PaymentModal";

const HomeViewContainer = styled.div`
  width: 100%;
  position: relative;
  padding: 0 3%;
`;

class HomeView extends Component {
  componentDidMount() {
    this.props.getUsers();
  }
  render() {
    return (
      <>
        <HomeViewContainer>
          {this.props.paymentProcessFinished && (
            <PaymentModal
              match={this.props.match}
              history={this.props.history}
            />
          )}
          <Navigation match={this.props.match} history={this.props.history} />
          {this.props.userType === "employee" ? (
            <Route path="/" render={props => <EmployeeView {...props} />} />
          ) : (
            <Route path="/" render={props => <GuestView {...props} />} />
          )}
        </HomeViewContainer>
      </>
    );
  }
}

HomeView.propTypes = {
  history: PropTypes.object.isRequired,
  getUsers: PropTypes.func.isRequired,
  paymentProcessFinished: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  userType: state.userReducer.userType,
  paymentProcessFinished: state.paymentReducer.paymentProcessFinished
});

const mapActionsToProps = {
  getUsers
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(HomeView);
