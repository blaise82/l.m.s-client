/* eslint-disable import/prefer-default-export */
import { USER_LOGGED_IN } from "../actionTypes/greetingActionType";

export const userLoggedIn = (user) => ({
  type: USER_LOGGED_IN,
  user,
});
