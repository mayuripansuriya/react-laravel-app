import { userConstants } from '../actions/actionTypes';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};

    case userConstants.GETBYID_REQUEST:
      return {
        loading: true,
        user: action.user
      };
    case userConstants.GETBYID_SUCCESS:
      return {
        user: action.user
      };
    case userConstants.GETBYID_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}