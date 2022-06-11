import {
  SEND_PANIC_REQUEST_SUCCESS,
  SEND_PANIC_REQUEST_FAILURE,
  CANCEL_PANIC_REQUEST_SUCCESS,
  CANCEL_PANIC_REQUEST_FAILURE,
  LOAD_PANIC_HISTORY_IN_PROGRESS,
  LOAD_PANIC_HISTORY_SUCCESS,
  LOAD_PANIC_HISTORY_FAILURE,
} from "../types/panic";

export const sendPanicRequestSuccess = (panic) => ({
  type: SEND_PANIC_REQUEST_SUCCESS,
  payload: { panic },
});

export const sendPanicRequestFailure = (panic) => ({
  type: SEND_PANIC_REQUEST_FAILURE,
  payload: { panic },
});

export const cancelPanicRequestSuccess = (panic) => ({
  type: CANCEL_PANIC_REQUEST_SUCCESS,
  payload: { panic },
});

export const cancelPanicRequestFailure = (panic) => ({
  type: CANCEL_PANIC_REQUEST_FAILURE,
  payload: { panic },
});

export const loadPanicHistoryInProgress = (status) => ({
  type: LOAD_PANIC_HISTORY_IN_PROGRESS,
  payload: { status },
});

export const loadPanicHistorySuccess = (panics) => ({
  type: LOAD_PANIC_HISTORY_SUCCESS,
  payload: { panics },
});

export const loadPanicHistoryFailure = () => ({
  type: LOAD_PANIC_HISTORY_FAILURE,
});
