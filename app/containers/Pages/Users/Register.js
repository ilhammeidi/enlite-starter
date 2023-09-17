import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { RegisterForm, SelectLanguage } from 'enl-components';
import useStyles from 'enl-components/Forms/user-jss';
import brand from 'enl-api/dummy/brand';
import logo from 'enl-images/logo.svg';
import ArrowBack from '@mui/icons-material/ArrowBack';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Register() {
  const { classes } = useStyles();
  const mdDown = useMediaQuery(theme => theme.breakpoints.down('md'));

  const title = brand.name + ' - Register';
  const description = brand.desc;
  const [valueForm, setValueForm] = useState(null);

  const submitForm = (values) => setValueForm(values);

  useEffect(() => {
    if (valueForm) {
      console.log(`You submitted:\n\n${valueForm.email}`); // eslint-disable-line
      window.location.href = '/app';
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
        {!mdDown && (
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
        )}
        <div className={classes.sideFormWrap}>
          <RegisterForm onSubmit={(values) => submitForm(values)} />
        </div>
      </div>
    </div>
  );
}

export default Register;
