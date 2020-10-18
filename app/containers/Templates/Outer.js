import React from 'react';
import { PropTypes } from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import styles from './appStyles-jss';

function Outer(props) {
  const {
    classes,
    children,
  } = props;

  return (
    <div className={classNames(classes.appFrameOuter, classes.solidBg)}>
      <main className={classes.outerContent} id="mainContent">
        {children}
      </main>
    </div>
  );
}

Outer.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export default (withStyles(styles)(Outer));
