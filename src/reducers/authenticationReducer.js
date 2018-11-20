import { userConstants, LOGIN_USER, REGISTER_USER, GETBYID } from '../actions/actionTypes';

let user = JSON.parse(localStorage.getItem('user'));
console.log(user)
const initialState = {
  user: {},
  isLoggedIn: false,
  loginErrorMessage: '',
}

initialState.user = user ? { loggedIn: true, user } : {};
console.log(initialState.user)
export default function authentication(state = initialState, action) {
  console.log(action)
  switch (action.type) {
    // case userConstants.LOGIN_REQUEST:
    //   return {
    //     loggingIn: true,
    //     user: action.user
    //   };
    // case userConstants.LOGIN_SUCCESS:
    //   return {
    //     loggedIn: true,
    //     user: action.user
    //   };
    // case userConstants.LOGIN_FAILURE:
    //   return {};
    // case userConstants.LOGOUT:
    //   return {};

    // case userConstants.GETBYID_REQUEST:
    //   return {
    //     loading: true,
    //     user: action.user
    //   };
    // case userConstants.GETBYID_SUCCESS:
    //   return {
    //     user: action.user
    //   };
    // case userConstants.GETBYID_FAILURE:
    //   return { 
    //     error: action.error
    //   };
    case `${LOGIN_USER}_PENDING`:
        return {
            ...state,
            loading: true,
            error: false,
            loginErrorMessage: '',
        };
    case `${LOGIN_USER}_FULFILLED`:
        return {
            ...state,
            loading: false,
            isLoggedIn: true,
            user: action.payload.data.user,
            error: false,
            loginErrorMessage: '',
        };
    case `${LOGIN_USER}_REJECTED`:
        return {
            ...state,
            loading: false,
            error: true,
            loginErrorMessage: action.payload,
        };
    case `${REGISTER_USER}_PENDING`:
        return {
            ...state,
            loading: true,
            error: false,
            registerErrorMessage: '',
        };
    case `${REGISTER_USER}_FULFILLED`:
        return {
            ...state,
            loading: false,
            isRegistered: true,
            user: action.payload.data.user,
            error: false,
            registerErrorMessage: '',
        };
    case `${REGISTER_USER}_REJECTED`:
        return {
            ...state,
            loading: false,
            error: true,
            registerErrorMessage: action.payload,
        };
    case `${REGISTER_USER}_PENDING`:
        return {
            ...state,
            loading: true,
            error: false,
            registerErrorMessage: '',
        };
    case `${GETBYID}_FULFILLED`:
        return {
            ...state,
            loading: false,
            isRegistered: true,
            user: action.payload.data.user,
            error: false,
            registerErrorMessage: '',
        };
    case `${GETBYID}_REJECTED`:
        return {
            ...state,
            loading: false,
            error: true,
            registerErrorMessage: action.payload,
        };
    default:
      return state
  }
}