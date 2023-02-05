import React, { Fragment } from 'react';
import { PropTypes } from 'prop-types';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import {
  Header,
  Sidebar,
  BreadCrumb,
} from 'enl-components';
import dataMenu from 'enl-api/ui/menu';
import { injectIntl, FormattedMessage } from 'react-intl';
import messages from 'enl-api/ui/menuMessages';
import useStyles from '../appStyles-jss';

function LeftSidebarLayout(props) {
  const { classes, cx } = useStyles();
  const {
    children,
    toggleDrawer,
    sidebarOpen,
    loadTransition,
    pageLoaded,
    mode,
    history,
    changeMode,
    place,
    titleException,
    handleOpenGuide,
    signOut,
    userAttr,
    isLogin
  } = props;

  return (
    <Fragment>
      <Header
        toggleDrawerOpen={toggleDrawer}
        margin={sidebarOpen}
        changeMode={changeMode}
        mode={mode}
        title={place}
        history={history}
        openGuide={handleOpenGuide}
        signOut={signOut}
        isLogin={isLogin}
        avatar={userAttr.avatar}
      />
      <Sidebar
        open={sidebarOpen}
        toggleDrawerOpen={toggleDrawer}
        loadTransition={loadTransition}
        dataMenu={dataMenu}
        userAttr={userAttr}
        leftSidebar
      />
      <main className={cx(classes.content, !sidebarOpen ? classes.contentPaddingLeft : '')} id="mainContent">
        <section className={cx(classes.mainWrap, classes.sidebarLayout)}>
          {titleException.indexOf(history.location.pathname) < 0 && (
            <div className={classes.pageTitle}>
              <Typography component="h4" variant="h4">
                {messages[place] !== undefined ? <FormattedMessage {...messages[place]} /> : place}
              </Typography>
              <BreadCrumb separator=" / " theme="light" location={history.location} />
            </div>
          )}
          { !pageLoaded && (<img src="/images/spinner.gif" alt="spinner" className={classes.circularProgress} />) }
          <Fade
            in={pageLoaded}
            {...(pageLoaded ? { timeout: 700 } : {})}
          >
            <div className={!pageLoaded ? classes.hideApp : ''}>
              {/* Application content will load here */}
              { children }
            </div>
          </Fade>
        </section>
      </main>
    </Fragment>
  );
}

LeftSidebarLayout.propTypes = {
  children: PropTypes.node.isRequired,
  history: PropTypes.object.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  loadTransition: PropTypes.func.isRequired,
  changeMode: PropTypes.func.isRequired,
  sidebarOpen: PropTypes.bool.isRequired,
  pageLoaded: PropTypes.bool.isRequired,
  mode: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  titleException: PropTypes.array.isRequired,
  handleOpenGuide: PropTypes.func.isRequired,
  signOut: PropTypes.func.isRequired,
  isLogin: PropTypes.bool,
  userAttr: PropTypes.object.isRequired,
};

LeftSidebarLayout.defaultProps = {
  isLogin: false
};

export default injectIntl(LeftSidebarLayout);
