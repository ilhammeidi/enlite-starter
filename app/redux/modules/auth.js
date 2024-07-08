import { createSlice } from '@reduxjs/toolkit';

function getUrlVars() {
  const vars = {};
  const parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) { // eslint-disable-line
    vars[key] = value;
  });
  return vars;
}

const initialState = {
  loading: false,
  loggedIn: null,
  user: null,
  uid: null,
  message: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    requestAuth: (state) => {
      state.loading = true;
      state.message = null;
    },
    loginUser: (state, action) => {
      const user = action.payload;
      state.loading = false;
      state.user = user;
      state.loggedIn = user !== null;
    },
    logoutUser: (state) => {
      state.loading = false;
      state.user = null;
      state.loggedIn = false;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
      state.loading = false;
    },
    passwordReset: (state) => {
      state.message = 'LINK.PASSWORD_RESET.SENT'
    },
    hideMessage: (state) => {
      state.message = null;
    }
  }
});

export const {
  requestAuth, passwordReset,
  loginUser, logoutUser,
  setMessage, hideMessage,
} = authSlice.actions;

export default authSlice.reducer;
