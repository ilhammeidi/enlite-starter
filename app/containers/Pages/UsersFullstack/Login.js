import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Hidden from '@mui/material/Hidden';
import { NavLink } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { LoginFormFirebase, SelectLanguage } from 'enl-components';
import logo from 'enl-images/logo.svg';
import ArrowBack from '@mui/icons-material/ArrowBack';
import useStyles from 'enl-components/Forms/user-jss';
import { FormattedMessage } from 'react-intl';
import { loginWithEmail } from 'enl-redux/actions/authActions';
import messages from './messages';

function Login(props) {
  const { handleLogin } = props;
  const { classes } = useStyles();
  const title = brand.name + ' - Login';
  const description = brand.desc;
  const [valueForm, setValueForm] = useState(null);

  const submitForm = (values) => setValueForm(values);

  useEffect(() => {
    if (valueForm) {
      handleLogin(valueForm.email, valueForm.password); // eslint-disable-line
    }
  }, [valueForm]);

  return (
    <div className={classes.rootFull}>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>
      <div className={classes.containerSide}>
        <Hidden mdDown>
          <div className={classes.opening}>
            <div className={classes.openingWrap}>
              <div className={classes.openingHead}>
                <NavLink to="/" className={classes.brand}>
                  <img src={logo} alt={brand.name} />
                  {brand.name}
                </NavLink>
              </div>
              <Typography variant="h3" component="h1" gutterBottom>
                <FormattedMessage {...messages.welcomeTitle} />
                &nbsp;
                {brand.name}
              </Typography>
              <Typography variant="h6" component="p" className={classes.subpening}>
                <FormattedMessage {...messages.welcomeSubtitle} />
              </Typography>
            </div>
            <div className={classes.openingFooter}>
              <NavLink to="/" className={classes.back}>
                <ArrowBack />
                &nbsp;back to site
              </NavLink>
              <div className={classes.lang}>
                <SelectLanguage />
              </div>
            </div>
          </div>
        </Hidden>
        <div className={classes.sideFormWrap}>
          <LoginFormFirebase onSubmit={(values) => submitForm(values)} />
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {
  handleLogin: PropTypes.func.isRequired,
};

function LoginWrap(props) {
  const { handleLoginWithEmail } = props;
  return (
    <Login handleLogin={handleLoginWithEmail} />
  );
}

LoginWrap.propTypes = { handleLoginWithEmail: PropTypes.func.isRequired, };

const mapStateToProps = state => ({
  state: state.authReducer
});

const mapDispatchToProps = dispatch => ({
  handleLoginWithEmail: bindActionCreators(loginWithEmail, dispatch)
});

const LoginMapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginWrap);

export default LoginMapped;
