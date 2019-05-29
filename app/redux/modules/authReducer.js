import { Record } from 'immutable';
import {
  LOGIN_REQUEST,
  LOGIN_WITH_EMAIL_REQUEST,
  REGISTER_WITH_EMAIL_REQUEST,
  LOGOUT_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_WITH_EMAIL_SUCCESS,
  CREATE_USER_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_WITH_EMAIL_FAILURE,
  REGISTER_WITH_EMAIL_FAILURE,
  CREATE_USER_FAILURE,
  LOGOUT_FAILURE,
  LOGOUT_SUCCESS,
  PASSWORD_FORGET_FAILURE,
  PASSWORD_FORGET_SUCCESS,
  SYNC_USER,
  HIDE_MSG
} from '../constants/authConstants';

export const AuthState = new Record({
  loading: false,
  loggedIn: null,
  user: null,
  uid: null,
  message: null
});

export default function authReducer(state = new AuthState(), action = {}) {
  switch (action.type) {
    case LOGIN_REQUEST:
    case LOGIN_WITH_EMAIL_REQUEST:
    case REGISTER_WITH_EMAIL_REQUEST:
    case LOGOUT_REQUEST:
      return {
        ...state,
        loading: true,
        message: null
      };

    case LOGIN_SUCCESS:
    case LOGIN_WITH_EMAIL_SUCCESS:
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        loggedIn: true
      };

    case LOGIN_FAILURE:
    case LOGIN_WITH_EMAIL_FAILURE:
    case REGISTER_WITH_EMAIL_FAILURE:
    case CREATE_USER_FAILURE:
    case PASSWORD_FORGET_FAILURE:
    case LOGOUT_FAILURE:
      return {
        ...state,
        loading: false,
        message: action.error.message
      };

    case PASSWORD_FORGET_SUCCESS:
      return {
        ...state,
        message: 'LINK.PASSWORD_RESET.SENT'
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        loggedIn: false
      };

    case SYNC_USER:
      return {
        ...state,
        loggedIn: action.user != null,
        user: action.user,
        loading: false,
      };

    case HIDE_MSG:
      return {
        message: null
      };

    default:
      return state;
  }
}
