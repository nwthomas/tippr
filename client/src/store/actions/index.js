import axios from "axios";
import {
  GET_USER_START,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  GET_USERS_START,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_SITE,
  UPDATE_USER_START,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  NEW_USER_START,
  NEW_USER_SUCCESS,
  NEW_USER_ERROR,
  UPDATE_PHOTO_START,
  UPDATE_PHOTO_SUCCESS,
  UPDATE_PHOTO_ERROR,
  PAY_TIP_START,
  PAY_TIP_SUCCESS,
  PAY_TIP_ERROR,
  CREATE_PROFILE_START,
  CREATE_PROFILE_SUCCESS,
  CREATE_PROFILE_ERROR,
  RESET_PAYMENT_FORM
} from "../types";

export const getUserByID = id => dispatch => {
  dispatch({ type: GET_USER_START });
  axios
    .get(`https://eztip.herokuapp.com/workers/${id}`)
    .then(res => {
      dispatch({ type: GET_USER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_USER_ERROR, payload: err.data });
    });
};

export const getUsers = () => dispatch => {
  dispatch({ type: GET_USERS_START });
  const token = localStorage.getItem("token");
  const reqOptions = { headers: { authorization: token } };
  axios
    .get("https://eztip.herokuapp.com/workers", reqOptions)
    .then(res => {
      dispatch({ type: GET_USERS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_USERS_ERROR, payload: err.data });
    });
};

export const updateUser = user => dispatch => {
  dispatch({ type: UPDATE_USER_START });
  const token = localStorage.getItem("token");
  const reqOptions = { headers: { authorization: token } };
  axios
    .put(`https://eztip.herokuapp.com/workers/${user.id}`, user, reqOptions)
    .then(res => {
      dispatch({ type: UPDATE_USER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: UPDATE_USER_ERROR, payload: err.data });
    });
};

export const updateProfilePhoto = (id, fd) => dispatch => {
  dispatch({ type: UPDATE_PHOTO_START });
  const token = localStorage.getItem("token");
  const reqOptions = { headers: { authorization: token } };
  axios
    .post(`https://eztip.herokuapp.com/workers/${id}/upload`, fd, reqOptions)
    .then(res => {
      dispatch({ type: UPDATE_PHOTO_SUCCESS, payload: res.data.data.imgUrl });
    })
    .catch(err => {
      dispatch({ type: UPDATE_PHOTO_ERROR, payload: err.data });
    });
};

export const loginSite = credentials => dispatch => {
  dispatch({ type: LOGIN_START });
  axios
    .post("https://eztip.herokuapp.com/login", credentials)
    .then(res => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({ type: LOGIN_ERROR, payload: err.data });
    });
};

export const logoutSite = () => {
  return {
    type: LOGOUT_SITE
  };
};

export const payTip = tipObject => dispatch => {
  dispatch({ type: PAY_TIP_START });
  const token = localStorage.getItem("token");
  const reqOptions = { headers: { authorization: token } };
  axios
    .post("https://eztip.herokuapp.com/tips", tipObject, reqOptions)
    .then(res => {
      dispatch({ type: PAY_TIP_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: PAY_TIP_ERROR, payload: err.data });
    });
};

export const registerUser = info => dispatch => {
  dispatch({ type: NEW_USER_START });
  axios
    .post("https://eztip.herokuapp.com/register", info)
    .then(res => {
      dispatch({ type: NEW_USER_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: NEW_USER_ERROR, payload: err.data }));
};

export const createNewProfile = info => dispatch => {
  dispatch({ type: CREATE_PROFILE_START });
  const token = localStorage.getItem("token");
  const reqOptions = { headers: { authorization: token } };
  axios
    .post("https://eztip.herokuapp.com/workers", info, reqOptions) // Ben = post, Alex = put
    .then(res => {
      dispatch({ type: CREATE_PROFILE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: CREATE_PROFILE_ERROR, payload: err.payload });
    });
};

export const resetPaymentForm = () => {
  return {
    type: RESET_PAYMENT_FORM
  };
};
