import {
  SUCCESS_NOTIFICATION,
  FAILURE_NOTIFICATION,
  CLEAR_NOTIFICATION,
} from "../types/notification";

export const successNotification = (notification) => ({
  type: SUCCESS_NOTIFICATION,
  payload: { message: notification },
});

export const failureNotification = (notification) => ({
  type: FAILURE_NOTIFICATION,
  payload: { message: notification },
});

export const clearNotification = () => ({
  type: CLEAR_NOTIFICATION,
});
