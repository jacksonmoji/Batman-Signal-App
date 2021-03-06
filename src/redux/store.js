import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { panicReducers } from "./reducers/panicReducers";
import { authReducers } from "./reducers/authReducers";
import { loadingReducers } from "./reducers/loadingReducers";
import { notificationReducers } from "./reducers/notificationReducers";
import { composeWithDevTools } from "redux-devtools-extension";

const reducers = {
  panicReducers,
  authReducers,
  notificationReducers,
  loadingReducers,
};

const rootReducer = combineReducers(reducers);

export const configureStore = () =>
  createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
