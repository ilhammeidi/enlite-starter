import { makeStyles } from 'tss-react/mui';
import { alpha } from '@mui/material/styles';
import deco from 'enl-images/decoration/hexaMonochrome.svg';
import {
  cyan, blueGrey as grey, red, green, amber
} from '@mui/material/colors';
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
    padding: `${theme.spacing(6)} ${theme.spacing(20)}`,
  },
});

const useStyles = makeStyles()((theme, _params, classes) => ({
  root: {
    ...rootWraper
  },
  button: {},
  rootFull: {
    ...rootWraper,
    height: '100%',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    [theme.breakpoints.down('lg')]: {
      overflow: 'hidden'
    },
  },
  containerSide: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    [theme.breakpoints.down('lg')]: {
      overflow: 'hidden'
    },
  },
  paperWrap: {
    background: theme.palette.background.paper,
    padding: `${theme.spacing(6)} ${theme.spacing(1)}`,
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
    [`& .${classes.topBar}`]: {
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
    [`& .${classes.icon}`]: {
      margin: `0 ${theme.spacing(1)}`
    },
    [theme.breakpoints.down('md')]: {
      alignItems: 'center',
      marginBottom: theme.spacing(3),
    }
  },
  divider: {
    textAlign: 'center',
    borderTop: `1px solid ${theme.palette.divider}`,
    fontSize: 14,
    color: theme.palette.text.secondary,
    margin: `${theme.spacing(6)} 0 ${theme.spacing(3)}`,
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
    [`&.${classes.centerFlex}`]: {
      justifyContent: 'center'
    },
    [`&.${classes.outer}`]: {
      color: theme.palette.common.white,
    },
    [theme.breakpoints.down('lg')]: {
      margin: `${theme.spacing(2)} 0`
    },
    '& img': {
      width: 30,
      marginRight: 10,
    },
    [`&.${classes.invert}`]: {
      color: theme.palette.text.primary,
    }
  },
  headLogo: {
    textAlign: 'center',
    marginBottom: theme.spacing(4),
    [`& .${classes.brand}`]: {
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
    margin: `${theme.spacing(2)} auto`,
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
    background: alpha(theme.palette.text.disabled, 0.05),
    borderRadius: 40,
    display: 'flex',
    justifyContent: 'center',
    '& button': {
      padding: '4px 16px',
      margin: `0 ${theme.spacing(1)}`,
      [theme.breakpoints.down('sm')]: {
        fontSize: 0
      },
      '& i': {
        fontSize: 18,
        color: theme.palette.common.white,
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
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(3)
    },
  },
  sideFormWrap: {
    height: '100%',
    width: '65%',
    zIndex: 1,
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      width: '100%'
    }
  },
  msgUser: {
    margin: `${theme.spacing(1)} auto`,
    '& > div:first-of-type': {
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
    [theme.breakpoints.down('md')]: {
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
    [theme.breakpoints.down('md')]: {
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
      [theme.breakpoints.down('lg')]: {
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
      color: alpha(theme.palette.common.white, 0.64),
      textDecoration: 'none'
    },
  },
  label: {},
  btnArea: {
    display: 'flex',
    justifyContent: 'center',
    margin: `${theme.spacing(4)} 0 ${theme.spacing(2)}`,
    fontSize: 12,
    [`& .${classes.label}`]: {
      fontSize: 12,
      '& span': {
        fontSize: 12
      }
    },
    '& button': {
      margin: `0 ${theme.spacing(1)}`
    },
    [theme.breakpoints.down('sm')]: {
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
    margin: `${theme.spacing(3)} 0 ${theme.spacing(1)}`,
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
    margin: `${theme.spacing(3)} ${theme.spacing(1)}`,
    '& button': {
      width: '100%',
      display: 'block',
      margin: `0 auto ${theme.spacing(2)}`
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
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },
  signArrow: {
    transform: theme.direction === 'rtl' ? 'rotate(180deg)' : 'none',
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    }
  },
  lockForm: {
    display: 'flex',
    alignItems: 'baseline',
    [`& .${classes.button}`]: {
      width: 56,
      height: 56,
      margin: theme.spacing(0, 1),
      display: 'inline-block'
    }
  },
  notifyForm: {
    alignItems: 'baseline',
    [theme.breakpoints.down('sm')]: {
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
      background: alpha(theme.palette.primary.light, 0.3),
      border: 'none',
      '& svg': {
        fill: alpha(theme.palette.common.white, 0.7)
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
    [theme.breakpoints.down('sm')]: {
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
    padding: `0 ${theme.spacing(0.5)}`
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
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
