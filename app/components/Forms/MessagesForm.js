import React from 'react';
import PropTypes from 'prop-types';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import InfoIcon from '@mui/icons-material/Info';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import SnackbarContent from '@mui/material/SnackbarContent';
import WarningIcon from '@mui/icons-material/Warning';
import useStyles from './user-jss';

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

function MessagesForm(props) {
  const { classes, cx } = useStyles();
  const {
    className,
    message,
    onClose,
    variant,
    ...other
  } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={cx(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={(
        <span id="client-snackbar" className={classes.message}>
          <Icon className={cx(classes.iconMsg, classes.iconVariant)} />
          {message}
        </span>
      )}
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          className={classes.close}
          onClick={onClose}
          size="large">
          <CloseIcon className={classes.iconMsg} />
        </IconButton>,
      ]}
      {...other}
    />
  );
}

MessagesForm.propTypes = {
  className: PropTypes.string,
  message: PropTypes.node,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
};

MessagesForm.defaultProps = {
  className: '',
  message: null,
  onClose: () => {},
};

export default MessagesForm;
