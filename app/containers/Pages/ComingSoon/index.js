import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import brand from 'enl-api/dummy/brand';
import logo from 'enl-images/logo.svg';
import { injectIntl, FormattedMessage } from 'react-intl';
import styles from 'enl-components/Forms/user-jss';
import messages from './messages';

function ComingSoon(props) {
  const [email, setEmail] = useState('');

  const handleChange = event => {
    setEmail(event.target.value);
  };

  const title = brand.name + ' - Coming Soon';
  const description = brand.desc;
  const { classes, intl } = props;
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
      <div className={classes.container}>
        <div className={classes.fullFormWrap}>
          <Paper
            className={
              classNames(
                classes.fullWrap,
                classes.centerV
              )
            }
          >
            <div className={classes.brandCenter}>
              <div className={classNames(classes.brand, classes.invert)}>
                <img src={logo} alt={brand.name} />
                {brand.name}
              </div>
            </div>
            <Typography variant="h2" className={classes.titleColor} gutterBottom>
              <FormattedMessage {...messages.title} />
            </Typography>
            <Typography variant="h6" className={classes.subtitleBig} gutterBottom align="center">
              <FormattedMessage {...messages.subtitle} />
            </Typography>
            <section className={classes.pageFormWrap}>
              <div className={classNames(classes.notifyForm, classes.centerAdornment)}>
                <FormControl>
                  <TextField
                    fullWidth
                    id="standard-name"
                    label={intl.formatMessage(messages.field)}
                    className={classes.textField}
                    value={email}
                    onChange={(e) => handleChange(e)}
                    margin="normal"
                  />
                </FormControl>
                <aside>
                  <Button variant="contained" size="small" color="secondary" type="submit">
                    <FormattedMessage {...messages.button} />
                  </Button>
                </aside>
              </div>
              <div className={classNames(classes.lockForm, classes.centerAdornment)}>
                <IconButton color="primary" className={classes.button} href="#">
                  <i className="ion-logo-facebook" />
                </IconButton>
                <IconButton color="primary" className={classes.button} href="#">
                  <i className="ion-logo-twitter" />
                </IconButton>
                <IconButton color="primary" className={classes.button} href="#">
                  <i className="ion-logo-instagram" />
                </IconButton>
              </div>
            </section>
          </Paper>
        </div>
      </div>
    </div>
  );
}

ComingSoon.propTypes = {
  classes: PropTypes.object.isRequired,
  intl: PropTypes.object.isRequired
};

export default withStyles(styles)(injectIntl(ComingSoon));
