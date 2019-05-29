import { darken } from '@material-ui/core/styles/colorManipulator';
const styles = theme => ({
  root: {
    padding: `${theme.spacing.unit * 3}px ${theme.spacing.unit}px`,
    marginBottom: theme.spacing.unit * 3,
    boxShadow: theme.shade.light,
    color: theme.palette.text.primary,
    [theme.breakpoints.up('sm')]: {
      padding: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 2}px`
    },
    '&$noMargin': {
      margin: 0
    },
  },
  descBlock: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing.unit * 5,
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing.unit * 3,
    }
  },
  titleText: {
    flex: 1
  },
  title: {
    position: 'relative',
    textTransform: 'capitalize',
    fontSize: 18,
    fontWeight: 700,
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
      fontWeight: 600,
      marginBottom: theme.spacing.unit
    }
  },
  description: {
    maxWidth: 960,
    paddingTop: theme.spacing.unit / 2,
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center'
    }
  },
  content: {
    marginTop: theme.spacing.unit * 2,
    padding: theme.spacing.unit,
    borderRadius: theme.rounded.medium,
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing.unit * 2
    }
  },
  whiteBg: {
    backgroundColor: 'transparent',
    margin: 0,
    padding: 0,
  },
  noMargin: {},
  colorDark: {
    backgroundColor: theme.palette.type === 'dark' ? darken(theme.palette.primary.dark, 0.5) : theme.palette.primary.main,
    '& $title': {
      color: theme.palette.grey[100],
    },
    '& $description': {
      color: theme.palette.grey[100],
    }
  },
  colorLight: {
    backgroundColor: theme.palette.type === 'dark' ? darken(theme.palette.primary.dark, 0.5) : theme.palette.primary.light,
    '& $title': {
      color: theme.palette.type === 'dark' ? theme.palette.common.white : theme.palette.primary.dark,
    },
    '& $description': {
      color: theme.palette.text.primary,
    }
  },
  overflowX: {
    width: '100%',
    overflowX: 'auto',
  },
  iconTitle: {
    borderRadius: '50%',
    background: theme.palette.background.default,
    width: 48,
    height: 48,
    textAlign: 'center',
    lineHeight: '44px',
    verticalAlign: 'middle',
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    },
    '& span': {
      width: '60%',
      height: '60%',
      verticalAlign: 'middle',
      color: theme.palette.type === 'dark' ? theme.palette.secondary.light : theme.palette.primary.main
    }
  }
});

export default styles;
