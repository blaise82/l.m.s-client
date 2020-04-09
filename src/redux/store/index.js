import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../reducers";
import initialState from "../store/initialState";

const middlwares = applyMiddleware(logger, thunk);
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(middlwares)
);

export default store;
