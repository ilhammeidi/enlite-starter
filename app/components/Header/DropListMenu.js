import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Popper from '@mui/material/Popper';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import { injectIntl, FormattedMessage } from 'react-intl';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import messages from 'enl-api/ui/menuMessages';
import useStyles from './header-jss';

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
  return <NavLink to={props.to} {...props} innerRef={ref} />; // eslint-disable-line
});

function MainMenu(props) { // eslint-disable-line
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
            aria-owns={open ? 'menu-list-grow' : undefined}
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
          { !item.linkParent && (
            <Popper
              open={openMenu.indexOf(item.key) > -1}
              transition
              disablePortal
              anchorEl={anchorEl}
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  id="menu-list-grow"
                  style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                >
                  <Paper className={classes.dropDownMenu}>
                    <ClickAwayListener onClickAway={handleClose}>
                      <List role="menu" component="nav" className={classes.paperMenu}>
                        { getMenus(item.key, item.child) }
                      </List>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          )}
        </div>
      );
    }
    if (item.title) {
      return (
        <ListSubheader component="div" key={index.toString()} className={classes.title}>
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
        className={classes.menuItem}
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
      <div>
        {getMenus(null, dataMenu)}
      </div>
    </nav>
  );
}

MainMenu.propTypes = {
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

const MainMenuMapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainMenu);

export default injectIntl(MainMenuMapped);
