import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Popper from '@mui/material/Popper';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Icon from '@mui/material/Icon';
import { injectIntl, FormattedMessage } from 'react-intl';
import messages from 'enl-api/ui/menuMessages';
import useStyles from './header-jss';

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
  return <NavLink to={props.to} {...props} innerRef={ref} />; // eslint-disable-line
});

function MegaMenu(props) { // eslint-disable-line
  const { classes, cx } = useStyles();
  const {
    open,
    openSubMenu,
    dataMenu,
    intl
  } = props;
  const [active, setActive] = useState([]);
  const [openMenu, setOpenMenu] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (event, key, keyParent) => {
    openSubMenu(key, keyParent);
    setAnchorEl(event.currentTarget);
    setTimeout(() => {
      setOpenMenu([key]);
    }, 50);
  };

  const handleClose = () => {
    setOpenMenu([]);
  };

  const handleActiveParent = key => {
    setActive([key]);
    setOpenMenu([]);
  };

  const getMenus = (parent, menuArray) => menuArray.map((item, index) => {
    if (item.multilevel) {
      return false;
    }
    if (item.child || item.linkParent) {
      return (
        <div key={index.toString()}>
          <Button
            aria-haspopup="true"
            component={item.linkParent ? LinkBtn : 'button'}
            to={item.linkParent ? item.linkParent : false}
            className={
              cx(
                classes.headMenu,
                open.indexOf(item.key) > -1 ? classes.opened : '',
                active.indexOf(item.key) > -1 ? classes.selected : ''
              )
            }
            onClick={(event) => handleOpenMenu(event, item.key, item.keyParent)}
          >
            {
              messages[item.key] !== undefined
                ? <FormattedMessage {...messages[item.key]} />
                : item.name
            }
            { !item.linkParent ? <ExpandMore className={classes.rightIcon} /> : <span className={classes.rightIcon}>&nbsp;&nbsp;</span> }
          </Button>
          {!item.linkParent && (
            <Popper
              open={openMenu.indexOf(item.key) > -1}
              transition
              disablePortal
              anchorEl={anchorEl}
            >
              {({ TransitionProps, placement }) => (
                <Fade
                  {...TransitionProps}
                  id="menu-list-grow"
                  style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                >
                  <Paper className={classes.dropDownMenu}>
                    <ClickAwayListener onClickAway={handleClose}>
                      <Grid container>
                        <Grid item md={3} container justifyContent="center">
                          <span className={classes.bigIcon}>
                            <Icon>{item.icon}</Icon>
                          </span>
                        </Grid>
                        <Grid item md={9}>
                          <List role="menu" component="nav" className={classes.megaMenu}>
                            { getMenus(item.key, item.child) }
                          </List>
                        </Grid>
                      </Grid>
                    </ClickAwayListener>
                  </Paper>
                </Fade>
              )}
            </Popper>
          )}
        </div>
      );
    }
    if (item.title) {
      return (
        <ListSubheader
          component="div"
          disableSticky
          key={index.toString()}
          className={classes.title}
        >
          {
            messages[item.key] !== undefined
              ? <FormattedMessage {...messages[item.key]} />
              : item.name
          }
        </ListSubheader>
      );
    }
    return (
      <ListItem
        key={index.toString()}
        button
        exact
        className={classes.megaItem}
        activeClassName={classes.active}
        component={LinkBtn}
        to={item.link}
        onClick={() => handleActiveParent(parent)}
      >
        <ListItemText
          primary={
            messages[item.key] !== undefined
              ? intl.formatMessage(messages[item.key])
              : item.name
          }
        />
      </ListItem>
    );
  });

  useEffect(() => {
    setActive(open);
  }, []);

  return (
    <nav className={classes.mainMenu}>
      <div className={classes.megaMenu}>
        {getMenus(null, dataMenu)}
      </div>
    </nav>
  );
}

MegaMenu.propTypes = {
  open: PropTypes.array.isRequired,
  openSubMenu: PropTypes.func.isRequired,
  dataMenu: PropTypes.array.isRequired,
  intl: PropTypes.object.isRequired
};

const openAction = (key, keyParent) => ({ type: 'OPEN_SUBMENU', key, keyParent });

const mapStateToProps = state => ({
  open: state.ui.subMenuOpen
});

const mapDispatchToProps = dispatch => ({
  openSubMenu: bindActionCreators(openAction, dispatch)
});

const MegaMenuMapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(MegaMenu);

export default injectIntl(MegaMenuMapped);
