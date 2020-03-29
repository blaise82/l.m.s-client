import { combineReducers } from "redux";
import greetingReducer from "./greetingReducer";
import user from "./signupReducer";
import section from '../reducers/booKSectionReducer';

const rootReducer = combineReducers({
  greeting: greetingReducer,
  user,
  section
});

export default rootReducer;
