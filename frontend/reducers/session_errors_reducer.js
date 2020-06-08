import {
  RECEIVE_ERRORS,
  RECEIVE_CURRENT_USER,
  CLEAR_ERRORS,
  RECEIVE_ERROR
} from "../actions/session_actions";

const _nullErrors = [];

const sessionErrorsReducer = (oldState = _nullErrors, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors;
    case RECEIVE_ERROR:
      return action.error;
    case RECEIVE_CURRENT_USER:
      return _nullErrors;
    case CLEAR_ERRORS:
      return _nullErrors;
    default:
      return oldState;
  }
};

export default sessionErrorsReducer;
  