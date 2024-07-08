import React, { useEffect, useState } from 'react';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import brand from 'enl-api/dummy/brand';
import PropTypes from 'prop-types';
import { ResetForm } from 'enl-components';
import { setMessage, hideMessage } from 'enl-redux/modules/auth';
import '../../../firebase';
import useStyles from '../../../components/Forms/user-jss';

function ResetPassword(props) {
  const auth = getAuth();
  const dispatch = useDispatch();
  const messageAuth = useSelector((state) => state.auth.message)

  const resetPwd = (values) => {
    const { email } = values;
  
    sendPasswordResetEmail(auth, email)
    .then(() => {
      dispatch(setMessage('LINK.PASSWORD_RESET.SENT'));
    })
    .catch((error) => {
      dispatch(setMessage(error.message));
    });
  };

  const { classes } = useStyles();
  
  const title = brand.name + ' - Reset Password';
  const description = brand.desc;

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
          <ResetForm
            submitForm={(values) => resetPwd(values)}
            messagesAuth={messageAuth}
            closeMsg={() => dispatch(hideMessage())}
          />
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
