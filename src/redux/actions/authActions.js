import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "../types/auth";

export const loginSuccess = (data) => ({
  type: LOGIN_SUCCESS,
  payload: { data },
});

export const loginFailure = (data) => ({
  type: LOGIN_FAILURE,
  payload: { data },
});

export const logout = () => ({
  type: LOGOUT,
});
