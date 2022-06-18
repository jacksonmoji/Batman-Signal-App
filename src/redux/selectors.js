export const getPanicHistory = (state) => state.panicReducers.panicList;
export const loading = (state) => state.loadingReducers.loading;
export const getAuthenticationStatus = (state) =>
  state.authReducers.isAuthenticated;

export const getNotification = (state) => state.notificationReducers;
export const getPanicInformation = (state) => state.panicReducers;
