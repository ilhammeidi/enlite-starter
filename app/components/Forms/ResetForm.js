import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import ArrowForward from '@mui/icons-material/ArrowForward';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { injectIntl, FormattedMessage } from 'react-intl';
import { useFormik } from 'formik';
import * as yup from 'yup';
import brand from 'enl-api/dummy/brand';
import logo from 'enl-images/logo.svg';
import Type from 'enl-styles/Typography.scss';
import MessagesForm from './MessagesForm';
import messages from './messages';
import useStyles from './user-jss';

// validation functions
const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
});

function ResetForm(props) {
  const { classes, cx } = useStyles();
  const {
    intl,
    messagesAuth,
    closeMsg,
    submitForm
  } = props;

  const sleep = (ms) => new Promise((r) => { setTimeout(r, ms); });
  const formik = useFormik({
    initialValues: {
      email: ''
    },
    validationSchema,
    onSubmit: async (values) => {
      await sleep(500);
      submitForm(values);
    },
  });

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
          <form onSubmit={formik.handleSubmit}>
            <div>
              <FormControl variant="standard" className={classes.formControl}>
                <TextField
                  name="email"
                  variant="standard"
                  placeholder="Your Email"
                  label={intl.formatMessage(messages.loginFieldEmail)}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  className={classes.field}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </FormControl>
            </div>
            <div className={classes.btnArea}>
              <Button variant="contained" color="primary" type="submit" disabled={formik.isSubmitting || !formik.isValid || !formik.dirty}>
                <FormattedMessage {...messages.resetButton} />
                <ArrowForward className={cx(classes.rightIcon, classes.iconSmall, classes.signArrow)} />
              </Button>
            </div>
          </form>
        </section>
      </Paper>
    </section>
  );
}

ResetForm.propTypes = {
  messagesAuth: PropTypes.string,
  closeMsg: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired
};

ResetForm.defaultProps = {
  messagesAuth: null,
  closeMsg: () => {}
};

export default injectIntl(ResetForm);
