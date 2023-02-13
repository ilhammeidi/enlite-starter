import { makeStyles } from 'tss-react/mui';
import { alpha, lighten } from '@mui/material/styles';
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

const useStyles = makeStyles()((theme, _params, classes) => ({
  appBar: {
    background: 'rgba(0,0,0,0)',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin', 'background'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [`& .${classes.menuButton}`]: {
      color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
      zIndex: 10,
    },
    [`& .${classes.headerTitle}`]: {
      left: theme.spacing(3),
    }
  },
  attachedbar: {
    position: 'relative',
    [`& .${classes.menuButton}`]: {
      margin: `0 ${theme.spacing(2)}`
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
    [theme.breakpoints.down('sm')]: {
      padding: `${theme.spacing(0.5)} 0`,
      alignItems: 'center'
    },
    [theme.breakpoints.up('lg')]: {
      background: alpha(theme.palette.background.paper, 0.8),
    },
    [`& .${classes.brand}`]: {
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
    [`& .${classes.headerAction}`]: {
      marginLeft: theme.spacing(4)
    },
    [`&.${classes.darker}`]: {
      [`& .${classes.menuButton}`]: {
        color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
      }
    },
    [`& .${classes.headerTitle}`]: {
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
    background: alpha(theme.palette.text.primary, 0.05),
    border: 'none',
    '& i': {
      ...flagIcon
    }
  },
  selectbox: {
    paddingRight: theme.spacing(4)
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
    background: alpha(theme.palette.text.primary, 0.05),
    [`& .${classes.miniInput}`]: {
      width: 70
    },
  },
  searchWrapper: {
    [theme.breakpoints.down('lg')]: {
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
      color: theme.palette.grey[400]
    },
    [theme.breakpoints.down('sm')]: {
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
    backgroundColor: theme.palette.mode === 'dark' ? lighten(theme.palette.common.black, 0.1) : theme.palette.background.paper,
    boxShadow:
      theme.palette.mode === 'dark'
        ? '0px 1px 6px 0px rgba(0, 0, 0, 1), 0px 1px 1px 0px rgba(42, 42, 42, 1), 0px 2px 1px -1px rgba(20, 20, 20, 1)'
        : '0px 1px 6px 0px rgba(142, 142, 142, 0.2), 0px 1px 1px 0px rgba(243, 243, 243, 0.14), 0px 2px 1px -1px rgba(204, 204, 204, 0.12)',
    [`& .${classes.menuButton}`]: {
      color: theme.palette.common.white
    }
  },
  fixed: {
    position: 'fixed',
    left: 0,
    top: 0,
    [theme.breakpoints.up('lg')]: {
      top: theme.spacing(-8),
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
    [`&.${classes.light}`]: {
      '& svg': {
        fill: alpha(theme.palette.text.disabled, 0.48),
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
      fill: theme.palette.mode === 'dark' ? alpha(theme.palette.primary.light, 0.64) : alpha(theme.palette.primary.dark, 0.64)
    }
  },
  dense: {
    [theme.breakpoints.up('lg')]: {
      paddingLeft: theme.spacing(4),
    },
    [`& .${classes.brand}`]: {
      [theme.breakpoints.up('lg')]: {
        marginLeft: theme.spacing(4),
        marginRight: theme.spacing(1),
      }
    }
  },
  mainMenu: {
    backgroundColor: theme.palette.background.paper,
    padding: `${theme.spacing(1)} 0`,
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
    padding: `${theme.spacing(0.5)} ${theme.spacing(1)} ${theme.spacing(0.5)} ${theme.spacing(2)}`,
    minHeight: 'auto',
    margin: `0 ${theme.spacing(0.5)}`
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
    [`& .${classes.rightIcon}`]: {
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
    [`&.${classes.active}`]: {
      backgroundColor: theme.palette.mode === 'dark' ? theme.palette.primary.main : theme.palette.primary.light,
      '& span': {
        color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
      },
      '&:hover': {
        backgroundColor: theme.palette.mode === 'dark' ? alpha(theme.palette.secondary.main, 0.24) : theme.palette.secondary.light,
      }
    }
  },
  megaMenu: {
    padding: `0 ${theme.spacing(2)}`,
    [`& .${classes.title}`]: {
      paddingLeft: theme.spacing(2)
    }
  },
  megaItem: {
    display: 'inline-block',
    width: 'auto',
    margin: theme.spacing(1),
    borderRadius: theme.rounded.big,
    padding: `${theme.spacing(0.25)} ${theme.spacing(1)}`,
    '& span': {
      fontSize: 14,
    },
    '& div': {
      padding: 0
    },
    [`&.${classes.active}`]: {
      border: `1px solid ${theme.palette.primary.main}`,
      backgroundColor: theme.palette.mode === 'dark' ? alpha(theme.palette.primary.main, 0.24) : theme.palette.primary.light,
      '& span': {
        color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
      },
      '&:hover': {
        backgroundColor: theme.palette.mode === 'dark' ? alpha(theme.palette.primary.main, 0.24) : theme.palette.primary.light,
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
    margin: `0 ${theme.spacing(2)}`,
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
    margin: `0 ${theme.spacing(5)}`,
    transition: 'opacity 0.5s ease',
    [`& .${classes.button}`]: {
      '& svg': {
        fill: alpha(theme.palette.text.disabled, 0.48),
        width: 28,
        height: 28
      }
    },
    [`&.${classes.fadeOut}`]: {
      opacity: 0,
    },
    [`&.${classes.invert}`]: {
      [`& .${classes.button}`]: {
        '& svg': {
          fill: alpha(theme.palette.text.primary, 0.5),
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
    color: theme.palette.mode === 'dark' ? theme.palette.secondary.light : theme.palette.primary.dark,
    opacity: 0,
    [`&.${classes.show}`]: {
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
    [`& .${classes.buttonTop}`]: {
      [theme.breakpoints.down('sm')]: {
        fontSize: 0,
        '& svg': {
          margin: 0
        }
      },
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
