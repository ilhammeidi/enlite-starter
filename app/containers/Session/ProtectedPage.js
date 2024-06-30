import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import AuthLoading from './AuthLoading';

function ProtectedPage(props) {
  const isAuth = useSelector(state => state.authReducer.loggedIn);
  const navigate = useNavigate();
  const location = useLocation();
  const { children } = props;

  const redirectAfterLogin = location.pathname; // eslint-disable-line

  useEffect(() => {
    // Is not authenticate
    if (isAuth === false) {
      navigate(`/login-firebase?next=${redirectAfterLogin}`);
    }
  }, [isAuth]);

  if (isAuth === null) {
    return (<AuthLoading />);
  }
  // Is authenticate
  return (
    <>
      {children}
    </>
  );
}

ProtectedPage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedPage;
