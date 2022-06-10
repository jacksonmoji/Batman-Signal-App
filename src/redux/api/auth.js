import { apiClient } from "./apiConfig";

import { loginSuccess, loginFailure } from "../actions/authActions";

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

      localStorage.setItem("token", JSON.stringify(data.data.api_access_token));
    } catch (e) {
      dispatch(loginFailure(e));
      console.log(e);
      dispatch(displayAlert(email, password));
    }
  };

export const displayAlert = (text) => () => {
  alert(text);
};
