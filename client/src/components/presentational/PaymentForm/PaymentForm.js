import React, { Component } from "react";
import PropTypes from "prop-types";
import { payTip } from "../../../store/actions";
import { connect } from "react-redux";
import styled from "styled-components";

const PaymentFormContainer = styled.div`
  background: white;
  border: 1px solid #b5b5b5;
  margin: 130px auto 0;
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

      &:last-of-type {
        padding-top: 9px;
      }
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

class PaymentForm extends Component {
  state = {
    payment: "",
    ccNumber: "",
    expiration: "",
    verification: "",
    match: null,
    history: null,
    id: null,
    employeeName: ""
  };
  componentDidMount() {
    const employeeName = this.props.users
      .filter(user => user.id.toString() === this.props.id)
      .pop();
    this.setState({
      match: this.props.match,
      history: this.props.history,
      id: this.props.id,
      employeeName: `${employeeName.first_name} ${employeeName.last_name}`
    });
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  cancel = e => {
    e.preventDefault();
    this.state.history.push(`/employee/${this.state.id}`);
  };
  submitTip = e => {
    e.preventDefault();
    this.props.payTip({
      worker_id: this.state.id,
      tip_amount: this.state.payment
    });
    // this.state.history.push(`/employee/${this.state.id}`);
  };
  render() {
    const name = this.state.employeeName ? this.state.employeeName : "Employee";
    return (
      <PaymentFormContainer>
        <h1>Tip {name}</h1>
        <form onSubmit={this.submitTip} className="payment-form">
          <input
            required
            autoComplete="off"
            type="number"
            name="payment"
            placeholder="Tip amount"
            value={this.state.payment}
            onChange={this.handleChange}
          />
          <input
            required
            autoComplete="off"
            type="number"
            name="ccNumber"
            placeholder="Credit card number"
            value={this.state.ccNumber}
            onChange={this.handleChange}
          />
          <input
            required
            autoComplete="off"
            type="number"
            name="expiration"
            placeholder="Expiration date"
            value={this.state.expiration}
            onChange={this.handleChange}
          />
          <input
            required
            autoComplete="off"
            type="number"
            name="verification"
            placeholder="Verification code"
            value={this.state.verification}
            onChange={this.handleChange}
          />
          <div>
            <button type="submit">Send Tip</button>
            <button type="button" onClick={this.cancel}>
              Cancel
            </button>
          </div>
        </form>
      </PaymentFormContainer>
    );
  }
}

PaymentForm.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  users: state.userReducer.users
});

const mapActionsToProps = {
  payTip
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(PaymentForm);
