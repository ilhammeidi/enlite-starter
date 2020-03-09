import { fade } from '@material-ui/core/styles/colorManipulator';
import cyan from '@material-ui/core/colors/cyan';
import grey from '@material-ui/core/colors/blueGrey';
import red from '@material-ui/core/colors/red';
import deco from 'enl-images/decoration/hexaMonochrome.svg';
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';
const rootWraper = {
  display: 'flex',
  width: '100%',
  zIndex: 1,
  position: 'relative'
};

const wrapper = theme => ({
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  [theme.breakpoints.up('lg')]: {
    padding: `${theme.spacing(6)}px ${theme.spacing(20)}px`,
  },
});

const styles = theme => ({
  root: {
    ...rootWraper
  },
  rootFull: {
    ...rootWraper,
    height: '100%',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      overflow: 'hidden'
    },
  },
  containerSide: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      overflow: 'hidden'
    },
  },
  paperWrap: {
    background: theme.palette.background.paper,
    padding: `${theme.spacing(6)}px ${theme.spacing(1)}px`,
  },
  sideWrap: {
    ...wrapper(theme),
    height: '100%',
    borderRadius: 0,
  },
  fullWrap: {
    ...wrapper(theme),
    height: '100%',
    borderRadius: 0,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    '& $topBar': {
      width: '100%'
    }
  },
  icon: {},
  topBar: {
    display: 'flex',
    marginBottom: theme.spacing(2),
    paddingBottom: theme.spacing(1),
    maxWidth: 480,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderBottom: `1px solid ${theme.palette.divider}`,
    justifyContent: 'space-between',
    '& $icon': {
      margin: `0 ${theme.spacing(1)}px`
    },
    [theme.breakpoints.down('sm')]: {
      alignItems: 'center',
      marginBottom: theme.spacing(3),
    }
  },
  divider: {
    textAlign: 'center',
    borderTop: `1px solid ${theme.palette.divider}`,
    fontSize: 14,
    color: theme.palette.text.secondary,
    margin: `${theme.spacing(6)}px 0 ${theme.spacing(3)}px`,
    '& span': {
      background: theme.palette.background.paper,
      top: -10,
      position: 'relative',
      padding: '0 10px',
    }
  },
  outer: {},
  centerFlex: {},
  invert: {},
  brand: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    fontSize: 22,
    marginBottom: theme.spacing(2),
    color: theme.palette.common.white,
    textDecoration: 'none',
    '&$centerFlex': {
      justifyContent: 'center'
    },
    '&$outer': {
      color: theme.palette.common.white,
    },
    [theme.breakpoints.down('md')]: {
      margin: `${theme.spacing(2)}px 0`
    },
    '& img': {
      width: 30,
      marginRight: 10,
    },
    '&$invert': {
      color: theme.palette.text.primary,
    }
  },
  headLogo: {
    textAlign: 'center',
    marginBottom: theme.spacing(4),
    '& $brand': {
      display: 'inline-block',
      color: theme.palette.text.primary
    }
  },
  formWrap: {
    [theme.breakpoints.up('sm')]: {
      padding: '0 100px'
    },
    [theme.breakpoints.up('md')]: {
      padding: '0 150px'
    },
  },
  pageFormWrap: {
    width: '100%',
    margin: `${theme.spacing(2)}px auto`,
    [theme.breakpoints.up('sm')]: {
      width: 480,
    },
  },
  pageFormSideWrap: {
    margin: '0 auto',
    [theme.breakpoints.only('sm')]: {
      width: 480,
    },
  },
  formControl: {
    width: '100%',
    marginBottom: theme.spacing(1)
  },
  socmedLogin: {
    [theme.breakpoints.up('sm')]: {
      padding: '24px 100px 1px',
    },
    '& button': {
      padding: '4px 24px'
    }
  },
  socmedSideLogin: {
    padding: '24px 24px',
    margin: '0 auto',
    background: fade(theme.palette.text.disabled, 0.05),
    borderRadius: 40,
    display: 'flex',
    justifyContent: 'center',
    '& button': {
      padding: '4px 16px',
      margin: `0 ${theme.spacing(1)}px`,
      [theme.breakpoints.down('xs')]: {
        fontSize: 0
      },
      '& svg': {
        fill: theme.palette.common.white,
        [theme.breakpoints.up('sm')]: {
          marginRight: theme.spacing(1)
        }
      }
    },
    [theme.breakpoints.only('sm')]: {
      width: 480,
    },
  },
  userFormWrap: {
    width: '94%',
    [theme.breakpoints.up('md')]: {
      width: 720
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(3)
    },
  },
  sideFormWrap: {
    height: '100%',
    width: '65%',
    zIndex: 1,
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  msgUser: {
    margin: `${theme.spacing(1)}px auto`,
    '& > div:first-child': {
      flex: 1
    }
  },
  fullFormWrap: {
    height: '100%',
    width: '100%'
  },
  title: {
    color: theme.palette.primary.main,
    fontWeight: 700,
    fontSize: 32,
    [theme.breakpoints.down('sm')]: {
      fontSize: 24,
    }
  },
  subtitle: {
    fontSize: 14
  },
  subtitleBig: {
    color: theme.palette.text.secondary
  },
  titleColor: {
    fontWeight: 'bold',
    color: theme.palette.primary.main,
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.55em'
    }
  },
  opening: {
    overflow: 'hidden',
    position: 'relative',
    '&:before': {
      content: "''",
      width: '100%',
      height: '100%',
      position: 'absolute',
      opacity: 0.1,
      background: `url(${deco}) no-repeat 230px 480px`
    },
    '& h1': {
      color: theme.palette.common.white,
      lineHeight: '3.6rem',
      display: 'block',
      [theme.breakpoints.down('md')]: {
        fontSize: 32,
        lineHeight: '48px'
      }
    },
    '& p': {
      color: theme.palette.common.white,
    }
  },
  openingWrap: {
    padding: theme.spacing(6)
  },
  openingHead: {
    marginBottom: 200,
  },
  openingFooter: {
    position: 'relative',
    display: 'flex',
    padding: theme.spacing(6),
    justifyContent: 'space-between',
    alignItems: 'center',
    '& a': {
      fontSize: 14,
      color: fade(theme.palette.common.white, 0.64),
      textDecoration: 'none'
    },
  },
  label: {},
  btnArea: {
    display: 'flex',
    justifyContent: 'center',
    margin: `${theme.spacing(4)}px 0 ${theme.spacing(2)}px`,
    fontSize: 12,
    '& $label': {
      fontSize: 12,
      '& span': {
        fontSize: 12
      }
    },
    '& button': {
      margin: `0 ${theme.spacing(1)}px`
    },
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      '& button': {
        width: '100%',
        margin: 5
      }
    },
  },
  noMargin: {
    margin: 0
  },
  redBtn: {
    color: theme.palette.common.white,
    background: red[500],
    '&:hover': {
      background: red[700],
    },
  },
  greyBtn: {
    color: theme.palette.common.white,
    background: grey[300],
    '&:hover': {
      background: grey[500],
    },
  },
  cyanBtn: {
    color: theme.palette.common.white,
    background: cyan[500],
    '&:hover': {
      background: cyan[700],
    },
  },
  buttonLink: {
    background: 'none',
    padding: 0,
    textTransform: 'none',
    transition: 'color ease 0.3s',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: '0.875rem',
    '&:hover': {
      background: 'none',
      color: theme.palette.secondary.main
    }
  },
  leftIcon: {
    marginRight: theme.spacing(1)
  },
  rightIcon: {
    marginLeft: theme.spacing(1)
  },
  iconSmall: {
    fontSize: 20,
  },
  footer: {
    textAlign: 'center',
    padding: 5,
    background: theme.palette.grey[100],
    fontSize: 14,
    position: 'relative'
  },
  welcomeWrap: {
    position: 'relative'
  },
  tab: {
    margin: `${theme.spacing(3)}px 0 ${theme.spacing(1)}px`,
  },
  link: {
    fontSize: '0.875rem',
    color: theme.palette.secondary.main,
    textDecoration: 'none',
    position: 'relative',
    top: 1,
    left: 0,
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  socmedFull: {
    textAlign: 'center',
    width: '100%',
    margin: `${theme.spacing(3)}px ${theme.spacing(1)}px`,
    '& button': {
      width: '100%',
      display: 'block',
      margin: `0 auto ${theme.spacing(2)}px`
    },
    [theme.breakpoints.up('sm')]: {
      '& button': {
        width: 400,
      }
    }
  },
  lockWrap: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column'
    }
  },
  signArrow: {
    transform: theme.direction === 'rtl' ? 'rotate(180deg)' : 'none',
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  lockForm: {
    display: 'flex',
    alignItems: 'baseline',
  },
  notifyForm: {
    alignItems: 'baseline',
    [theme.breakpoints.down('xs')]: {
      '& button': {
        marginTop: theme.spacing(3),
        width: '100%'
      },
    },
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      '& button': {
        width: 'auto'
      }
    }
  },
  lockField: {
    marginRight: theme.spacing(1),
    '& label': {
      color: `${theme.palette.common.white} !important`,
    },
    '& label + div': {
      background: fade(theme.palette.primary.light, 0.3),
      border: 'none',
      '& svg': {
        fill: fade(theme.palette.common.white, 0.7)
      }
    }
  },
  avatar: {
    width: 150,
    height: 150,
    [theme.breakpoints.up('lg')]: {
      margin: theme.spacing(3),
    },
    boxShadow: theme.shadows[8]
  },
  userName: {
    color: theme.palette.common.white,
    fontWeight: theme.typography.fontWeightMedium,
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(3),
      textAlign: 'center'
    }
  },
  hint: {
    padding: theme.spacing(1)
  },
  brandCenter: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(3),
  },
  centerAdornment: {
    justifyContent: 'center',
    '& > div': {
      width: '100%'
    },
    '& aside': {
      top: -10,
      [theme.breakpoints.up('sm')]: {
        left: 10,
      },
      position: 'relative'
    },
    '& svg': {
      fill: theme.palette.text.secondary
    }
  },
  centerV: {
    justifyContent: 'center'
  },
  optArea: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: `0 ${theme.spacing(0.5)}px`
  },
  lang: {
    borderRadius: 8,
    '& div': {
      color: theme.palette.common.white
    },
    '& svg': {
      fill: theme.palette.common.white
    }
  },
  success: {
    backgroundColor: green[600],
  },
  info: {
    backgroundColor: theme.palette.primary.dark,
  },
  warning: {
    backgroundColor: amber[700],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  iconMsg: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
  buttonProgress: {
    color: theme.palette.text.secondary,
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
});

export default styles;
