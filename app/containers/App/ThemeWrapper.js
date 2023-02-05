import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { makeStyles } from 'tss-react/mui';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { connect } from 'react-redux';
import Loading from 'react-top-loading-bar';
import { bindActionCreators } from 'redux';
import 'enl-styles/vendors/react-loading-bar/index.css';
import { changeModeAction } from 'enl-redux/actions/uiActions';
import applicationTheme from '../../styles/theme/applicationTheme';

const useStyles = makeStyles()(() => ({
  root: {
    width: '100%',
    minHeight: '100%',
    marginTop: 0,
    zIndex: 1,
  }
}));

const isBrowser = typeof document !== 'undefined';
let insertionPoint;

if (isBrowser) {
  const emotionInsertionPoint = document.querySelector(
    'meta[name="emotion-insertion-point"]',
  );
  insertionPoint = emotionInsertionPoint ?? undefined;
}

const cacheRTL = createCache({
  key: 'mui-style-rtl',
  stylisPlugins: [prefixer, rtlPlugin],
  insertionPoint,
});

const cacheLTR = createCache({
  key: 'mui-style-ltr',
  insertionPoint,
});

// Export context for themeing mode
export const ThemeContext = React.createContext();

function ThemeWrapper(props) {
  const { classes } = useStyles();
  const {
    changeMode,
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
    // Remove loading bar
    setLoading(0);
    setTimeout(() => { setLoading(100); }, 2000);
  }, []);

  return (
    <CacheProvider value={theme.direction === 'rtl' ? cacheRTL : cacheLTR}>
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <div className={classes.pageLoader}>
            <Loading
              height={0}
              color={theme.palette.primary.main}
              progress={loading}
              className="top-loading-bar"
            />
          </div>
          <ThemeContext.Provider value={handleChangeMode}>
            {children}
          </ThemeContext.Provider>
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
}

ThemeWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
  changeMode: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  color: state.ui.theme,
  mode: state.ui.type,
  direction: state.ui.direction,
});

const dispatchToProps = dispatch => ({
  changeMode: bindActionCreators(changeModeAction, dispatch),
});

const ThemeWrapperMapped = connect(
  mapStateToProps,
  dispatchToProps
)(ThemeWrapper);

export default ThemeWrapperMapped;
