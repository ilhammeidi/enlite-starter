import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import ArrowForward from '@mui/icons-material/ArrowForward';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import brand from 'enl-api/dummy/brand';
import logo from 'enl-images/logo.svg';
import Type from 'enl-styles/Typography.scss';
import { injectIntl, FormattedMessage } from 'react-intl';
import { closeMsgAction } from 'enl-redux/actions/authActions';
import { TextFieldRedux } from './ReduxFormMUI';
import MessagesForm from './MessagesForm';
import messages from './messages';
import useStyles from './user-jss';

// validation functions
const required = value => (value === null ? 'Required' : undefined);
const email = value => (
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email'
    : undefined
);

function ResetForm(props) {
  const { classes, cx } = useStyles();
  const {
    handleSubmit,
    pristine,
    submitting,
    intl,
    messagesAuth,
    closeMsg
  } = props;

  return (
    <section>
      <div className={Type.textCenter}>
        <NavLink to="/" className={cx(classes.brand, classes.centerFlex)}>
          <img src={logo} alt={brand.name} />
          {brand.name}
        </NavLink>
      </div>
      <Paper className={classes.paperWrap}>
        <Typography variant="h4" className={cx(classes.title, Type.textCenter)} gutterBottom>
          <FormattedMessage {...messages.resetTitle} />
        </Typography>
        <Typography variant="caption" component="p" className={classes.subtitle} gutterBottom align="center">
          <FormattedMessage {...messages.resetSubtitle} />
        </Typography>
        <section className={classes.formWrap}>
          {
            messagesAuth !== null || ''
              ? (
                <MessagesForm
                  variant={messagesAuth === 'LINK.PASSWORD_RESET.SENT' ? 'success' : 'error'}
                  className={classes.msgUser}
                  message={messagesAuth === 'LINK.PASSWORD_RESET.SENT' ? 'Reset link has been sent to Your\'e email' : messagesAuth}
                  onClose={closeMsg}
                />
              )
              : ''
          }
          <form onSubmit={handleSubmit}>
            <div>
              <FormControl variant="standard" className={classes.formControl}>
                <Field
                  name="email"
                  component={TextFieldRedux}
                  placeholder={intl.formatMessage(messages.loginFieldEmail)}
                  label={intl.formatMessage(messages.loginFieldEmail)}
                  required
                  validate={[required, email]}
                  className={classes.field}
                />
              </FormControl>
            </div>
            <div className={classes.btnArea}>
              <Button variant="contained" color="primary" type="submit">
                <FormattedMessage {...messages.resetButton} />
                <ArrowForward className={cx(classes.rightIcon, classes.iconSmall, classes.signArrow)} disabled={submitting || pristine} />
              </Button>
            </div>
          </form>
        </section>
      </Paper>
    </section>
  );
}

ResetForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  messagesAuth: PropTypes.string,
  closeMsg: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired
};

ResetForm.defaultProps = {
  messagesAuth: null
};

const ResetFormReduxed = reduxForm({
  form: 'resetForm',
  enableReinitialize: true,
})(ResetForm);

const mapDispatchToProps = {
  closeMsg: closeMsgAction
};

const mapStateToProps = state => ({
  messagesAuth: state.authReducer.message
});

const ResetFormMapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetFormReduxed);

export default injectIntl(ResetFormMapped);
