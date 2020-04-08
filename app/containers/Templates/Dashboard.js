import React from 'react';
import { PropTypes } from 'prop-types';
import classNames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { GuideSlider } from 'enl-components';
import { toggleAction, openAction, playTransitionAction } from 'enl-redux/actions/uiActions';
import { logout } from 'enl-redux/actions/authActions';
import dummy from 'enl-api/dummy/dummyContents';
import LeftSidebarLayout from './layouts/LeftSidebar';
import LeftSidebarBigLayout from './layouts/LeftSidebarBig';
import MegaMenuLayout from './layouts/MegaMenu';
import DropMenuLayout from './layouts/DropMenu';
import styles from './appStyles-jss';

class Dashboard extends React.Component {
  state = {
    openGuide: false,
    appHeight: 0
  };

  componentDidMount = () => {
    const { history, initialOpen, loadTransition } = this.props;

    // Adjust min height
    this.setState({ appHeight: window.innerHeight + 112 });

    // Set expanded sidebar menu
    const currentPath = history.location.pathname;
    initialOpen(currentPath);
    // Play page transition
    loadTransition(true);

    // Execute all arguments when page changes
    this.unlisten = history.listen(() => {
      window.scrollTo(0, 0);
      setTimeout(() => {
        loadTransition(true);
      }, 500);
    });
  }

  handleOpenGuide = () => {
    this.setState({ openGuide: true });
  };

  handleCloseGuide = () => {
    this.setState({ openGuide: false });
  };

  render() {
    const {
      classes,
      children,
      toggleDrawer,
      sidebarOpen,
      loadTransition,
      pageLoaded,
      mode,
      history,
      layout,
      changeMode,
      signOut,
      user,
      isAuthenticated
    } = this.props;
    const { openGuide, appHeight } = this.state;
    const titleException = ['/app', '/app/crm-dashboard', '/app/crypto-dashboard'];
    const parts = history.location.pathname.split('/');
    const place = parts[parts.length - 1].replace('-', ' ');
    const profile = userProfile => {
      if (userProfile) {
        return {
          avatar: userProfile.photoURL || dummy.user.avatar,
          name: userProfile.displayName
        };
      }
      return {
        avatar: dummy.user.avatar,
        name: dummy.user.name
      };
    };
    return (
      <div
        style={{ minHeight: appHeight }}
        className={
          classNames(
            classes.appFrameInner,
            layout === 'top-navigation' || layout === 'mega-menu' ? classes.topNav : classes.sideNav,
            mode === 'dark' ? 'dark-mode' : 'light-mode'
          )
        }
      >
        <GuideSlider openGuide={openGuide} closeGuide={this.handleCloseGuide} />
        { /* Left Sidebar Layout */
          layout === 'sidebar' && (
            <LeftSidebarLayout
              history={history}
              toggleDrawer={toggleDrawer}
              loadTransition={loadTransition}
              changeMode={changeMode}
              sidebarOpen={sidebarOpen}
              pageLoaded={pageLoaded}
              mode={mode}
              place={place}
              titleException={titleException}
              handleOpenGuide={this.handleOpenGuide}
              signOut={signOut}
              isLogin={isAuthenticated}
              userAttr={profile(user)}
            >
              { children }
            </LeftSidebarLayout>
          )
        }
        { /* Left Big-Sidebar Layout */
          layout === 'big-sidebar' && (
            <LeftSidebarBigLayout
              history={history}
              toggleDrawer={toggleDrawer}
              loadTransition={loadTransition}
              changeMode={changeMode}
              sidebarOpen={sidebarOpen}
              pageLoaded={pageLoaded}
              mode={mode}
              place={place}
              titleException={titleException}
              handleOpenGuide={this.handleOpenGuide}
              signOut={signOut}
              isLogin={isAuthenticated}
              userAttr={profile(user)}
            >
              { children }
            </LeftSidebarBigLayout>
          )
        }
        { /* Top Bar with Dropdown Menu */
          layout === 'top-navigation' && (
            <DropMenuLayout
              history={history}
              toggleDrawer={toggleDrawer}
              loadTransition={loadTransition}
              changeMode={changeMode}
              sidebarOpen={sidebarOpen}
              pageLoaded={pageLoaded}
              mode={mode}
              place={place}
              titleException={titleException}
              handleOpenGuide={this.handleOpenGuide}
              signOut={signOut}
              isLogin={isAuthenticated}
              userAttr={profile(user)}
            >
              { children }
            </DropMenuLayout>
          )
        }
        { /* Top Bar with Mega Menu */
          layout === 'mega-menu' && (
            <MegaMenuLayout
              history={history}
              toggleDrawer={toggleDrawer}
              loadTransition={loadTransition}
              changeMode={changeMode}
              sidebarOpen={sidebarOpen}
              pageLoaded={pageLoaded}
              mode={mode}
              place={place}
              titleException={titleException}
              handleOpenGuide={this.handleOpenGuide}
              signOut={signOut}
              isLogin={isAuthenticated}
              userAttr={profile(user)}
            >
              { children }
            </MegaMenuLayout>
          )
        }
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  history: PropTypes.object.isRequired,
  initialOpen: PropTypes.func.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  loadTransition: PropTypes.func.isRequired,
  changeMode: PropTypes.func.isRequired,
  sidebarOpen: PropTypes.bool.isRequired,
  pageLoaded: PropTypes.bool.isRequired,
  mode: PropTypes.string.isRequired,
  isAuthenticated: PropTypes.bool,
  user: PropTypes.object,
  signOut: PropTypes.func.isRequired,
  layout: PropTypes.string.isRequired,
};

Dashboard.defaultProps = {
  user: null,
  isAuthenticated: null
};

const reducerUi = 'ui';
const reducerAuth = 'authReducer';
const mapStateToProps = state => ({
  sidebarOpen: state.getIn([reducerUi, 'sidebarOpen']),
  pageLoaded: state.getIn([reducerUi, 'pageLoaded']),
  mode: state.getIn([reducerUi, 'type']),
  layout: state.getIn([reducerUi, 'layout']),
  isAuthenticated: state.get(reducerAuth).loggedIn,
  user: state.get(reducerAuth).user,
  ...state,
});

const mapDispatchToProps = dispatch => ({
  toggleDrawer: () => dispatch(toggleAction),
  initialOpen: bindActionCreators(openAction, dispatch),
  loadTransition: bindActionCreators(playTransitionAction, dispatch),
  signOut: bindActionCreators(logout, dispatch)
});

const DashboardMaped = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);

export default (withStyles(styles)(DashboardMaped));
