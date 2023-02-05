import React from 'react';
import { PropTypes } from 'prop-types';
import useStyles from './appStyles-jss';

function Outer(props) {
  const { classes, cx } = useStyles();
  const {
    children,
  } = props;

  return (
    <div className={cx(classes.appFrameOuter, classes.solidBg)}>
      <main className={classes.outerContent} id="mainContent">
        {children}
      </main>
    </div>
  );
}

Outer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Outer;
