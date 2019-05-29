const styles = theme => ({
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
    '&$dark': {
      color: theme.palette.text.secondary,
      '& a': {
        color: theme.palette.text.hint
      }
    }
  }
});

export default styles;
