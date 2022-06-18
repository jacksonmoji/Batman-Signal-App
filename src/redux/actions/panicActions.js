import {
  SEND_PANIC_REQUEST_SUCCESS,
  SEND_PANIC_REQUEST_FAILURE,
  CANCEL_PANIC_REQUEST,
  LOAD_PANIC_HISTORY,
} from "../types/panic";

export const sendPanicRequestSuccess = (panic) => ({
  type: SEND_PANIC_REQUEST_SUCCESS,
  payload: { panic },
});

export const sendPanicRequestFailure = (panic) => ({
  type: SEND_PANIC_REQUEST_FAILURE,
  payload: { panic },
});

export const cancelPanicRequest = () => ({
  type: CANCEL_PANIC_REQUEST,
});

export const loadPanicHistory = (panics) => ({
  type: LOAD_PANIC_HISTORY,
  payload: { panics },
});
