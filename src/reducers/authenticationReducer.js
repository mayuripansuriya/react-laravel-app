import { userConstants, LOGIN_USER, REGISTER_USER, GETBYID,  LOGOUT, USER_EDIT } from '../actions/actionTypes';

let user = JSON.parse(localStorage.getItem('user'));

const initialState = {
  user: {},
  isLoggedIn: false,
  isEdited:false,
  isRegistered:false,
  loginErrorMessage: '',
  registerErrorMessage: '',
  editErrorMessage:'',
  errorMessage:''
}

initialState.user = user ? { loggedIn: true, user } : {};
export default function authentication(state = initialState, action) {
console.log(action)
  switch (action.type) {
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
            registerErrorMessage: action.payload.errors,
        };
    case `${USER_EDIT}_PENDING`:
        return {
            ...state,
            loading: true,
            error: false,
            editErrorMessage: '',
        };
    case `${USER_EDIT}_FULFILLED`:
        return {
            ...state,
            loading: false,
            isRegistered: true,
            user: action.payload.data.user,
            error: false,
            editErrorMessage: '',
        };
    case `${USER_EDIT}_REJECTED`:
        return {
            ...state,
            loading: false,
            error: true,
            editErrorMessage: action.payload.errors,
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
            isEdited: true,
            user: action.payload.data.user,
            error: false,
            registerErrorMessage: '',
        };
    case `${GETBYID}_REJECTED`:
        return {
            ...state,
            loading: false,
            error: true,
            errorMessage: action.payload,
        };
    case `${LOGOUT}_PENDING`:
        return {
            ...state,
            pending: true,
        };
    case `${LOGOUT}_FULFILLED`: {
        return {
            ...state,
            pending: false,
            logoutError: false,
            authenticated: false,
            errorMessage: null,
        };
    }
    case `${LOGOUT}_REJECTED`: {
        return {
            ...state,
            pending: false,
            logoutError: true,
            errorMessage: action.payload.error,
        };
    }
    default:
      return state
  }
}