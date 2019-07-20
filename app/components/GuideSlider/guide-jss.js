const styles = theme => ({
  root: {
    padding: 0,
    overflow: 'hidden'
  },
  rootContent: {
    padding: 0,
    paddingTop: '0 !important',
    overflow: 'hidden'
  },
  header: {
    textAlign: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    marginBottom: 20,
    backgroundColor: theme.palette.background.default,
  },
  img: {
    width: 600,
    display: 'block',
    height: 'auto',
    overflow: 'hidden',
    margin: '0 auto'
  },
  figure: {
    width: '150%',
    left: '-25%',
    position: 'relative',
    overflow: 'hidden',
    height: 255,
    margin: '0 auto'
  },
  mobileStepper: {
    margin: '0 auto',
    textAlign: 'center'
  },
  text: {
    padding: theme.spacing(3),
    '& h2': {
      marginBottom: theme.spacing(2)
    }
  },
  slider: {
    '& > div > div': {
      overflow: 'hidden !important'
    }
  }
});

export default styles;
