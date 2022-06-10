import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { panicReducers } from "./reducers/panicReducers";
import { authReducers } from "./reducers/authReducers";
import { composeWithDevTools } from "redux-devtools-extension";

const reducers = { panicReducers, authReducers };

const rootReducer = combineReducers(reducers);

export const configureStore = () =>
  createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
