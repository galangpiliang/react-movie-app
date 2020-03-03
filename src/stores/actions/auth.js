import {
  SIGN_UP,
  SIGN_IN,
  SIGN_OUT,
  LOADING,
  ERROR_LOGIN,
  ERROR_UPDATE,
  UPDATE_PROFILE,
  CHANGE_AVATAR
} from "./types";
import Axios from "axios";
const baseUrl = "https://awesome-movie-data.herokuapp.com/api/v1";

export const ACTION_SIGN_UP = input => {
  return dispatch => {
    console.log("ACTION_SIGN_UP");
    dispatch({ type: LOADING });
    Axios.post(`${baseUrl}/users`, input)
      .then(res => {
        console.log(res);
        dispatch({
          type: SIGN_UP,
          payload: res.data.data
        });
        dispatch({ type: LOADING });
      })
      .catch(error => {
        console.log(error);
        dispatch({
          type: ERROR_LOGIN,
          payload: error
        });
        dispatch({ type: LOADING });
      });
  };
};

export const ACTION_SIGN_IN = input => {
  return dispatch => {
    console.log("ACTION_SIGN_IN");
    dispatch({ type: LOADING });
    Axios.post(`${baseUrl}/auth`, input)
      .then(res => {
        console.log(res);
        dispatch({
          type: SIGN_IN,
          payload: res.data.data
        });
        dispatch({ type: LOADING });
      })
      .catch(error => {
        console.log(error);
        dispatch({
          type: ERROR_LOGIN,
          payload: error
        });
        dispatch({ type: LOADING });
      });
  };
};

export const ACTION_SIGN_OUT = () => {
  return {
    type: SIGN_OUT
  };
};

export const ACTION_UPDATE_PROFILE = input => dispatch => {
  const local = JSON.parse(localStorage.getItem("userLocal"));
  let setToken = {
    headers: {
      Authorization: local ? local.token : false
    }
  };
  console.log("ACTION_UPDATE_PROFILE", setToken);
  dispatch({ type: LOADING });
  Axios.put(`${baseUrl}/users`, input, setToken)
    .then(res => {
      console.log(res);
      dispatch({
        type: UPDATE_PROFILE,
        payload: res.data.data
      });
      dispatch({ type: LOADING });
    })
    .catch(error => {
      console.log(error);
      dispatch({
        type: ERROR_UPDATE,
        payload: error
      });
      dispatch({ type: LOADING });
    });
};

export const ACTION_CHANGE_AVATAR = inputFile => dispatch => {
  const local = JSON.parse(localStorage.getItem("userLocal"));
  let setToken = {
    headers: {
      Authorization: local ? local.token : false
    }
  };
  console.log("ACTION_CHANGE_AVATAR", setToken);
  const data = new FormData();
  data.append("image", inputFile);
  dispatch({ type: LOADING });
  Axios.put(`${baseUrl}/users`, data, setToken)
    .then(res => {
      console.log(res);
      dispatch({
        type: CHANGE_AVATAR,
        payload: res.data.data
      });
      dispatch({ type: LOADING });
    })
    .catch(error => {
      console.log(error);
      dispatch({
        type: ERROR_UPDATE,
        payload: error
      });
      dispatch({ type: LOADING });
    });
};
