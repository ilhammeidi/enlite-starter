import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import AuthLoading from './AuthLoading';

export default function withAuthorizationRouter(Component) {
  class AuthenticatedComponent extends React.Component {
    render() {
      const { isAuthenticated } = this.props;
      const redirectAfterLogin = this.props.location.pathname; // eslint-disable-line
      const authenticating = isAuth => {
        // Check authentication
        if (isAuth === null) {
          return (<AuthLoading />);
        }
        // Is not authenticate
        if (isAuth === false) {
          return (<Redirect to={`/login?next=${redirectAfterLogin}`} />);
        }
        // Is authenticate
        return (
          <Component {...this.props} />
        );
      };

      return (
        <div>
          {authenticating(isAuthenticated)}
        </div>
      );
    }
  }

  AuthenticatedComponent.propTypes = {
    isAuthenticated: PropTypes.bool
  };

  AuthenticatedComponent.defaultProps = {
    isAuthenticated: null
  };

  const reducer = 'authReducer';
  const mapStateToProps = (state) => ({
    isAuthenticated: state.get(reducer).loggedIn,
    ...state
  });

  return connect(mapStateToProps)(AuthenticatedComponent);
}
