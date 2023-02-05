import React from 'react';
import { makeStyles } from 'tss-react/mui';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles()(() => ({
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
}));

function Loading() {
  const {
    classes
  } = useStyles();
  return (
    <div className={classes.circularProgress}>
      <CircularProgress size={90} thickness={1} color="secondary" />
      <Typography variant="subtitle1" className={classes.text} gutterBottom>
        Authenticating...
      </Typography>
    </div>
  );
}

export default Loading;
