import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Loading from 'react-top-loading-bar';
import { bindActionCreators } from 'redux';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/styles';
import {
  withTheme, withStyles,
  createTheme, MuiThemeProvider
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
  const [loading, setLoading] = useState(0);
  const [theme, setTheme] = useState(createTheme(applicationTheme(color, mode, direction)));

  const handleChangeMode = newMode => {
    setTheme(createTheme(applicationTheme(color, newMode, direction)));
    changeMode(newMode);
  };

  useEffect(() => {
    setLoading(0);
    setTimeout(() => { setLoading(100); }, 2000);
  }, []);

  return (
    <StylesProvider jss={jss}>
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <div className={classes.pageLoader}>
            <Loading
              height={0}
              color={theme.palette.primary.main}
              progress={loading}
              className="top-loading-bar"
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

const mapStateToProps = state => ({
  color: state.ui.theme,
  mode: state.ui.type,
  direction: state.ui.direction
});

const dispatchToProps = dispatch => ({
  changeMode: bindActionCreators(changeModeAction, dispatch),
});

const ThemeWrapperMapped = connect(
  mapStateToProps,
  dispatchToProps
)(ThemeWrapper);

export default withTheme((withStyles(styles)(ThemeWrapperMapped)));
