import {
  PAY_TIP_START,
  PAY_TIP_SUCCESS,
  PAY_TIP_ERROR,
  RESET_PAYMENT_FORM
} from "../types";

const initialState = {
  tipId: null,
  payingTip: false,
  tipPaid: false,
  tipError: "",
  tipMessage: "",
  paymentProcessFinished: false
};

export const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case PAY_TIP_START:
      return {
        ...state,
        payingTip: true,
        tipError: "",
        tipPaid: false,
        paymentProcessFinished: false
      };
    case PAY_TIP_SUCCESS:
      return {
        ...state,
        payingTip: false,
        tipPaid: true,
        tipError: "",
        tipMessage: action.payload,
        paymentProcessFinished: true
      };
    case PAY_TIP_ERROR:
      return {
        ...state,
        payingTip: false,
        tipError: action.payload,
        paymentProcessFinished: true
      };
    case RESET_PAYMENT_FORM:
      return {
        ...state,
        tipId: null,
        payingTip: false,
        tipPaid: false,
        tipError: "",
        tipMessage: "",
        paymentProcessFinished: false
      };
    default:
      return state;
  }
};
