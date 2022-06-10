// import { createSelector } from "reselect";

export const getPanicHistory = (state) => state.panicReducers.panic_history;
export const getUser = (state) => state.authReducers.userInfo;
export const getPanicInformation = (state) =>
  state.panicReducers.panic_information;
export const getPanicInProgress = (state) => state.panicReducers.panic_in_progress;
// export const getSelectionFilter = (state) => state.selectionFilters.texts;

// export const getActiveTodos = createSelector(getPanic, (panics) =>
//   panics.filter((panic) => !panic.is_active)
// );

// export const getPanicHistory = createSelector(getPanic, (panics) =>
//   panics.filter((panic) => panic.is_active)
// );
