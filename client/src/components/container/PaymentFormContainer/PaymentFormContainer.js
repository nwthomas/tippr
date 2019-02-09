import React from "react";
import PropTypes from "prop-types";

import { PaymentForm } from "../../presentational/PaymentForm";

const PaymentFormContainer = props => {
  const id = props.match.params.id;
  return (
    <div className="payment-form__container">
      <PaymentForm match={props.match} history={props.history} id={id} />
    </div>
  );
};

PaymentFormContainer.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default PaymentFormContainer;
