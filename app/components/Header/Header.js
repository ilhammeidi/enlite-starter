import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import FullscreenOutlined from '@material-ui/icons/FullscreenOutlined';
import FullscreenExitOutlined from '@material-ui/icons/FullscreenExitOutlined';
import InvertColors from '@material-ui/icons/InvertColorsOutlined';
import HelpOutlineOutlined from '@material-ui/icons/HelpOutlineOutlined';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import { NavLink, Link } from 'react-router-dom';
import brand from 'enl-api/dummy/brand';
import logo from 'enl-images/logo.svg';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import menuMessages from 'enl-api/ui/menuMessages';
import link from 'enl-api/ui/link';
import UserMenu from './UserMenu';
import SearchUi from '../Search/SearchUi';
import SelectLanguage from '../SelectLanguage';
import messages from './messages';
import styles from './header-jss';

const elem = document.documentElement;

class Header extends React.Component {
  state = {
    open: false,
    fullScreen: false,
    turnDarker: false,
    showTitle: false
  };

  // Initial header style
  flagDarker = false;

  flagTitle = false;

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const doc = document.documentElement;
    const scroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const newFlagDarker = (scroll > 30);
    const newFlagTitle = (scroll > 40);
    if (this.flagDarker !== newFlagDarker) {
      this.setState({ turnDarker: newFlagDarker });
      this.flagDarker = newFlagDarker;
    }
    if (this.flagTitle !== newFlagTitle) {
      this.setState({ showTitle: newFlagTitle });
      this.flagTitle = newFlagTitle;
    }
  }

  openFullScreen = () => {
    this.setState({ fullScreen: true });
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      /* Chrome, Safari & Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      /* IE/Edge */
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

  render() {
    const {
      classes,
      toggleDrawerOpen,
      margin,
      mode,
      title,
      openGuide,
      history,
      signOut,
      dense,
      isLogin,
      avatar,
      intl
    } = this.props;
    const {
      fullScreen,
      open,
      turnDarker,
      showTitle
    } = this.state;

    return (
      <AppBar
        className={classNames(
          classes.appBar,
          classes.floatingBar,
          margin && classes.appBarShift,
          turnDarker && classes.darker,
        )}
      >
        <Toolbar disableGutters={!open}>
          <div className={classNames(classes.brandWrap, dense && classes.dense)}>
            <span>
              <IconButton
                className={classes.menuButton}
                aria-label="Menu"
                onClick={toggleDrawerOpen}
              >
                <MenuIcon />
              </IconButton>
            </span>
            <Hidden smDown>
              <NavLink to="/app" className={classNames(classes.brand, classes.brandBar)}>
                <img src={logo} alt={brand.name} />
                {brand.name}
              </NavLink>
            </Hidden>
          </div>
          <Hidden smDown>
            <div className={classes.headerProperties}>
              <div
                className={classNames(
                  classes.headerAction,
                  showTitle && classes.fadeOut,
                )}
              >
                {fullScreen ? (
                  <Tooltip title={intl.formatMessage(messages.fullScreen)} placement="bottom">
                    <IconButton
                      className={classes.button}
                      onClick={this.closeFullScreen}
                    >
                      <FullscreenExitOutlined />
                    </IconButton>
                  </Tooltip>
                ) : (
                  <Tooltip title={intl.formatMessage(messages.exitFullScreen)} placement="bottom">
                    <IconButton
                      className={classes.button}
                      onClick={this.openFullScreen}
                    >
                      <FullscreenOutlined />
                    </IconButton>
                  </Tooltip>
                )}
                <Tooltip title={intl.formatMessage(messages.lamp)} placement="bottom">
                  <IconButton
                    className={classes.button}
                    onClick={() => this.turnMode(mode)}
                  >
                    <InvertColors />
                  </IconButton>
                </Tooltip>
                <Tooltip title={intl.formatMessage(messages.guide)} placement="bottom">
                  <IconButton className={classes.button} onClick={openGuide}>
                    <HelpOutlineOutlined />
                  </IconButton>
                </Tooltip>
              </div>
              <Typography
                component="h2"
                className={classNames(
                  classes.headerTitle,
                  showTitle && classes.show,
                )}
              >
                {menuMessages[title] !== undefined ? <FormattedMessage {...menuMessages[title]} /> : title}
              </Typography>
            </div>
          </Hidden>
          <div className={classes.searchWrapper}>
            <div className={classes.wrapper}>
              <div className={classes.search}>
                <SearchIcon />
              </div>
              <SearchUi history={history} />
            </div>
          </div>
          <Hidden xsDown>
            <span className={classes.separatorV} />
          </Hidden>
          <div className={classes.userToolbar}>
            <SelectLanguage />
            {isLogin
              ? <UserMenu signOut={signOut} avatar={avatar} />
              : (
                <Button
                  color="primary"
                  className={classes.buttonTop}
                  component={Link}
                  to={link.login}
                  variant="contained"
                >
                  <AccountCircle />
                  <FormattedMessage {...messages.login} />
                </Button>
              )
            }
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  toggleDrawerOpen: PropTypes.func.isRequired,
  avatar: PropTypes.string.isRequired,
  margin: PropTypes.bool.isRequired,
  isLogin: PropTypes.bool,
  dense: PropTypes.bool,
  mode: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  changeMode: PropTypes.func.isRequired,
  openGuide: PropTypes.func.isRequired,
  signOut: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  intl: intlShape.isRequired
};

Header.defaultProps = {
  dense: false,
  isLogin: false
};

export default withStyles(styles)(injectIntl(Header));
