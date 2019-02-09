import { userReducer } from "./userReducer";
import { paymentReducer } from "./paymentReducer";
import { combineReducers } from "redux";

export default combineReducers({
  userReducer,
  paymentReducer
});
