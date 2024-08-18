import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ArrowForward from '@mui/icons-material/ArrowForward';
import Icon from '@mui/material/Icon';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import { injectIntl, FormattedMessage } from 'react-intl';
import { useFormik } from 'formik';
import * as yup from 'yup';
import brand from 'enl-api/dummy/brand';
import logo from 'enl-images/logo.svg';
import MessagesForm from './MessagesForm';
import messages from './messages';
import useStyles from './user-jss';

// validation functions
const validationSchema = yup.object({
  name: yup
    .string('Enter your name')
    .required('Name is required'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .required('Password is required'),
  passwordConfirmation: yup
    .string()
    .required('Re-type Password is required')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
  termsAndConditions: yup
    .bool()
    .oneOf([true])
});

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
  return <NavLink to={props.to} {...props} />; // eslint-disable-line
});

function RegisterForm(props) {
  const { classes, cx } = useStyles();
  const sleep = (ms) => new Promise((r) => { setTimeout(r, ms); });
  const mdUp = useMediaQuery(theme => theme.breakpoints.up('md'));

  const {
    link, intl, messagesAuth,
    closeMsg, loading, submitForm,
    googleAuth, twitterAuth, githubAuth
  } = props;

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      termsAndConditions: false
    },
    validationSchema,
    onSubmit: async (values) => {
      await sleep(500);
      submitForm(values);
    },
  });

  return (
    <Paper className={classes.sideWrap}>
      {!mdUp && (
        <div className={classes.headLogo}>
          <NavLink to="/" className={classes.brand}>
            <img src={logo} alt={brand.name} />
            {brand.name}
          </NavLink>
        </div>
      )}
      <div className={classes.topBar}>
        <Typography variant="h4" className={classes.title}>
          <FormattedMessage {...messages.register} />
        </Typography>
        <Button size="small" className={classes.buttonLink} component={LinkBtn} to={link}>
          <Icon className={cx(classes.icon, classes.signArrow)}>arrow_forward</Icon>
          <FormattedMessage {...messages.toAccount} />
        </Button>
      </div>
      {
        messagesAuth !== null || ''
          ? (
            <MessagesForm
              variant="error"
              className={classes.msgUser}
              message={messagesAuth}
              onClose={closeMsg}
            />
          )
          : ''
      }
      <section>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <FormControl variant="standard" className={classes.formControl}>
              <TextField
                id="name"
                name="name"
                label={intl.formatMessage(messages.loginFieldName)}
                variant="standard"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                className={classes.field}
              />
            </FormControl>
          </div>
          <div>
            <FormControl variant="standard" className={classes.formControl}>
              <TextField
                id="email"
                name="email"
                label={intl.formatMessage(messages.loginFieldEmail)}
                variant="standard"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                className={classes.field}
              />
            </FormControl>
          </div>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <FormControl variant="standard" className={classes.formControl}>
                <TextField
                  id="password"
                  name="password"
                  type="password"
                  label={intl.formatMessage(messages.loginFieldPassword)}
                  variant="standard"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={formik.touched.password && Boolean(formik.errors.password)}
                  helperText={formik.touched.password && formik.errors.password}
                  className={classes.field}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl variant="standard" className={classes.formControl}>
                <TextField
                  id="passwordConfirmation"
                  name="passwordConfirmation"
                  type="password"
                  label={intl.formatMessage(messages.loginFieldRetypePassword)}
                  variant="standard"
                  value={formik.values.passwordConfirmation}
                  onChange={formik.handleChange}
                  error={formik.touched.passwordConfirmation && Boolean(formik.errors.passwordConfirmation)}
                  helperText={formik.touched.passwordConfirmation && formik.errors.passwordConfirmation}
                  className={classes.field}
                />
              </FormControl>
            </Grid>
          </Grid>
          <div>
            <FormControlLabel
              control={(
                <Checkbox
                  id="termsAndConditions"
                  name="termsAndConditions"
                  checked={formik.values.check}
                  value={formik.values.check}
                  onChange={formik.handleChange}
                  className={classes.agree}
                  required
                />
              )}
              label={intl.formatMessage(messages.aggree)}
            />
            <a href="/terms-conditions" target="_blank" className={classes.link}>
              <FormattedMessage {...messages.terms} />
            </a>
          </div>
          <div className={classes.btnArea}>
            <Button variant="contained" fullWidth disabled={loading} color="primary" type="submit">
              {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
              <FormattedMessage {...messages.loginButtonContinue} />
              {!loading && <ArrowForward className={cx(classes.rightIcon, classes.iconSmall, classes.signArrow)} />}
            </Button>
          </div>
        </form>
      </section>
      <h5 className={classes.divider}>
        <span>
          <FormattedMessage {...messages.registerOr} />
        </span>
      </h5>
      <section className={classes.socmedSideLogin}>
        <Button
          variant="contained"
          className={classes.redBtn}
          type="button"
          size="large"
          onClick={googleAuth}
        >
          <i className="ion-logo-google" />
          Google
        </Button>
        <Button
          variant="contained"
          className={classes.cyanBtn}
          type="button"
          size="large"
          onClick={twitterAuth}
        >
          <i className="ion-logo-twitter" />
          Twitter
        </Button>
        <Button
          variant="contained"
          className={classes.greyBtn}
          type="button"
          size="large"
          onClick={githubAuth}
        >
          <i className="ion-logo-github" />
          Github
        </Button>
      </section>
    </Paper>
  );
}

RegisterForm.propTypes = {
  intl: PropTypes.object.isRequired,
  messagesAuth: PropTypes.string,
  closeMsg: PropTypes.func,
  loading: PropTypes.bool,
  submitForm: PropTypes.func.isRequired,
  googleAuth: PropTypes.func,
  twitterAuth: PropTypes.func,
  githubAuth: PropTypes.func,
  link: PropTypes.string,
};

RegisterForm.defaultProps = {
  messagesAuth: null,
  loading: false,
  closeMsg: () => {},
  googleAuth: () => {},
  twitterAuth: () => {},
  link: '#'
};

export default injectIntl(RegisterForm);
