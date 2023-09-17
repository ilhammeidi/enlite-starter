import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@mui/material/useMediaQuery';
import Drawer from '@mui/material/Drawer';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import dummy from 'enl-api/dummy/dummyContents';
import useStyles from './sidebar-jss';
import SidebarContent from './SidebarContent';

function Sidebar(props) {
  const { classes } = useStyles();
  const lgUp = useMediaQuery(theme => theme.breakpoints.up('lg'));
  const lgDown = useMediaQuery(theme => theme.breakpoints.down('lg'));

  const {
    open,
    toggleDrawerOpen,
    loadTransition,
    leftSidebar,
    dataMenu,
    userAttr
  } = props;
  const [status, setStatus] = useState(dummy.user.status);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeStatus = newStatus => {
    setStatus(newStatus);
    handleClose();
  };

  return (
    <Fragment>
      {!lgUp && (
        <SwipeableDrawer
          onClose={toggleDrawerOpen}
          onOpen={toggleDrawerOpen}
          open={!open}
          anchor={leftSidebar ? 'left' : 'right'}
        >
          <div className={classes.swipeDrawerPaper}>
            <SidebarContent
              drawerPaper
              leftSidebar={leftSidebar}
              toggleDrawerOpen={toggleDrawerOpen}
              loadTransition={loadTransition}
              dataMenu={dataMenu}
              status={status}
              anchorEl={anchorEl}
              openMenuStatus={handleOpen}
              closeMenuStatus={handleClose}
              changeStatus={handleChangeStatus}
              userAttr={userAttr}
            />
          </div>
        </SwipeableDrawer>
      )}
      {!lgDown && (
        <Drawer
          variant="permanent"
          onClose={toggleDrawerOpen}
          className={open ? classes.drawer : ''}
          open={open}
          anchor={leftSidebar ? 'left' : 'right'}
          classes={{
            paperAnchorLeft: classes.drawerWrap
          }}
        >
          <SidebarContent
            drawerPaper={open}
            leftSidebar={leftSidebar}
            loadTransition={loadTransition}
            dataMenu={dataMenu}
            status={status}
            anchorEl={anchorEl}
            openMenuStatus={handleOpen}
            closeMenuStatus={handleClose}
            changeStatus={handleChangeStatus}
            userAttr={userAttr}
          />
        </Drawer>
      )}
    </Fragment>
  );
}

Sidebar.propTypes = {
  userAttr: PropTypes.object.isRequired,
  toggleDrawerOpen: PropTypes.func.isRequired,
  loadTransition: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  leftSidebar: PropTypes.bool,
  dataMenu: PropTypes.array.isRequired,
};

Sidebar.defaultProps = {
  leftSidebar: true
};

export default Sidebar;
