import React, { useState, useEffect } from 'react';
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';
import { PropTypes } from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { GuideSlider } from 'enl-components';
import { toggleAction, openAction, playTransitionAction } from 'enl-redux/modules/ui';
import dummy from 'enl-api/dummy/dummyContents';
import { loginUser, logoutUser } from 'enl-redux/modules/auth';
import firebaseConfig from '../../firebase'; // eslint-disable-line
import LeftSidebarLayout from './layouts/LeftSidebar';
import LeftSidebarBigLayout from './layouts/LeftSidebarBig';
import MegaMenuLayout from './layouts/MegaMenu';
import DropMenuLayout from './layouts/DropMenu';
import useStyles from './appStyles-jss';

function Dashboard(props) {
  const { classes, cx } = useStyles();
  const { children, changeMode } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const auth = getAuth();
  const isAuthenticated = useSelector((state) => state.auth.loggedIn);
  const userAttr = useSelector((state) => state.auth.user);

  const signOutApp = () => {
    signOut(auth).then(() => {
      navigate('/');
      dispatch(logoutUser());
    }).catch((error) => {
      console.error(error);
    });
  };

  const sidebarOpen = useSelector((state) => state.ui.sidebarOpen);
  const pageLoaded = useSelector((state) => state.ui.pageLoaded);
  const mode = useSelector((state) => state.ui.type);
  const layout = useSelector((state) => state.ui.layout);

  const location = useLocation();
  const history = { location };

  const [appHeight, setAppHeight] = useState(0);
  const [openGuide, setOpenGuide] = useState(false);

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

  const handleOpenGuide = () => {
    setOpenGuide(true);
  };

  const handleCloseGuide = () => {
    setOpenGuide(false);
  };

  useEffect(() => {
    // Adjust min height
    setAppHeight(window.innerHeight + 112);

    // Set expanded sidebar menu
    const currentPath = location.pathname;
    dispatch(openAction({ initialLocation: currentPath }));

    // Get user attributes
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(loginUser(user));
      } else {
        dispatch(loginUser(null));
      }
    }, [auth, dispatch]);

    // Execute all arguments when page changes
    setTimeout(() => {
      window.scrollTo(0, 0);
      dispatch(playTransitionAction(true));
    }, 500);
  }, [location]);

  return (
    <div
      style={{ minHeight: appHeight }}
      className={
        cx(
          classes.appFrameInner,
          layout === 'top-navigation' || layout === 'mega-menu' ? classes.topNav : classes.sideNav,
          mode === 'dark' ? 'dark-mode' : 'light-mode'
        )
      }
    >
      <GuideSlider openGuide={openGuide} closeGuide={handleCloseGuide} />
      { /* Left Sidebar Layout */
        layout === 'sidebar' && (
          <LeftSidebarLayout
            history={history}
            toggleDrawer={() => dispatch(toggleAction())}
            loadTransition={(payload) => dispatch(playTransitionAction(payload))}
            changeMode={changeMode}
            sidebarOpen={sidebarOpen}
            pageLoaded={pageLoaded}
            mode={mode}
            place={place}
            titleException={titleException}
            handleOpenGuide={handleOpenGuide}
            signOut={signOutApp}
            isLogin={isAuthenticated}
            userAttr={profile(userAttr)}
          >
            { children }
          </LeftSidebarLayout>
        )
      }
      { /* Left Big-Sidebar Layout */
        layout === 'big-sidebar' && (
          <LeftSidebarBigLayout
            history={history}
            toggleDrawer={() => dispatch(toggleAction())}
            loadTransition={(payload) => dispatch(playTransitionAction(payload))}
            changeMode={changeMode}
            sidebarOpen={sidebarOpen}
            pageLoaded={pageLoaded}
            mode={mode}
            place={place}
            titleException={titleException}
            handleOpenGuide={handleOpenGuide}
            signOut={signOutApp}
            isLogin={isAuthenticated}
            userAttr={profile(userAttr)}
          >
            { children }
          </LeftSidebarBigLayout>
        )
      }
      { /* Top Bar with Dropdown Menu */
        layout === 'top-navigation' && (
          <DropMenuLayout
            history={history}
            toggleDrawer={() => dispatch(toggleAction())}
            loadTransition={(payload) => dispatch(playTransitionAction(payload))}
            changeMode={changeMode}
            sidebarOpen={sidebarOpen}
            pageLoaded={pageLoaded}
            mode={mode}
            place={place}
            titleException={titleException}
            handleOpenGuide={handleOpenGuide}
            signOut={signOutApp}
            isLogin={isAuthenticated}
            userAttr={profile(userAttr)}
          >
            { children }
          </DropMenuLayout>
        )
      }
      { /* Top Bar with Mega Menu */
        layout === 'mega-menu' && (
          <MegaMenuLayout
            history={history}
            toggleDrawer={() => dispatch(toggleAction())}
            loadTransition={(payload) => dispatch(playTransitionAction(payload))}
            changeMode={changeMode}
            sidebarOpen={sidebarOpen}
            pageLoaded={pageLoaded}
            mode={mode}
            place={place}
            titleException={titleException}
            handleOpenGuide={handleOpenGuide}
            signOut={signOutApp}
            isLogin={isAuthenticated}
            userAttr={profile(userAttr)}
          >
            { children }
          </MegaMenuLayout>
        )
      }
    </div>
  );
}

Dashboard.propTypes = {
  children: PropTypes.node.isRequired,
  changeMode: PropTypes.func.isRequired,
};

export default Dashboard;
