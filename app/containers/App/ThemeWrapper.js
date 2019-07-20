import React from 'react';
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
import {
  changeThemeAction,
  changeModeAction,
  changeLayoutAction,
  changeDirectionAction
} from 'enl-redux/actions/uiActions';
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

class ThemeWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageLoaded: true,
      theme: createMuiTheme(applicationTheme(props.color, props.mode, props.direction)),
    };
  }

  componentWillMount = () => {
    this.onProgressShow();
  }

  componentDidMount = () => {
    this.playProgress();
  }

  componentWillUnmount() {
    this.onProgressShow();
  }

  onProgressShow = () => {
    this.setState({ pageLoaded: true });
  }

  onProgressHide = () => {
    this.setState({ pageLoaded: false });
  }

  playProgress = () => {
    this.onProgressShow();
    setTimeout(() => {
      this.onProgressHide();
    }, 500);
  }

  handleChangeMode = mode => {
    const { color, changeMode, direction } = this.props;
    this.setState({ theme: createMuiTheme(applicationTheme(color, mode, direction)) });
    changeMode(mode);
  };

  render() {
    const {
      classes,
      children,
    } = this.props;
    const { pageLoaded, theme } = this.state;
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
            <AppContext.Provider value={this.handleChangeMode}>
              {children}
            </AppContext.Provider>
          </div>
        </MuiThemeProvider>
      </StylesProvider>
    );
  }
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
  force: state, // force state from reducer
  color: state.getIn([reducer, 'theme']),
  mode: state.getIn([reducer, 'type']),
  layout: state.getIn([reducer, 'layout']),
  direction: state.getIn([reducer, 'direction']),
});

const dispatchToProps = dispatch => ({
  changeTheme: bindActionCreators(changeThemeAction, dispatch),
  changeMode: bindActionCreators(changeModeAction, dispatch),
  changeLayout: bindActionCreators(changeLayoutAction, dispatch),
  changeDirection: bindActionCreators(changeDirectionAction, dispatch),
});

const ThemeWrapperMapped = connect(
  mapStateToProps,
  dispatchToProps
)(ThemeWrapper);

export default withTheme((withStyles(styles)(ThemeWrapperMapped)));
