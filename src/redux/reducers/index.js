import { combineReducers } from "redux";
import greetingReducer from "./greetingReducer";
import user from "./signupReducer";

const rootReducer = combineReducers({
  greeting: greetingReducer,
  user,
});

export default rootReducer;
