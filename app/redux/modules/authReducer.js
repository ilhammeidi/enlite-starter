import produce from 'immer';
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

export const AuthState = {
  loading: false,
  loggedIn: null,
  user: null,
  uid: null,
  message: null
};

/* eslint-disable default-case, no-param-reassign */
const authReducer = (state = AuthState, action = {}) => produce(state, draft => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case LOGIN_WITH_EMAIL_REQUEST:
    case REGISTER_WITH_EMAIL_REQUEST:
    case LOGOUT_REQUEST:
      draft.loading = true;
      draft.message = null;
      break;

    case LOGIN_SUCCESS:
    case LOGIN_WITH_EMAIL_SUCCESS:
    case CREATE_USER_SUCCESS:
      draft.loading = false;
      draft.loggedIn = true;
      break;

    case LOGIN_FAILURE:
    case LOGIN_WITH_EMAIL_FAILURE:
    case REGISTER_WITH_EMAIL_FAILURE:
    case CREATE_USER_FAILURE:
    case PASSWORD_FORGET_FAILURE:
    case LOGOUT_FAILURE:
      draft.loading = false;
      draft.message = action.error.message;
      break;

    case PASSWORD_FORGET_SUCCESS:
      draft.message = 'LINK.PASSWORD_RESET.SENT';
      break;

    case LOGOUT_SUCCESS:
      draft.loading = false;
      draft.loggedIn = false;
      break;

    case SYNC_USER:
      draft.loggedIn = action.user != null;
      draft.user = action.user;
      draft.loading = false;
      break;

    case HIDE_MSG:
      draft.message = null;
      break;

    default:
      break;
  }
});

export default authReducer;
