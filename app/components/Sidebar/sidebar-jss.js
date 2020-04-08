import { fade } from '@material-ui/core/styles/colorManipulator';
import lightGreen from '@material-ui/core/colors/lightGreen';
import red from '@material-ui/core/colors/red';
import amber from '@material-ui/core/colors/amber';
import grey from '@material-ui/core/colors/grey';

const drawerWidth = 240;
const styles = theme => ({
  drawer: {
    width: drawerWidth
  },
  drawerPaper: {
    position: 'relative',
    height: '100%',
    overflow: 'hidden',
    border: 'none',
    background: 'none',
    color: theme.palette.text.primary,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  swipeDrawerPaper: {
    width: drawerWidth,
  },
  opened: {
    '& $primary, & $icon': {
      color: theme.palette.type === 'dark' ? theme.palette.primary.main : theme.palette.primary.dark,
    }
  },
  drawerPaperClose: {
    width: 64,
    position: 'absolute',
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    '& $profile': {
      flexDirection: 'row',
      '& h4': {
        textAlign: 'left'
      },
      '& button': {
        width: 'auto'
      }
    },
    '& nav': {
      display: 'none',
    },
    '&:hover': {
      width: drawerWidth,
      background: theme.palette.background.paper,
      boxShadow: theme.shadows[4],
      '& nav': {
        display: 'block'
      }
    },
    '& $brand': {
      display: 'none'
    },
    '& $avatar': {
      width: 32,
      height: 32,
    },
    '& $menuContainer': {
      '&$menuContainer': {
        paddingTop: theme.spacing(10),
        paddingBottom: 0,
      }
    },
  },
  drawerInner: {
    // Make the items inside not wrap when transitioning:
    height: '100%',
    position: 'fixed',
  },
  drawerHeader: {
    padding: '0',
    zIndex: 1,
    position: 'absolute',
    width: '100%',
    [theme.breakpoints.up('lg')]: {
      paddingTop: theme.spacing(8),
      position: 'relative',
    },
    ...theme.mixins.toolbar,
  },
  drawerInnerMobile: {
    // Make the items inside not wrap when transitioning:
    height: '100%',
    backgroundColor: theme.palette.type === 'dark' ? fade(theme.palette.background.paper, 0.75) : fade(theme.palette.background.paper, 0.95),
    '& $drawerHeader': {
      paddingTop: 0
    }
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 80,
    height: 80,
    boxShadow: theme.shadows[4]
  },
  brandBar: {
    transition: theme.transitions.create(['width', 'margin', 'background'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    '&:after': {
      transition: theme.transitions.create(['box-shadow'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }
  },
  darker: {
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    margin: `${theme.spacing(1)}px 0`,
    [theme.breakpoints.down('lg')]: {
      paddingLeft: theme.spacing(3),
    }
  },
  child: {
    '& a': {
      paddingLeft: theme.spacing(8)
    }
  },
  title: {
    fontSize: 10,
    textTransform: 'uppercase',
    padding: `16px 16px 0 ${theme.spacing(10)}px`,
    display: 'block',
    color: theme.palette.primary.main,
    lineHeight: '28px',
    fontWeight: '900'
  },
  dense: {
    marginLeft: -15,
    '& > $title:first-child': {
      marginTop: 0
    },
    '& $head': {
      paddingLeft: theme.spacing(10)
    }
  },
  active: {
    backgroundColor: fade(theme.palette.secondary.light, 0.24),
    '& $primary': {
      color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
    },
    '&:hover': {
      backgroundColor: fade(theme.palette.secondary.light, 0.24)
    },
    '&:before': {
      content: '""',
      position: 'absolute',
      width: 5,
      height: 35,
      top: 0,
      borderRadius: 5,
      left: 15,
      background: theme.palette.primary.dark
    },
    '&:focus': {
      backgroundColor: fade(theme.palette.secondary.light, 0.24)
    }
  },
  nolist: {
    listStyle: 'none',
  },
  primary: {
    whiteSpace: 'nowrap',
  },
  icon: {
    minWidth: 'auto',
    marginRight: theme.spacing(2),
    color: fade(theme.palette.text.hint, 0.48),
  },
  iconed: {},
  head: {
    padding: `${theme.spacing(1)}px 0`,
    margin: `${theme.spacing(1)}px 0 0`,
    borderRadius: `0 ${theme.spacing(1)}px ${theme.spacing(1)}px 0`,
    paddingLeft: theme.spacing(3),
    textAlign: 'left',
    '&$iconed': {
      paddingLeft: theme.spacing(3)
    },
    '& > svg': {
      left: -10,
      position: 'relative'
    },
  },
  headCapital: {
    padding: `${theme.spacing(1)}px 0 ${theme.spacing(1)}px ${theme.spacing(3)}px`,
    left: theme.spacing(1) * -1.5,
    position: 'relative',
    textTransform: 'uppercase',
    borderRadius: `0 ${theme.spacing(3)}px ${theme.spacing(3)}px 0`,
    margin: `${theme.spacing(1)}px`,
    '& span': {
      fontSize: 14
    }
  },
  highlightLink: {
    color: theme.palette.secondary.main
  },
  copyright: {
    color: theme.palette.text.secondary,
    background: theme.palette.background.paper,
    padding: theme.spacing(2),
    [theme.breakpoints.up('lg')]: {
      background: 'none',
      position: 'absolute',
    },
    marginLeft: theme.spacing(5),
    lineHeight: '24px',
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4px 10px 4px',
    height: 64,
    position: 'relative',
    textDecoration: 'none',
    fontSize: 16,
    margin: 0,
    fontWeight: 500,
    color: theme.palette.text.primary,
    '& img': {
      width: 30,
      marginRight: 10,
    },
  },
  brandBig: {
    paddingTop: theme.spacing(4),
    position: 'relative',
    textAlign: 'center',
    '& img': {
      width: 68
    },
    '& h3': {
      fontSize: 18,
      marginTop: theme.spacing(2),
      fontWeight: 500,
      color: theme.palette.text.primary,
    }
  },
  profile: {
    height: 100,
    width: '100%',
    display: 'flex',
    fontSize: 14,
    padding: 10,
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute',
    margin: `${theme.spacing(2)}px 0`,
    zIndex: 0,
    '& h4': {
      fontSize: 16,
      marginBottom: 0,
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      width: 110,
      textAlign: 'center',
      marginLeft: theme.spacing(1),
    },
    '& button': {
      fontSize: 12,
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      display: 'block',
      overflow: 'hidden',
      textTransform: 'capitalize',
      padding: 0,
      minHeight: 20,
      marginTop: 4,
      width: '100%'
    }
  },
  statusMenu: {
    '& li': {
      width: 100
    }
  },
  dotStatus: {
    width: theme.spacing(1),
    height: theme.spacing(1),
    display: 'inline-block',
    borderRadius: '50%',
    marginRight: theme.spacing(0.5)
  },
  online: {
    backgroundColor: lightGreen[500]
  },
  bussy: {
    backgroundColor: red[500]
  },
  idle: {
    backgroundColor: amber[500]
  },
  offline: {
    backgroundColor: grey[500]
  },
  rounded: {},
  landingNav: {},
  withProfile: {},
  menuContainer: {
    overflowY: 'auto',
    overflowX: 'hidden',
    width: drawerWidth,
    position: 'relative',
    display: 'block',
    [theme.breakpoints.up('lg')]: {
      height: `calc(100% - ${theme.spacing(8)}px)`,
    },
    padding: `${theme.spacing(5)}px 0`,
    height: '100%',
    '&$withProfile': {
      paddingTop: theme.spacing(19)
    },
    '&$landingNav': {
      padding: 0,
      [theme.breakpoints.up('lg')]: {
        paddingTop: theme.spacing(5)
      },
      [theme.breakpoints.down('lg')]: {
        height: '100%'
      }
    },
    '&$rounded': {
      '& a': {
        borderRadius: theme.spacing(1),
        paddingTop: 0,
        paddingBottom: theme.spacing(0.5),
        '& > div:first-child': {
          paddingLeft: theme.spacing(7)
        }
      },
      '& $opened': {
        '&:before': {
          background: theme.palette.primary.main
        }
      }
    },
    '&::-webkit-scrollbar': {
      width: 8,
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: 12,
      backgroundColor: 'rgba(0,0,0,0)',
    },
    '&:hover': {
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'rgba(0,0,0,0.2)',
        border: '1px solid rgba(255,255,255,0.3)',
      }
    }
  },
  divider: {
    marginTop: theme.spacing(1)
  },
  badge: {
    height: 'auto'
  }
});

export default styles;
