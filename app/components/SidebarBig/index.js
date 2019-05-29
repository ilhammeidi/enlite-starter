import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import styles from './sidebarBig-jss';
import MainMenuBig from './MainMenuBig';

class SidebarBig extends React.Component {
  render() {
    const {
      classes,
      dataMenu,
      loadTransition,
      open,
      userAttr,
      toggleDrawerOpen,
    } = this.props;
    return (
      <Fragment>
        <Hidden lgUp>
          <SwipeableDrawer
            onClose={toggleDrawerOpen}
            onOpen={toggleDrawerOpen}
            open={!open}
            anchor="left"
          >
            <div className={classes.swipeDrawerPaper}>
              <MainMenuBig
                dataMenu={dataMenu}
                loadTransition={loadTransition}
                drawerPaper="true"
                userAttr={userAttr}
                toggleDrawerOpen={toggleDrawerOpen}
                mobile
              />
            </div>
          </SwipeableDrawer>
        </Hidden>
        <Hidden mdDown>
          <div>
            <MainMenuBig
              dataMenu={dataMenu}
              loadTransition={loadTransition}
              drawerPaper={open}
              userAttr={userAttr}
            />
          </div>
        </Hidden>
      </Fragment>
    );
  }
}

SidebarBig.propTypes = {
  classes: PropTypes.object.isRequired,
  dataMenu: PropTypes.array.isRequired,
  loadTransition: PropTypes.func.isRequired,
  toggleDrawerOpen: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  userAttr: PropTypes.object.isRequired,
};

export default withStyles(styles)(SidebarBig);
