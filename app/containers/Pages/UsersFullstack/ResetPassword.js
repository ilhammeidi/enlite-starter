import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import brand from 'enl-api/dummy/brand';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { ResetForm } from 'enl-components';
import { passwordForget } from 'enl-redux/actions/authActions';
import styles from '../../../components/Forms/user-jss';

function ResetPassword(props) {
  const { classes, forgotPwd } = props;
  const title = brand.name + ' - Reset Password';
  const description = brand.desc;
  const [valueForm, setValueForm] = useState(null);

  const submitForm = (values) => setValueForm(values);

  useEffect(() => {
    if (valueForm) {
      console.log(`You submitted:\n\n${valueForm}`); // eslint-disable-line
      forgotPwd(valueForm.email); // eslint-disable-line
    }
  }, [valueForm]);

  return (
    <div className={classes.root}>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>
      <div className={classes.container}>
        <div className={classes.userFormWrap}>
          <ResetForm onSubmit={(values) => submitForm(values)} />
        </div>
      </div>
    </div>
  );
}

ResetPassword.propTypes = {
  classes: PropTypes.object.isRequired,
  forgotPwd: PropTypes.func.isRequired,
};

function ResetWrap(props) {
  const { handleForgotPwd } = props;
  const ResetStyled = withStyles(styles)(ResetPassword);
  return (
    <ResetStyled forgotPwd={handleForgotPwd} />
  );
}

ResetWrap.propTypes = {
  handleForgotPwd: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  state: state.authReducer
});

const mapDispatchToProps = dispatch => ({
  handleForgotPwd: bindActionCreators(passwordForget, dispatch)
});

const ResetPasswordMapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetWrap);

export default ResetPasswordMapped;
