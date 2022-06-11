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

    await dispatch(loadPanicHistoryInProgress(true));

    const { data } = await apiClient.get(`api/panics/history`);

    await dispatch(loadPanicHistorySuccess(data.data.panics));

    await dispatch(loadPanicHistoryInProgress(false));
  } catch (e) {
    dispatch(loadPanicHistoryFailure());
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

    console.log(params);

    await csrf();
    await getBarrierConfig();

    const { data } = await apiClient.post(`api/panics/sends`, params);

    dispatch(sendPanicRequestSuccess(data));
    dispatch(displayAlert("Panic request sent successfully"));
  } catch (e) {
    console.log(e);
    dispatch(sendPanicRequestFailure(e));
  }
};

export const cancelPanicRequest = (id) => async (dispatch) => {
  try {
    const params = { panic_id: id };
    console.log(params);

    await csrf();
    await getBarrierConfig();

    const { data } = await apiClient.post(`api/panics/cancels/`, params);

    dispatch(cancelPanicRequestSuccess(data.message));
    dispatch(displayAlert("successfully cancelled panics"));
  } catch (e) {
    console.log(e);
    dispatch(cancelPanicRequestFailure(e));
  }
};

export const displayAlert = (text) => () => {
  alert(text);
};
