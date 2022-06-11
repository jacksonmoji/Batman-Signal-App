export const getPanicHistory = (state) => state.panicReducers.panic_history;
export const getPanicHistoryLoadingStatus = (state) =>
  state.panicReducers.panic_history_loading;
export const getUser = (state) => state.authReducers.userInfo;
export const getPanicInformation = (state) =>
  state.panicReducers.panic_information;
export const getPanicInProgress = (state) =>
  state.panicReducers.panic_in_progress;
