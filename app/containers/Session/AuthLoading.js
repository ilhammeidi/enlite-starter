import React from 'react';
import { PropTypes } from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
const styles = {
  circularProgress: {
    position: 'fixed',
    top: 'calc(50% - 45px)',
    left: '50%',
    textAlign: 'center'
  },
  text: {
    marginTop: 8,
    opacity: 0.75
  }
};

function Loading(props) {
  const { classes } = props;
  return (
    <div className={classes.circularProgress}>
      <CircularProgress size={90} thickness={1} color="secondary" />
      <Typography variant="subtitle1" className={classes.text} gutterBottom>
        Authenticating...
      </Typography>
    </div>
  );
}

Loading.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default (withStyles(styles)(Loading));
