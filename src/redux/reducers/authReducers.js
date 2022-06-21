/* eslint-disable default-param-last */
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "../types/auth";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
};

export const authReducers = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", JSON.stringify(payload.data));
      return { ...state, isAuthenticated: true };

    case LOGIN_FAILURE:
      return { isAuthenticated: false };

    case LOGOUT:
      localStorage.removeItem("token");
      return { token: null, isAuthenticated: false };

    default:
      return state;
  }
};
