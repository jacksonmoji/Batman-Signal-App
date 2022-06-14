import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "../types/auth";

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: { ...user },
});

export const loginFailure = (user) => ({
  type: LOGIN_FAILURE,
  payload: { ...user },
});

export const logout = (user) => ({
  type: LOGOUT,
});
