import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import Outer from '../Templates/Outer';
import Application from './Application';
import ThemeWrapper from './ThemeWrapper';
import {
  Login, Register,
  LoginFullstack, RegisterFullstack,
  ResetPassword, ResetPasswordFullstack,
  ComingSoon,
  Maintenance,
  NotFoundDedicated
} from '../pageListAsync';

window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

function App(props) {
  const { history } = props;
  return (
    <ThemeWrapper>
      <BrowserRouter>
        <Routes>
          <Route element={<Outer />}>
            <Route path="/" element={<Login />} />
          </Route>
          <Route path="app/*" element={<Application history={history} />} />
          <Route element={<Outer />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="reset-password" element={<ResetPassword />} />
            <Route path="login-firebase" element={<LoginFullstack />} />
            <Route path="register-firebase" element={<RegisterFullstack />} />
            <Route path="reset-password-firebase" element={<ResetPasswordFullstack />} />
            <Route path="maintenance" element={<Maintenance />} />
            <Route path="coming-soon" element={<ComingSoon />} />
          </Route>
          <Route path="*" element={<NotFoundDedicated />} />
        </Routes>
      </BrowserRouter>
    </ThemeWrapper>
  );
}

App.propTypes = {
  history: PropTypes.object.isRequired,
};

export default App;
