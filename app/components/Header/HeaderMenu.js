import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { NavLink, Link } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import classNames from 'classnames';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import logo from 'enl-images/logo.svg';
import brand from 'enl-api/dummy/brand';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import link from 'enl-api/ui/link';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import AccountCircle from '@material-ui/icons/AccountCircle';
import dummy from 'enl-api/dummy/dummyContents';
import MenuIcon from '@material-ui/icons/Menu';
import FullscreenOutlined from '@material-ui/icons/FullscreenOutlined';
import FullscreenExitOutlined from '@material-ui/icons/FullscreenExitOutlined';
import InvertColors from '@material-ui/icons/InvertColorsOutlined';
import HelpOutlineOutlined from '@material-ui/icons/HelpOutlineOutlined';
import { injectIntl, FormattedMessage } from 'react-intl';
import messages from './messages';
import SelectLanguage from '../SelectLanguage';
import SidebarContent from '../Sidebar/SidebarContent';
import DropListMenu from './DropListMenu';
import MegaMenu from './MegaMenu';
import UserMenu from './UserMenu';
import styles from './header-jss';
import SearchUi from '../Search/SearchUi';

const elem = document.documentElement;

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
  return <Link to={props.to} {...props} innerRef={ref} />; // eslint-disable-line
});

class HeaderMenu extends React.Component { // eslint-disable-line
  state = {
    fullScreen: false,
    status: dummy.user.status,
    anchorEl: null,
    fixed: false,
  };

  // Initial menu ui
  flagFixedMenu = false;

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const doc = document.documentElement;
    const scroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const newFlagFixedMenu = (scroll > 64);
    if (this.flagFixedMenu !== newFlagFixedMenu) {
      this.setState({ fixed: newFlagFixedMenu });
      this.flagFixedMenu = newFlagFixedMenu;
    }
  }

  openFullScreen = () => {
    this.setState({ fullScreen: true });
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
      elem.msRequestFullscreen();
    }
  };

  closeFullScreen = () => {
    this.setState({ fullScreen: false });
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  };

  turnMode = mode => {
    const { changeMode } = this.props;
    if (mode === 'light') {
      changeMode('dark');
    } else {
      changeMode('light');
    }
  };

  handleOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleChangeStatus = status => {
    this.setState({ status });
    this.handleClose();
  }

  render() {
    const {
      classes, type, dataMenu,
      history, openGuide, mode,
      toggleDrawerOpen, openMobileNav,
      isLogin, userAttr, signOut,
      loadTransition, logoLink,
    } = this.props;
    const {
      fullScreen,
      status,
      anchorEl,
      fixed
    } = this.state;
    return (
      <AppBar
        className={
          classNames(
            classes.appBar,
            classes.attachedbar,
            fixed ? classes.fixed : ''
          )
        }
      >
        <div className={classes.appMenu}>
          <Hidden lgUp>
            <IconButton
              className={classes.menuButton}
              aria-label="Menu"
              onClick={toggleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Hidden smDown>
            <NavLink to={logoLink} className={classes.brand}>
              <img src={logo} alt={brand.name} />
              {brand.name}
            </NavLink>
            <div className={classes.headerProperties}>
              <div className={classNames(classes.headerAction, classes.invert)}>
                {fullScreen ? (
                  <Tooltip title="Exit Full Screen" placement="bottom">
                    <IconButton className={classes.button} onClick={this.closeFullScreen}>
                      <FullscreenExitOutlined />
                    </IconButton>
                  </Tooltip>
                ) : (
                  <Tooltip title="Full Screen" placement="bottom">
                    <IconButton className={classes.button} onClick={this.openFullScreen}>
                      <FullscreenOutlined />
                    </IconButton>
                  </Tooltip>
                )}
                <Tooltip title="Turn Dark/Light" placement="bottom">
                  <IconButton className={classes.button} onClick={() => this.turnMode(mode)}>
                    <InvertColors />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Show Guide" placement="bottom">
                  <IconButton className={classes.button} onClick={openGuide}>
                    <HelpOutlineOutlined />
                  </IconButton>
                </Tooltip>
              </div>
            </div>
          </Hidden>
          <div className={classes.searchHeaderMenu}>
            <div className={classNames(classes.wrapper, classes.dark)}>
              <div className={classes.search}>
                <SearchIcon />
              </div>
              <SearchUi history={history} />
            </div>
          </div>
          <Toolbar>
            <SelectLanguage />
            {isLogin
              ? <UserMenu signOut={signOut} avatar={userAttr.avatar} />
              : (
                <Button
                  color="primary"
                  className={classes.buttonTop}
                  component={LinkBtn}
                  to={link.login}
                  variant="contained"
                >
                  <AccountCircle />
                  <FormattedMessage {...messages.login} />
                </Button>
              )
            }
          </Toolbar>
        </div>
        <Hidden mdDown>
          <Fragment>
            { type === 'mega-menu' ? <MegaMenu dataMenu={dataMenu} /> : <DropListMenu dataMenu={dataMenu} />}
          </Fragment>
        </Hidden>
        <Hidden lgUp>
          <SwipeableDrawer
            onClose={toggleDrawerOpen}
            onOpen={toggleDrawerOpen}
            open={!openMobileNav}
            anchor="left"
          >
            <div className={classes.swipeDrawerPaper}>
              <SidebarContent
                drawerPaper
                leftSidebar
                toggleDrawerOpen={toggleDrawerOpen}
                loadTransition={loadTransition}
                dataMenu={dataMenu}
                status={status}
                anchorEl={anchorEl}
                openMenuStatus={this.handleOpen}
                closeMenuStatus={this.handleClose}
                changeStatus={this.handleChangeStatus}
                isLogin={isLogin}
                userAttr={userAttr}
              />
            </div>
          </SwipeableDrawer>
        </Hidden>
      </AppBar>
    );
  }
}

HeaderMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  dataMenu: PropTypes.array.isRequired,
  openMobileNav: PropTypes.bool.isRequired,
  mode: PropTypes.string.isRequired,
  userAttr: PropTypes.object.isRequired,
  changeMode: PropTypes.func.isRequired,
  openGuide: PropTypes.func.isRequired,
  toggleDrawerOpen: PropTypes.func.isRequired,
  loadTransition: PropTypes.func.isRequired,
  signOut: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  logoLink: PropTypes.string,
  isLogin: PropTypes.bool
};

HeaderMenu.defaultProps = {
  isLogin: false,
  logoLink: '/',
};

export default withStyles(styles)(injectIntl(HeaderMenu));
