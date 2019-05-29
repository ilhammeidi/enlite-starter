import { fade } from '@material-ui/core/styles/colorManipulator';
const styles = theme => ({
  inputHeader: {
    font: 'inherit',
    padding: `${theme.spacing.unit}px ${theme.spacing.unit}px ${theme.spacing.unit}px ${theme.spacing.unit * 9}px`,
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
      color: `${fade(theme.palette.text.primary, 0.8)}`
    },
    '& ::-moz-placeholder': { /* Firefox 19+ */
      color: `${fade(theme.palette.text.primary, 0.8)}`
    },
    '& :-ms-input-placeholder': { /* IE 10+ */
      color: `${fade(theme.palette.text.primary, 0.8)}`
    },
    '& :-moz-placeholder': { /* Firefox 18- */
      color: `${fade(theme.palette.text.primary, 0.8)}`
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
    marginTop: theme.spacing.unit,
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
});

export default styles;
