import { apiClient } from "./apiConfig";
import { loginSuccess, loginFailure, logout } from "../actions/authActions";
import {
  successNotification,
  failureNotification,
} from "../actions/notificationActions";

const csrf = () => apiClient.get("sanctum/csrf-cookie");

export const loginRequest =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      const params = {
        email: email,
        password: password,
      };

      await csrf();

      const { data } = await apiClient.post(`api/login`, params);

      dispatch(loginSuccess(data.data.api_access_token));
      dispatch(successNotification(data.message));
      window.location.reload();
    } catch (e) {
      dispatch(loginFailure(e.response.data.data));
      dispatch(failureNotification(e.response.data.message));
    }
  };

export const logoutRequest = () => (dispatch) => {
  try {
    dispatch(logout());
  } catch (e) {
    dispatch(failureNotification("logout failed"));
  }
};
