import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Loading from 'react-loading-bar';
import { bindActionCreators } from 'redux';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/styles';
import {
  withTheme, withStyles,
  createMuiTheme, MuiThemeProvider
} from '@material-ui/core/styles';
import 'enl-styles/vendors/react-loading-bar/index.css';
import { changeModeAction } from 'enl-redux/actions/uiActions';
import applicationTheme from '../../styles/theme/applicationTheme';

const styles = {
  root: {
    width: '100%',
    minHeight: '100%',
    marginTop: 0,
    zIndex: 1,
  }
};

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

// Export context for themeing mode
export const AppContext = React.createContext();

function ThemeWrapper(props) {
  const {
    changeMode,
    classes,
    children,
    color,
    direction,
    mode,
  } = props;
  const [pageLoaded, setPageLoaded] = useState(true);
  const [theme, setTheme] = useState(createMuiTheme(applicationTheme(color, mode, direction)));

  const onProgressShow = () => {
    setPageLoaded(true);
  };

  const onProgressHide = () => {
    setPageLoaded(false);
  };

  const playProgress = () => {
    onProgressShow();
    setTimeout(() => {
      onProgressHide();
    }, 500);
  };

  const handleChangeMode = newMode => {
    setTheme(createMuiTheme(applicationTheme(color, newMode, direction)));
    changeMode(newMode);
  };

  useEffect(() => {
    playProgress();

    return () => {
      onProgressShow();
    };
  }, []);

  return (
    <StylesProvider jss={jss}>
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <div className={classes.pageLoader}>
            <Loading
              show={pageLoaded}
              color={theme.palette.primary.main}
              showSpinner={false}
            />
          </div>
          <AppContext.Provider value={handleChangeMode}>
            {children}
          </AppContext.Provider>
        </div>
      </MuiThemeProvider>
    </StylesProvider>
  );
}

ThemeWrapper.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
  changeMode: PropTypes.func.isRequired,
};

const reducer = 'ui';
const mapStateToProps = state => ({
  ...state, // force state from reducer
  color: state.getIn([reducer, 'theme']),
  mode: state.getIn([reducer, 'type']),
  direction: state.getIn([reducer, 'direction']),
});

const dispatchToProps = dispatch => ({
  changeMode: bindActionCreators(changeModeAction, dispatch),
});

const ThemeWrapperMapped = connect(
  mapStateToProps,
  dispatchToProps
)(ThemeWrapper);

export default withTheme((withStyles(styles)(ThemeWrapperMapped)));
