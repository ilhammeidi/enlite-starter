import { fade } from '@material-ui/core/styles/colorManipulator';
import lightGreen from '@material-ui/core/colors/lightGreen';
import red from '@material-ui/core/colors/red';
import amber from '@material-ui/core/colors/amber';
import grey from '@material-ui/core/colors/grey';

const categoryWidth = 104;
const listWidth = 188;

const styles = theme => ({
  bigSidebar: {
    padding: `${theme.spacing.unit}px 0`,
    display: 'flex',
    marginTop: theme.spacing.unit,
    [theme.breakpoints.up('lg')]: {
      marginTop: theme.spacing.unit * 8,
    },
  },
  category: {
    width: categoryWidth,
    '& $fixedWrap': {
      padding: `0 ${theme.spacing.unit}px`
    }
  },
  icon: {},
  text: {},
  active: {},
  selected: {},
  fixedWrap: {
    position: 'fixed',
    overflow: 'auto',
    height: '100%',
    [theme.breakpoints.up('lg')]: {
      height: 'calc(100% - 64px)',
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
  avatarHead: {
    textAlign: 'center',
    width: '100%',
    padding: theme.spacing.unit / 2,
    marginBottom: theme.spacing.unit,
  },
  statusMenu: {
    '& ul': {
      paddingTop: 0,
    },
    '& li': {
      width: 180
    }
  },
  swipeDrawerPaper: {
    width: categoryWidth + listWidth,
  },
  profile: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  name: {
    textAlign: 'left',
    marginLeft: theme.spacing.unit,
    fontSize: 14,
    '& h5': {
      marginBottom: 0
    }
  },
  pinned: {},
  dotStatus: {
    width: theme.spacing.unit * 1.5,
    height: theme.spacing.unit * 1.5,
    display: 'inline-block',
    borderRadius: '50%',
    border: '1px solid #fff',
    marginRight: theme.spacing.unit,
    '&$pinned': {
      position: 'absolute',
      bottom: 3,
      left: 60,
    }
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
  menuHead: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    padding: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    borderRadius: 4,
    '&:hover': {
      background: theme.palette.action.hover,
    },
    '&$active': {
      '&:before': {
        content: '""',
        position: 'absolute',
        width: 5,
        height: 68,
        borderRadius: 5,
        top: 0,
        left: theme.spacing.unit * -1,
        background: theme.palette.primary.dark
      },
      '& $icon, $text': {
        color: theme.palette.type === 'dark' ? theme.palette.primary.main : theme.palette.primary.main,
      },
    },
    '& $icon': {
      color: fade(theme.palette.text.secondary, 0.24),
      display: 'block',
      marginBottom: theme.spacing.unit,
      fontSize: 32,
    },
    '& $text': {
      width: 80,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      fontSize: 12,
      color: theme.palette.text.secondary
    }
  },
  item: {},
  listMenu: {
    width: listWidth,
    marginTop: -10,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    '& > ul': {
      width: listWidth,
      paddingLeft: theme.spacing.unit * 2,
      paddingRight: theme.spacing.unit,
      paddingBottom: theme.spacing.unit * 8,
      marginLeft: theme.spacing.unit
    },
    '& $icon': {
      color: fade(theme.palette.text.secondary, 0.32),
      fontSize: 14,
    },
    '& $text': {
      paddingLeft: 0,
      paddingRight: 0,
      '& span': {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis'
      }
    },
    '& $item': {
      borderRadius: 4,
      textAlign: 'left',
      paddingLeft: 0,
      margin: '4px 0',
      '& > div:first-child': {
        margin: `0 ${theme.spacing.unit}px`
      },
      '&$active': {
        backgroundColor: theme.palette.type === 'dark' ? fade(theme.palette.secondary.light, 0.24) : fade(theme.palette.secondary.light, 0.24),
        '& $icon': {
          color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
        },
        '& $text': {
          '& span': {
            color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
          }
        },
        '&:hover': {
          backgroundColor: theme.palette.type === 'dark' ? fade(theme.palette.secondary.light, 0.24) : fade(theme.palette.secondary.light, 0.24),
        },
        '&:focus': {
          backgroundColor: theme.palette.type === 'dark' ? fade(theme.palette.secondary.light, 0.24) : fade(theme.palette.secondary.light, 0.24),
        }
      }
    }
  },
  drawerPaperClose: {
    width: 0,
    padding: 0,
    overflowX: 'hidden',
    '& ul': {
      position: 'relative'
    }
  },
  title: {
    fontSize: 10,
    textTransform: 'uppercase',
    marginTop: theme.spacing.unit * 2,
    paddingLeft: 0,
    display: 'block',
    color: theme.palette.primary.main,
    lineHeight: '28px',
    fontWeight: '900'
  },
  childMenuWrap: {
    opacity: 0,
    transform: 'translateX(-5px)'
  },
  menuLoaded: {
    opacity: 1,
    transform: 'translateX(0px)',
    transition: 'all 0.2s ease-out'
  }
});

export default styles;
