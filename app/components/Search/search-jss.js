import { alpha } from '@material-ui/core/styles';
const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: `${theme.spacing(2)}px 0 ${theme.spacing(4)}px`,
    borderRadius: 8,
    overflow: 'hidden',
    boxShadow: theme.shadows[3]
  },
  searchBar: {
    minHeight: 'auto'
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  wrapper: {
    fontFamily: theme.typography.fontFamily,
    position: 'relative',
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(1),
    borderRadius: 2,
    display: 'block',
    color: theme.palette.text.secondary,
    '& svg': {
      fill: theme.palette.text.secondary
    }
  },
  cart: {
    '& svg': {
      fill: theme.palette.text.secondary
    }
  },
  search: {
    width: 'auto',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    font: 'inherit',
    padding: `${theme.spacing(1)}px ${theme.spacing(1)}px ${theme.spacing(1)}px ${theme.spacing(4)}px`,
    border: 0,
    display: 'block',
    verticalAlign: 'middle',
    whiteSpace: 'normal',
    background: 'none',
    margin: 0, // Reset for Safari
    color: 'inherit',
    width: '100%',
    '&:focus': {
      outline: 0,
    },
  },
  toggleContainer: {
    height: 56,
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  inputHeader: {
    font: 'inherit',
    padding: `${theme.spacing(1)}px ${theme.spacing(1)}px ${theme.spacing(1)}px ${theme.spacing(9)}px`,
    border: 0,
    display: 'block',
    verticalAlign: 'middle',
    whiteSpace: 'normal',
    background: 'none',
    margin: 0, // Reset for Safari
    color: 'inherit',
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    },
    '& > div': {
      border: 'none',
      '& input': {
        transition: theme.transitions.create('width'),
        padding: 0,
        color: theme.palette.text.primary,
        width: 100,
        '&:focus': {
          width: 250,
          textIndent: 0,
          outline: 0,
        },
      },
      '&:after': {
        display: 'none'
      }
    },
    '& ::-webkit-input-placeholder': { /* Chrome/Opera/Safari */
      color: `${alpha(theme.palette.text.primary, 0.8)}`
    },
    '& ::-moz-placeholder': { /* Firefox 19+ */
      color: `${alpha(theme.palette.text.primary, 0.8)}`
    },
    '& :-ms-input-placeholder': { /* IE 10+ */
      color: `${alpha(theme.palette.text.primary, 0.8)}`
    },
    '& :-moz-placeholder': { /* Firefox 18- */
      color: `${alpha(theme.palette.text.primary, 0.8)}`
    },
  },
  containerSearch: {
    flexGrow: 1,
    position: 'relative',
    color: theme.palette.text.primary
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing(1),
    left: 0,
    right: 0,
    overflow: 'hidden'
  },
  suggestion: {
    display: 'block',
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
  selected: {
    background: `${theme.palette.primary.light} !important`
  }
});

export default styles;
