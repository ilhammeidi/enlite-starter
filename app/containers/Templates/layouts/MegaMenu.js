import React, { Fragment } from 'react';
import { PropTypes } from 'prop-types';
import classNames from 'classnames';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { HeaderMenu, BreadCrumb } from 'enl-components';
import dataMenu from 'enl-api/ui/menu';
import { injectIntl, FormattedMessage } from 'react-intl';
import messages from 'enl-api/ui/menuMessages';
import styles from '../appStyles-jss';

function DropMenuLayout(props) {
  const {
    classes,
    children, pageLoaded,
    mode, changeMode,
    history, place, titleException,
    handleOpenGuide, toggleDrawer, sidebarOpen,
    loadTransition,
    signOut, isLogin, userAttr
  } = props;

  return (
    <Fragment>
      <HeaderMenu
        type="mega-menu"
        dataMenu={dataMenu}
        changeMode={changeMode}
        mode={mode}
        history={history}
        openGuide={handleOpenGuide}
        toggleDrawerOpen={toggleDrawer}
        openMobileNav={sidebarOpen}
        loadTransition={loadTransition}
        logoLink="/app"
        signOut={signOut}
        isLogin={isLogin}
        userAttr={userAttr}
      />
      <main
        className={
          classNames(
            classes.content,
            classes.highMargin
          )
        }
        id="mainContent"
      >
        <section className={classNames(classes.mainWrap, classes.topbarLayout)}>
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

DropMenuLayout.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  history: PropTypes.object.isRequired,
  changeMode: PropTypes.func.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  loadTransition: PropTypes.func.isRequired,
  sidebarOpen: PropTypes.bool.isRequired,
  pageLoaded: PropTypes.bool.isRequired,
  mode: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  titleException: PropTypes.array.isRequired,
  handleOpenGuide: PropTypes.func.isRequired,
  signOut: PropTypes.func.isRequired,
  isLogin: PropTypes.bool,
  userAttr: PropTypes.object.isRequired
};

DropMenuLayout.defaultProps = {
  isLogin: false
};

export default (withStyles(styles)(injectIntl(DropMenuLayout)));
