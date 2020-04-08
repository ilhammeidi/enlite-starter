import { fade, lighten } from '@material-ui/core/styles/colorManipulator';
import flag from 'enl-images/flag-lang.png';
const drawerWidth = 240;

const flagIcon = {
  width: 16,
  height: 16,
  borderRadius: '50%',
  display: 'inline-block',
  position: 'relative',
  marginRight: 5,
  top: 1,
  background: `url(${flag}) no-repeat transparent`,
  backgroundSize: '16px auto',
  '&[class="ar"]': {
    backgroundPosition: '0 3px'
  },
  '&[class="zh"]': {
    backgroundPosition: '0 -12px'
  },
  '&[class="en"]': {
    backgroundPosition: '0 -28px'
  },
  '&[class="de"]': {
    backgroundPosition: '0 -44px'
  },
  '&[class="id"]': {
    backgroundPosition: '0 -62px'
  },
  '&[class="es"]': {
    backgroundPosition: '0 -79px'
  },
};

const styles = theme => ({
  appBar: {
    background: 'rgba(0,0,0,0)',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin', 'background'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    '& $menuButton': {
      color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
      zIndex: 10,
    },
    '& $headerTitle': {
      left: theme.spacing(3),
    }
  },
  attachedbar: {
    position: 'relative',
    '& $menuButton': {
      margin: `0 ${theme.spacing(2)}px`
    },
  },
  floatingBar: {
    position: 'fixed'
  },
  left: {},
  right: {},
  appMenu: {
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
    background: theme.palette.background.paper,
    boxShadow: theme.shadows[3],
    color: theme.palette.text.primary,
    [theme.breakpoints.down('md')]: {
      padding: `${theme.spacing(0.5)}px 0`,
    },
    [theme.breakpoints.up('lg')]: {
      background: fade(theme.palette.background.paper, 0.8),
    },
    '& $brand': {
      marginLeft: theme.spacing(3)
    }
  },
  flex: {
    flex: 1,
    textAlign: 'right'
  },
  flexDefault: {
    flex: 1,
    textAlign: 'right'
  },
  appBarShift: {
    transition: theme.transitions.create(['width', 'margin', 'background'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    '& $headerAction': {
      marginLeft: theme.spacing(4)
    },
    '&$darker': {
      '& $menuButton': {
        color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
      }
    },
    '& $headerTitle': {
      [theme.breakpoints.up('lg')]: {
        left: theme.spacing(8)
      }
    }
  },
  menuButton: {},
  hide: {
    display: 'none',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  dark: {},
  light: {},
  inputLang: {
    maxWidth: 160,
    background: fade(theme.palette.text.primary, 0.05),
    border: 'none',
    paddingRight: theme.spacing(4),
    '& i': {
      ...flagIcon
    }
  },
  langItem: {
    display: 'block',
    '& i': {
      ...flagIcon
    },
    '&[data-value="ar"]': {
      textAlign: theme.direction === 'rtl' ? 'left' : 'right'
    }
  },
  wrapper: {
    fontFamily: theme.typography.fontFamily,
    position: 'relative',
    marginLeft: theme.spacing(1),
    borderRadius: theme.spacing(1),
    display: 'inline-block',
    background: fade(theme.palette.text.primary, 0.05),
    '& $miniInput': {
      width: 70
    },
  },
  searchWrapper: {
    [theme.breakpoints.down('md')]: {
      flex: 1,
      textAlign: 'right'
    }
  },
  search: {
    width: theme.spacing(9),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& svg': {
      fill: theme.palette.grey[400]
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    },
  },
  miniInput: {
    paddingLeft: 0,
    textIndent: '999999px'
  },
  solidBg: {},
  darker: {
    backgroundAttachment: 'fixed',
    backgroundColor: theme.palette.type === 'dark' ? lighten(theme.palette.common.black, 0.1) : theme.palette.background.paper,
    boxShadow:
      theme.palette.type === 'dark'
        ? '0px 1px 6px 0px rgba(0, 0, 0, 1), 0px 1px 1px 0px rgba(42, 42, 42, 1), 0px 2px 1px -1px rgba(20, 20, 20, 1)'
        : '0px 1px 6px 0px rgba(142, 142, 142, 0.2), 0px 1px 1px 0px rgba(243, 243, 243, 0.14), 0px 2px 1px -1px rgba(204, 204, 204, 0.12)',
    '& $menuButton': {
      color: theme.palette.common.white
    }
  },
  fixed: {
    position: 'fixed',
    left: 0,
    top: 0,
    [theme.breakpoints.up('lg')]: {
      top: theme.spacing(1) * -8,
    },
    '& nav': {
      padding: '16px 0'
    }
  },
  separatorV: {
    margin: '0 10px',
  },
  notifMenu: {
    '& li': {
      height: 'auto',
      '& h3': {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis'
      }
    }
  },
  badgeMenu: {
    '& span': {
      top: 10,
      right: -20
    }
  },
  textNotif: {
    '& span': {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      display: 'block'
    }
  },
  notifIcon: {
    '& svg': {
      width: 28,
      height: 28,
    },
    '&$light': {
      '& svg': {
        fill: fade(theme.palette.text.hint, 0.48),
      }
    },
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    fontSize: 16,
    margin: 0,
    fontWeight: 500,
    textDecoration: 'none',
    color: theme.palette.text.primary,
    '& img': {
      marginRight: 10,
      width: 30
    },
  },
  brandWrap: {
    display: 'flex',
    paddingLeft: theme.spacing(1.5),
    '& svg': {
      fill: theme.palette.type === 'dark' ? fade(theme.palette.primary.light, 0.64) : fade(theme.palette.primary.dark, 0.64)
    }
  },
  dense: {
    [theme.breakpoints.up('lg')]: {
      paddingLeft: theme.spacing(4),
    },
    '& $brand': {
      [theme.breakpoints.up('lg')]: {
        marginLeft: theme.spacing(4),
        marginRight: theme.spacing(1),
      }
    }
  },
  mainMenu: {
    backgroundColor: theme.palette.background.paper,
    padding: `${theme.spacing(1)}px 0`,
    boxShadow: theme.shadows[3],
    position: 'relative',
    transition: 'padding 0.3s ease',
    '& > div': {
      display: 'flex',
      justifyContent: 'center'
    }
  },
  headMenu: {
    fontSize: 12,
    padding: `${theme.spacing(0.5)}px ${theme.spacing(1)}px ${theme.spacing(0.5)}px ${theme.spacing(2)}px`,
    minHeight: 'auto',
    margin: `0 ${theme.spacing(0.5)}px`
  },
  opened: {
    color: theme.palette.primary.main,
    boxShadow: `inset 0 0 0 1px ${theme.palette.primary.main}`,
    '& svg': {
      fill: theme.palette.primary.main,
    }
  },
  rightIcon: {
    marginLeft: theme.spacing(0.5),
    opacity: 0.3
  },
  selected: {
    background: theme.palette.primary.main,
    color: theme.palette.primary.light,
    '&:hover': {
      background: theme.palette.primary.main,
    },
    '& svg': {
      fill: theme.palette.primary.light,
    },
    '& $rightIcon': {
      opacity: 0.7
    }
  },
  paperMenu: {
    overflow: 'auto',
    maxHeight: 500,
  },
  popperClose: {
    pointerEvents: 'none',
    zIndex: 2
  },
  title: {
    fontSize: 10,
    textTransform: 'uppercase',
    marginTop: theme.spacing(3),
    display: 'block',
    color: theme.palette.secondary.main,
    lineHeight: '28px',
    fontWeight: 'bold',
    background: theme.palette.background.paper,
  },
  dropDownMenu: {
    minWidth: 300,
    marginTop: theme.spacing(1.5),
    position: 'relative',
    '& nav': {
      paddingTop: 0,
      paddingBottom: theme.spacing(3)
    }
  },
  active: {},
  menuItem: {
    '& span': {
      fontSize: 14,
    },
    '&$active': {
      backgroundColor: theme.palette.type === 'dark' ? theme.palette.primary.main : theme.palette.primary.light,
      '& span': {
        color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
      },
      '&:hover': {
        backgroundColor: theme.palette.type === 'dark' ? fade(theme.palette.secondary.main, 0.24) : theme.palette.secondary.light,
      }
    }
  },
  megaMenu: {
    padding: `0 ${theme.spacing(2)}px`,
    '& $title': {
      paddingLeft: theme.spacing(2)
    }
  },
  megaItem: {
    display: 'inline-block',
    width: 'auto',
    margin: theme.spacing(1),
    borderRadius: theme.rounded.big,
    padding: `${theme.spacing(0.25)}px ${theme.spacing(1)}px`,
    '& span': {
      fontSize: 14,
    },
    '& div': {
      padding: 0
    },
    '&$active': {
      border: `1px solid ${theme.palette.primary.main}`,
      backgroundColor: theme.palette.type === 'dark' ? fade(theme.palette.primary.main, 0.24) : theme.palette.primary.light,
      '& span': {
        color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
      },
      '&:hover': {
        backgroundColor: theme.palette.type === 'dark' ? fade(theme.palette.primary.main, 0.24) : theme.palette.primary.light,
      }
    }
  },
  bigIcon: {
    display: 'block',
    marginTop: 40,
    '& span': {
      fontSize: 64,
      color: theme.palette.primary.main,
      margin: '0 auto',
      display: 'inherit'
    }
  },
  button: {},
  buttonTop: {
    margin: `0 ${theme.spacing(2)}px`,
    '& svg': {
      marginRight: theme.spacing(1)
    }
  },
  headerProperties: {
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    zIndex: 1
  },
  fadeOut: {},
  invert: {},
  headerAction: {
    margin: `0 ${theme.spacing(5)}px`,
    transition: 'opacity 0.5s ease',
    '& $button': {
      '& svg': {
        fill: fade(theme.palette.text.hint, 0.48),
        width: 28,
        height: 28
      }
    },
    '&$fadeOut': {
      opacity: 0,
    },
    '&$invert': {
      '& $button': {
        '& svg': {
          fill: fade(theme.palette.text.primary, 0.5),
        }
      }
    }
  },
  show: {},
  headerTitle: {
    transition: 'all 0.3s ease',
    fontSize: theme.spacing(3),
    position: 'absolute',
    textTransform: 'capitalize',
    fontWeight: 700,
    top: 60,
    color: theme.palette.type === 'dark' ? theme.palette.secondary.light : theme.palette.primary.dark,
    opacity: 0,
    '&$show': {
      top: theme.spacing(1),
      opacity: 0.87
    }
  },
  swipeDrawerPaper: {
    width: drawerWidth,
  },
  searchHeaderMenu: {
    flex: 1,
    flexDirection: 'row-reverse',
    display: 'flex',
    alignItems: 'center'
  },
  userToolbar: {
    marginRight: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    '& > *': {
      marginRight: theme.spacing(0.5)
    },
    '& $buttonTop': {
      [theme.breakpoints.down('xs')]: {
        fontSize: 0,
        '& svg': {
          margin: 0
        }
      },
    }
  }
});

export default styles;
