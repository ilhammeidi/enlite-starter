import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';
import Hidden from '@material-ui/core/Hidden';
import { withStyles } from '@material-ui/core/styles';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RegisterFormFirebase, SelectLanguage } from 'enl-components';
import styles from 'enl-components/Forms/user-jss';
import brand from 'enl-api/dummy/brand';
import logo from 'enl-images/logo.svg';
import ArrowBack from '@material-ui/icons/ArrowBack';
import { FormattedMessage } from 'react-intl';
import { registerWithEmail } from 'enl-redux/actions/authActions';
import messages from './messages';

function Register(props) {
  const { classes, handleRegister } = props;
  const title = brand.name + ' - Register';
  const description = brand.desc;
  const [valueForm, setValueForm] = useState(null);

  const submitForm = (values) => setValueForm(values);

  useEffect(() => {
    if (valueForm) {
      console.log(`You submitted:\n\n${valueForm.email}`); // eslint-disable-line
      handleRegister(valueForm.name, valueForm.email, valueForm.password); // eslint-disable-line
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
        <Hidden smDown>
          <div className={classes.opening}>
            <div className={classes.openingWrap}>
              <div className={classes.openingHead}>
                <NavLink to="/" className={classes.brand}>
                  <img src={logo} alt={brand.name} />
                  {brand.name}
                </NavLink>
              </div>
              <Typography variant="h3" component="h1" className={classes.opening} gutterBottom>
                <FormattedMessage {...messages.greetingTitle} />
              </Typography>
              <Typography variant="h6" component="p" className={classes.subpening}>
                <FormattedMessage {...messages.greetingSubtitle} />
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
          <RegisterFormFirebase onSubmit={(values) => submitForm(values)} />
        </div>
      </div>
    </div>
  );
}

Register.propTypes = {
  classes: PropTypes.object.isRequired,
  handleRegister: PropTypes.func.isRequired,
};

function RegisterWrap(props) {
  const { handleRegisterWithEmail } = props;
  const RegisterStyled = withStyles(styles)(Register);
  return (
    <RegisterStyled handleRegister={handleRegisterWithEmail} />
  );
}

RegisterWrap.propTypes = {
  handleRegisterWithEmail: PropTypes.func.isRequired,
};

const mapStateToProps = state => state.authReducer;

const mapDispatchToProps = dispatch => ({
  handleRegisterWithEmail: bindActionCreators(registerWithEmail, dispatch)
});

const RegisterMapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterWrap);

export default RegisterMapped;
