import React from 'react';
import { Outlet } from 'react-router-dom';
import useStyles from './appStyles-jss';

function Outer() {
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.appFrameOuter, classes.solidBg)}>
      <main className={classes.outerContent} id="mainContent">
        <Outlet />
      </main>
    </div>
  );
}

export default Outer;
