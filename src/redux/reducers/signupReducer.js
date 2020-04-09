import { USER_LOGGED_IN } from "../actionTypes/greetingActionType";

export default function user(state = {}, action = {}) {
  switch (action.type) {
    case USER_LOGGED_IN:
      return {};
    default:
      return state;
  }
}
