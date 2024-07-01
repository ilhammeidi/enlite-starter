import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { makeStyles } from 'tss-react/mui';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import Loading from 'react-top-loading-bar';
import { useSelector, useDispatch } from 'react-redux';
import 'enl-styles/vendors/react-loading-bar/index.css';
import { changeModeAction } from 'enl-redux/actions/uiActions';
import appTheme from '../../styles/theme/applicationTheme';

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
  const [loading, setLoading] = useState(0);

  const dispatch = useDispatch();
  const color = useSelector((state) => state.ui.theme);
  const mode = useSelector((state) => state.ui.type);
  const direction = useSelector((state) => state.ui.direction);

  const [theme, setTheme] = useState(
    appTheme(color, mode, direction)
  );

  useEffect(() => {
    // Remove loading bar
    setLoading(0);
    setTimeout(() => { setLoading(100); }, 2000);
  }, []);

  const handleChangeMode = newMode => {
    dispatch(changeModeAction(newMode));
    setTheme(appTheme(color, newMode));
  };


  const muiTheme = createTheme(theme);
  const { children } = props;

  return (
    <CacheProvider value={theme.direction === 'rtl' ? cacheRTL : cacheLTR}>
      <ThemeProvider theme={muiTheme}>
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
};

export default ThemeWrapper;
