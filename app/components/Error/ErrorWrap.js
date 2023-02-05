import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from 'tss-react/mui';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Route, Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import borderHexaGrey from 'enl-images/decoration/hexaGrey.svg';
import borderHexaWhite from 'enl-images/decoration/hexaWhite.svg';
import messages from './messages';

const useStyles = makeStyles()((theme, _params, classes) => ({
  invert: {},
  errorWrap: {
    background: `url(${theme.palette.mode === 'dark' ? borderHexaWhite : borderHexaGrey}) no-repeat`,
    backgroundSize: '100% 100%',
    backgroundPosition: '-4px center',
    width: 500,
    height: 500,
    [theme.breakpoints.down('sm')]: {
      width: 300,
      height: 300,
    },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    position: 'relative',
    margin: `${theme.spacing(3)} auto`,
    [`&.${classes.invert}`]: {
      '& h1, h5': {
        color: theme.palette.common.white
      }
    },
    '& h5': {
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.2rem',
      },
    },
  },
  title: {
    color: theme.palette.text.secondary,
    fontWeight: 700,
    [theme.breakpoints.down('sm')]: {
      fontSize: '4rem',
      marginBottom: theme.spacing(2)
    },
  },
  deco: {
    boxShadow: theme.shadows[2],
    position: 'absolute',
    borderRadius: 2,
  },
  button: {
    marginTop: 24
  }
}));

function ErrorWrap(props) {
  const {
    classes,
    cx
  } = useStyles();
  return (
    <Route
      render={({ staticContext }) => {
        if (staticContext) {
          staticContext.status = 404; // eslint-disable-line
        }
        const {
          title,
          desc,
          invert
        } = props;
        return (
          <div className={cx(classes.errorWrap, invert && classes.invert)}>
            <Typography className={classes.title} variant="h1">{title}</Typography>
            <Typography variant="h5">{desc}</Typography>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              component={Link}
              to="/app"
            >
              <FormattedMessage {...messages.button} />
            </Button>
          </div>
        );
      }}
    />
  );
}

ErrorWrap.propTypes = {
  desc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  invert: PropTypes.bool,
};

ErrorWrap.defaultProps = {
  invert: false,
};

export default ErrorWrap;
