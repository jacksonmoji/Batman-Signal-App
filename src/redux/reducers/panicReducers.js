import {
  SEND_PANIC_REQUEST_SUCCESS,
  CANCEL_PANIC_REQUEST_SUCCESS,
  LOAD_PANIC_HISTORY_IN_PROGRESS,
  LOAD_PANIC_HISTORY_SUCCESS,
  LOAD_PANIC_HISTORY_FAILURE,
} from "../types/panic";

const initialState = {
  panic_history: [],
  panic_information: {},
  panic_in_progress: false,
  panic_history_loading: false,
};

export const panicReducers = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SEND_PANIC_REQUEST_SUCCESS: {
      const { panic } = payload;
      return {
        ...state,
        panic_information: panic,
        panic_in_progress: true,
      };
    }
    case CANCEL_PANIC_REQUEST_SUCCESS: {
      const { panic } = payload;
      return {
        ...state,
        panic_information: panic,
        panic_in_progress: false,
      };
    }
    case LOAD_PANIC_HISTORY_SUCCESS: {
      const { panics } = payload;
      return {
        ...state,
        panic_history: panics,
      };
    }
    case LOAD_PANIC_HISTORY_IN_PROGRESS: {
      const { status } = payload;
      return {
        ...state,
        panic_history_loading: status,
      };
    }
    case LOAD_PANIC_HISTORY_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};
