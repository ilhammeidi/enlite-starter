import { makeStyles } from 'tss-react/mui';
import { alpha } from '@mui/material/styles';

const useStyles = makeStyles()((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(2, 0, 4),
    borderRadius: 8,
    overflow: 'hidden',
    boxShadow: theme.shadows[5]
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
      color: theme.palette.text.secondary
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
    color: theme.palette.text.secondary,
    '& svg': {
      color: theme.palette.text.secondary
    }
  },
  input: {
    font: 'inherit',
    padding: `${theme.spacing(1)} ${theme.spacing(1)} ${theme.spacing(1)} ${theme.spacing(4)}`,
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
    padding: theme.spacing(0, 1),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  containerSearch: {
    flexGrow: 1,
    position: 'relative',
    color: theme.palette.text.primary,
    '& [class*="input-header"]': {
      font: 'inherit',
      padding: `${theme.spacing(1)} ${theme.spacing(1)} ${theme.spacing(1)} ${theme.spacing(9)}`,
      border: 0,
      display: 'block',
      verticalAlign: 'middle',
      whiteSpace: 'normal',
      background: 'none',
      margin: 0, // Reset for Safari
      color: 'inherit',
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      },
      '& > div': {
        border: 'none',
        '&:after': {
          display: 'none'
        },
      },
      '& input': {
        transition: theme.transitions.create('width'),
        padding: 0,
        width: 100,
        '&:focus': {
          width: 250,
          textIndent: 0,
          outline: 0,
        },
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
    }
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
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
