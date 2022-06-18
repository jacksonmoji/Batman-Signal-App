import { apiClient } from "./apiConfig";

import { loginSuccess, loginFailure } from "../actions/authActions";
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

      await dispatch(loginSuccess(data.data.api_access_token));

      await dispatch(successNotification(data.message));
    } catch (e) {
      dispatch(loginFailure(e.response.data.data));
      dispatch(failureNotification(e.response.data.message));
    }
  };
