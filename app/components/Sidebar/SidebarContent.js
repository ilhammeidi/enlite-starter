import React, {
  useRef,
  useEffect,
  useState
} from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import { injectIntl, FormattedMessage } from 'react-intl';
import messages from 'enl-api/ui/menuMessages';
import MainMenu from './MainMenu';
import useStyles from './sidebar-jss';

function SidebarContent(props) {
  const { classes, cx } = useStyles();
  const {
    drawerPaper,
    toggleDrawerOpen,
    loadTransition,
    leftSidebar,
    dataMenu,
    status,
    anchorEl,
    openMenuStatus,
    closeMenuStatus,
    changeStatus,
    userAttr
  } = props;
  const [transform, setTransform] = useState(0);
  const refSidebar = useRef(null);

  const setStatus = st => {
    switch (st) {
      case 'online':
        return classes.online;
      case 'idle':
        return classes.idle;
      case 'bussy':
        return classes.bussy;
      default:
        return classes.offline;
    }
  };

  const handleScroll = (event) => {
    setTransform(event.target.scrollTop);
  };

  useEffect(() => {
    refSidebar.current.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={cx(classes.drawerInner, !drawerPaper ? classes.drawerPaperClose : '')}>
      <div className={classes.drawerHeader}>
        <div
          className={classes.profile}
          style={{ opacity: 1 - (transform / 100), marginTop: transform * -0.3 }}
        >
          <Avatar
            alt={userAttr.name}
            src={userAttr.avatar}
            className={cx(classes.avatar, classes.bigAvatar)}
          />
          <div>
            <h4>{userAttr.name}</h4>
            <Button size="small" onClick={openMenuStatus}>
              <i className={cx(classes.dotStatus, setStatus(status))} />
              <FormattedMessage {...messages[status]} />
            </Button>
            <Menu
              id="status-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={closeMenuStatus}
              className={classes.statusMenu}
            >
              <MenuItem onClick={() => changeStatus('online')}>
                <i className={cx(classes.dotStatus, classes.online)} />
                <FormattedMessage {...messages.online} />
              </MenuItem>
              <MenuItem onClick={() => changeStatus('idle')}>
                <i className={cx(classes.dotStatus, classes.idle)} />
                <FormattedMessage {...messages.idle} />
              </MenuItem>
              <MenuItem onClick={() => changeStatus('bussy')}>
                <i className={cx(classes.dotStatus, classes.bussy)} />
                <FormattedMessage {...messages.bussy} />
              </MenuItem>
              <MenuItem onClick={() => changeStatus('offline')}>
                <i className={cx(classes.dotStatus, classes.offline)} />
                <FormattedMessage {...messages.offline} />
              </MenuItem>
            </Menu>
          </div>
        </div>
      </div>
      <div
        id="sidebar"
        ref={refSidebar}
        className={
          cx(
            classes.menuContainer,
            leftSidebar && classes.rounded,
            classes.withProfile
          )
        }
      >
        <MainMenu loadTransition={loadTransition} dataMenu={dataMenu} toggleDrawerOpen={toggleDrawerOpen} />
      </div>
    </div>
  );
}

SidebarContent.propTypes = {
  userAttr: PropTypes.object.isRequired,
  drawerPaper: PropTypes.bool.isRequired,
  toggleDrawerOpen: PropTypes.func,
  loadTransition: PropTypes.func,
  leftSidebar: PropTypes.bool.isRequired,
  dataMenu: PropTypes.array.isRequired,
  status: PropTypes.string.isRequired,
  anchorEl: PropTypes.object,
  openMenuStatus: PropTypes.func.isRequired,
  closeMenuStatus: PropTypes.func.isRequired,
  changeStatus: PropTypes.func.isRequired,
};

SidebarContent.defaultProps = {
  toggleDrawerOpen: () => {},
  toggleDrawerClose: () => {},
  loadTransition: () => {},
  anchorEl: null,
};

export default injectIntl(SidebarContent);
