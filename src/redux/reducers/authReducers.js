/* eslint-disable default-param-last */
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "../types/auth";

export const authReducers = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS:
      return { ...state, loading: false, userInfo: payload };

    case LOGIN_FAILURE:
      return { ...state, loading: false, error: payload };

    case LOGOUT:
      return { ...state, userInfo: null };

    default:
      return state;
  }
};
