import React, { Fragment } from 'react';
import { PropTypes } from 'prop-types';
import classNames from 'classnames';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import {
  Header,
  SidebarBig,
  BreadCrumb,
} from 'enl-components';
import dataMenu from 'enl-api/ui/menu';
import { injectIntl, FormattedMessage } from 'react-intl';
import messages from 'enl-api/ui/menuMessages';
import styles from '../appStyles-jss';

class LeftSidebarBigLayout extends React.Component {
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
      changeMode,
      place,
      titleException,
      handleOpenGuide,
      signOut,
      userAttr,
      isLogin
    } = this.props;
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
          dense
          isLogin={isLogin}
          avatar={userAttr.avatar}
        />
        <SidebarBig
          dataMenu={dataMenu}
          loadTransition={loadTransition}
          open={sidebarOpen}
          userAttr={userAttr}
          toggleDrawerOpen={toggleDrawer}
        />
        <main className={classNames(classes.content, !sidebarOpen ? classes.contentPaddingLeftSm : '')} id="mainContent">
          <section className={classNames(classes.mainWrap, classes.sidebarLayout)}>
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
              mountOnEnter
              unmountOnExit
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
}

LeftSidebarBigLayout.propTypes = {
  classes: PropTypes.object.isRequired,
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

LeftSidebarBigLayout.defaultProps = {
  isLogin: false
};

export default (withStyles(styles)(injectIntl(LeftSidebarBigLayout)));
