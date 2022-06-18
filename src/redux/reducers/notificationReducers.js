import {
  SUCCESS_NOTIFICATION,
  FAILURE_NOTIFICATION,
  CLEAR_NOTIFICATION,
} from "../types/notification";

const initialState = {
  message: "",
  status: "",
  open: false,
};

export const notificationReducers = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SUCCESS_NOTIFICATION:
      return { message: payload.message, status: "success", open: true };

    case FAILURE_NOTIFICATION:
      return { message: payload.message, status: "error", open: true };

    case CLEAR_NOTIFICATION:
      return {
        message: "",
        status: "",
        open: false,
      };

    default:
      return state;
  }
};
