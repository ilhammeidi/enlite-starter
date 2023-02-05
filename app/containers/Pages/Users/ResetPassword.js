import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { ResetForm } from 'enl-components';
import useStyles from '../../../components/Forms/user-jss';

function ResetPassword() {
  const { classes } = useStyles();
  const title = brand.name + ' - Reset Password';
  const description = brand.desc;
  const [valueForm, setValueForm] = useState(null);

  const submitForm = (values) => setValueForm(values);

  useEffect(() => {
    if (valueForm) {
      console.log(`You submitted:\n\n${valueForm.email}`); // eslint-disable-line
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

export default ResetPassword;
