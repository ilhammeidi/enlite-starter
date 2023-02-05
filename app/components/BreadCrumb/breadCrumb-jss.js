import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme, _params, classes) => ({
  dark: {},
  breadcrumbs: {
    position: 'relative',
    display: 'block',
    fontSize: 12,
    color: theme.palette.text.secondary,
    '& p': {
      display: 'block',
      margin: 0,
      '& span': {
        textTransform: 'capitalize',
        marginLeft: 5,
      },
      '& a': {
        color: theme.palette.text.primary,
        textDecoration: 'none',
        margin: '0 5px'
      }
    },
    [`&.${classes.dark}`]: {
      color: theme.palette.text.secondary,
      '& a': {
        color: theme.palette.text.disabled
      }
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
