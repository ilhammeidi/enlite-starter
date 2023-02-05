import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Icon from '@mui/material/Icon';
import useStyles from './papperStyle-jss';

function PapperBlock(props) {
  const { classes, cx } = useStyles();
  const {
    title,
    desc,
    children,
    whiteBg,
    noMargin,
    colorMode,
    overflowX,
    icon
  } = props;

  const color = mode => {
    switch (mode) {
      case 'light':
        return classes.colorLight;
      case 'dark':
        return classes.colorDark;
      default:
        return classes.none;
    }
  };
  return (
    <div>
      <Paper
        className={
          cx(
            classes.root,
            noMargin && classes.noMargin,
            color(colorMode)
          )
        }
        elevation={0}
      >
        <div className={classes.descBlock}>
          <span className={classes.iconTitle}>
            <Icon>{icon}</Icon>
          </span>
          <div className={classes.titleText}>
            <Typography variant="h6" component="h2" className={classes.title}>
              {title}
            </Typography>
            <Typography component="p" className={classes.description}>
              {desc}
            </Typography>
          </div>
        </div>
        <section className={cx(classes.content, whiteBg && classes.whiteBg, overflowX && classes.overflowX)}>
          {children}
        </section>
      </Paper>
    </div>
  );
}

PapperBlock.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  icon: PropTypes.string,
  children: PropTypes.node.isRequired,
  whiteBg: PropTypes.bool,
  colorMode: PropTypes.string,
  noMargin: PropTypes.bool,
  overflowX: PropTypes.bool,
};

PapperBlock.defaultProps = {
  whiteBg: false,
  noMargin: false,
  colorMode: 'none',
  overflowX: false,
  icon: 'flag'
};

export default PapperBlock;
