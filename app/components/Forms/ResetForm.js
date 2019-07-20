import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form/immutable';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import ArrowForward from '@material-ui/icons/ArrowForward';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import brand from 'enl-api/dummy/brand';
import logo from 'enl-images/logo.svg';
import Type from 'enl-styles/Typography.scss';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import { closeMsgAction } from 'enl-redux/actions/authActions';
import { TextFieldRedux } from './ReduxFormMUI';
import MessagesForm from './MessagesForm';
import messages from './messages';
import styles from './user-jss';

// validation functions
const required = value => (value == null ? 'Required' : undefined);
const email = value => (
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email'
    : undefined
);

class ResetForm extends React.Component {
  render() {
    const {
      classes,
      handleSubmit,
      pristine,
      submitting,
      intl,
      messagesAuth,
      closeMsg
    } = this.props;
    return (
      <section>
        <div className={Type.textCenter}>
          <NavLink to="/" className={classNames(classes.brand, classes.centerFlex)}>
            <img src={logo} alt={brand.name} />
            {brand.name}
          </NavLink>
        </div>
        <Paper className={classes.paperWrap}>
          <Typography variant="h4" className={classNames(classes.title, Type.textCenter)} gutterBottom>
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
                <FormControl className={classes.formControl}>
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
                  <ArrowForward className={classNames(classes.rightIcon, classes.iconSmall, classes.signArrow)} disabled={submitting || pristine} />
                </Button>
              </div>
            </form>
          </section>
        </Paper>
      </section>
    );
  }
}

ResetForm.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  messagesAuth: PropTypes.string,
  closeMsg: PropTypes.func.isRequired,
  intl: intlShape.isRequired
};

ResetForm.defaultProps = {
  messagesAuth: null
};

const ResetFormReduxed = reduxForm({
  form: 'immutableEResetFrm',
  enableReinitialize: true,
})(ResetForm);

const mapDispatchToProps = {
  closeMsg: closeMsgAction
};

const reducerAuth = 'authReducer';
const mapStateToProps = state => ({
  messagesAuth: state.get(reducerAuth).message,
  ...state,
});

const ResetFormMapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetFormReduxed);

export default withStyles(styles)(injectIntl(ResetFormMapped));
