/* eslint-disable default-param-last */
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "../types/auth";

const initialState = {
  token: localStorage.getItem("token") || null,
  errors: null,
};

export const authReducers = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", JSON.stringify(payload.data));
      return { ...state };

    case LOGIN_FAILURE:
      return { ...state, errors: payload.data };

    case LOGOUT:
      localStorage.removeItem("token");
      return { token: null, errors: null };

    default:
      return state;
  }
};
