import firebase from 'firebase/app';
import * as types from '../constants/authConstants';

//= ====================================
//  EMAIL AUTH
//-------------------------------------

export const login = (authProvider, navigate) => ({
  type: types.LOGIN_REQUEST,
  authProvider,
  navigate
});

export const loginSuccess = credential => ({
  type: types.LOGIN_SUCCESS,
  credential
});

export const loginFailure = error => ({
  type: types.LOGIN_FAILURE,
  error
});

export const loginWithEmail = (email, password, navigate) => ({
  type: types.LOGIN_WITH_EMAIL_REQUEST,
  email,
  password,
  navigate
});

export const loginWithEmailSuccess = credential => ({
  type: types.LOGIN_WITH_EMAIL_SUCCESS,
  credential
});

export const loginWithEmailFailure = error => ({
  type: types.LOGIN_WITH_EMAIL_FAILURE,
  error
});

export const registerWithEmail = (name, email, password, navigate) => ({
  type: types.REGISTER_WITH_EMAIL_REQUEST,
  name,
  email,
  password,
  navigate
});

export const registerWithEmailSuccess = credential => ({
  type: types.REGISTER_WITH_EMAIL_SUCCESS,
  credential
});

export const registerWithEmailFailure = error => ({
  type: types.REGISTER_WITH_EMAIL_FAILURE,
  error
});

export const passwordForget = (email) => ({
  type: types.PASSWORD_FORGET_REQUEST,
  email
});

export const passwordForgetSuccess = credential => ({ // eslint-disable-line
  type: types.PASSWORD_FORGET_SUCCESS
});

export const passwordForgetFailure = error => ({
  type: types.PASSWORD_FORGET_FAILURE,
  error
});

export const createUserSuccess = key => ({
  type: types.CREATE_USER_SUCCESS,
  key
});

export const createUserFailure = error => ({
  type: types.CREATE_USER_FAILURE,
  error
});

export const logout = navigate => ({
  type: types.LOGOUT_REQUEST,
  navigate
});

export const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS
});

export const logoutFailure = error => ({
  type: types.LOGOUT_FAILURE,
  error
});

export const syncUser = user => ({
  type: types.SYNC_USER,
  user
});

export const closeMsgAction = () => ({
  type: types.HIDE_MSG
});

//= ====================================
//  SOCIAL AUTH
//-------------------------------------

export const signInWithGithub = navigate => login(
  new firebase.auth.GithubAuthProvider(),
  navigate
);

export const signInWithGoogle = navigate => login(
  new firebase.auth.GoogleAuthProvider(),
  navigate
);

export const signInWithTwitter = navigate => login(
  new firebase.auth.TwitterAuthProvider(),
  navigate
);
