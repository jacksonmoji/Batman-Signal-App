import { apiClient } from "./apiConfig";

import {
  sendPanicRequestSuccess,
  sendPanicRequestFailure,
  cancelPanicRequestSuccess,
  cancelPanicRequestFailure,
  loadPanicHistoryInProgress,
  loadPanicHistorySuccess,
  loadPanicHistoryFailure,
} from "../actions/panicActions";

const csrf = () => apiClient.get("sanctum/csrf-cookie");

const getBarrierConfig = () => {
  const userToken = localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token"))
    : null;
  apiClient.defaults.headers.common["Authorization"] = `Bearer ${userToken}`;
};

export const loadPanicHistory = () => async (dispatch) => {
  try {
    await csrf();
    getBarrierConfig();

    dispatch(loadPanicHistoryInProgress(true));

    const { data } = await apiClient.get(`api/panics/history`);

    await dispatch(
      loadPanicHistorySuccess({
        message: data.message,
        data: data.data.panics,
      })
    );

    await dispatch(loadPanicHistoryInProgress(false));
  } catch (e) {
    dispatch(
      loadPanicHistoryFailure({
        message: e.response.data.message,
        errors: e.response.data.data,
      })
    );
    dispatch(displayAlert(e));
  }
};

export const sendPanicRequest = (panic) => async (dispatch) => {
  try {
    const params = {
      longitude: panic.longitude.toString(), //string (required)
      latitude: panic.latitude.toString(), //string (required)
      panic_type: panic.panic_type, //string (optional)
      details: panic.details, //medium text (optional)
    };

    await csrf();
    getBarrierConfig();

    const { data } = await apiClient.post(`api/panics/sends`, params);

    await dispatch(
      sendPanicRequestSuccess({
        panic_id: data.data.panic_id,
        message: data.message,
      })
    );
    // await dispatch(displayAlert("Panic request sent successfully"));
  } catch (e) {
    dispatch(
      sendPanicRequestFailure({
        message: e.response.data.message,
        errors: e.response.data.data,
      })
    );
  }
};

export const cancelPanicRequest = (id) => async (dispatch) => {
  try {
    const params = { panic_id: id };
    console.log(params);
    await csrf();
    getBarrierConfig();

    const { data } = await apiClient.post(`api/panics/cancels/`, params);

    await dispatch(cancelPanicRequestSuccess({ message: data.message }));
    // await dispatch(displayAlert("successfully cancelled panic"));
  } catch (e) {
    dispatch(
      cancelPanicRequestFailure({
        message: e.response.data.message,
        errors: e.response.data.data,
      })
    );
  }
};

export const displayAlert = (text) => () => {
  alert(text);
};
