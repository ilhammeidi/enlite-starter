import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@mui/material/useMediaQuery';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import useStyles from './sidebarBig-jss';
import MainMenuBig from './MainMenuBig';

function SidebarBig(props) {
  const { classes } = useStyles();
  const lgUp = useMediaQuery(theme => theme.breakpoints.up('lg'));
  const lgDown = useMediaQuery(theme => theme.breakpoints.down('lg'));

  const {
    dataMenu,
    loadTransition,
    open,
    userAttr,
    toggleDrawerOpen,
  } = props;

  return (
    <Fragment>
      {!lgUp && (
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
              drawerPaper
              userAttr={userAttr}
              toggleDrawerOpen={toggleDrawerOpen}
              mobile
            />
          </div>
        </SwipeableDrawer>
      )}
      {!lgDown && (
        <div>
          <MainMenuBig
            dataMenu={dataMenu}
            loadTransition={loadTransition}
            drawerPaper={open}
            userAttr={userAttr}
          />
        </div>
      )}
    </Fragment>
  );
}

SidebarBig.propTypes = {
  dataMenu: PropTypes.array.isRequired,
  loadTransition: PropTypes.func.isRequired,
  toggleDrawerOpen: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  userAttr: PropTypes.object.isRequired,
};

export default SidebarBig;
