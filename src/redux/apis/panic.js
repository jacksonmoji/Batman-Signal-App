import { apiClient } from "./apiConfig";

import {
  sendPanicRequestSuccess,
  sendPanicRequestFailure,
  cancelPanicRequest,
  loadPanicHistory,
} from "../actions/panicActions";
import {
  successNotification,
  failureNotification,
} from "../actions/notificationActions";

import { beginLoading, endLoading } from "../actions/loadingActions";

const csrf = () => apiClient.get("sanctum/csrf-cookie");

const getBarrierConfig = () => {
  const userToken = localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token"))
    : null;
  apiClient.defaults.headers.common["Authorization"] = `Bearer ${userToken}`;
};

export const sendLoadPanicHistoryRequest = () => async (dispatch) => {
  try {
    dispatch(beginLoading());

    await csrf();
    getBarrierConfig();

    const { data } = await apiClient.get(`api/panics/history`);
    await dispatch(endLoading());
    dispatch(loadPanicHistory(data.data.panics));
  } catch (e) {
    await dispatch(endLoading());
    dispatch(failureNotification(e.response.data.message));
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

    dispatch(sendPanicRequestSuccess(data.data.panic_id));
    dispatch(successNotification(data.message));
  } catch (e) {
    dispatch(sendPanicRequestFailure(e.response.data.data));
    dispatch(failureNotification(e.response.data.message));
  }
};

export const sendCancelPanicRequest = (id) => async (dispatch) => {
  try {
    const params = { panic_id: id };
    await csrf();
    getBarrierConfig();

    const { data } = await apiClient.post(`api/panics/cancels/`, params);

    await dispatch(cancelPanicRequest());
    await dispatch(successNotification(data.message));
  } catch (e) {
    dispatch(failureNotification(e.response.data.message));
  }
};
