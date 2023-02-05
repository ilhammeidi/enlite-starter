import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Info from '@mui/icons-material/Info';
import Warning from '@mui/icons-material/Warning';
import Check from '@mui/icons-material/CheckCircle';
import Error from '@mui/icons-material/RemoveCircle';
import ExitToApp from '@mui/icons-material/ExitToApp';
import Badge from '@mui/material/Badge';
import Divider from '@mui/material/Divider';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import dummy from 'enl-api/dummy/dummyContents';
import { injectIntl, FormattedMessage } from 'react-intl';
import messageStyles from 'enl-styles/Messages.scss';
import avatarApi from 'enl-api/images/avatars';
import link from 'enl-api/ui/link';
import NotificationsActiveOutlined from '@mui/icons-material/NotificationsActiveOutlined';
import messages from './messages';
import useStyles from './header-jss';

function UserMenu(props) {
  const { classes, cx } = useStyles();
  const {
    dark,
    signOut,
    avatar
  } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(null);
  const handleMenu = menu => (event) => {
    setOpenMenu(openMenu === menu ? null : menu);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenMenu(null);
  };

  return (
    <div>
      <IconButton
        aria-haspopup="true"
        onClick={handleMenu('notification')}
        color="inherit"
        className={cx(classes.notifIcon, dark ? classes.dark : classes.light)}
        size="large">
        <Badge className={classes.badge} badgeContent={4} color="secondary">
          <NotificationsActiveOutlined />
        </Badge>
      </IconButton>
      <Menu
        id="menu-notification"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        className={classes.notifMenu}
        PaperProps={{
          style: {
            width: 350,
          },
        }}
        open={openMenu === 'notification'}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <div className={messageStyles.messageInfo}>
            <ListItemAvatar>
              <Avatar alt="User Name" src={avatarApi[0]} />
            </ListItemAvatar>
            <ListItemText primary={dummy.text.subtitle} secondary={dummy.text.date} />
          </div>
        </MenuItem>
        <Divider variant="inset" />
        <MenuItem onClick={handleClose}>
          <div className={messageStyles.messageInfo}>
            <ListItemAvatar>
              <Avatar className={messageStyles.icon}>
                <Info />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={dummy.text.sentences} className={classes.textNotif} secondary={dummy.text.date} />
          </div>
        </MenuItem>
        <Divider variant="inset" />
        <MenuItem onClick={handleClose}>
          <div className={messageStyles.messageSuccess}>
            <ListItemAvatar>
              <Avatar className={messageStyles.icon}>
                <Check />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={dummy.text.subtitle} className={classes.textNotif} secondary={dummy.text.date} />
          </div>
        </MenuItem>
        <Divider variant="inset" />
        <MenuItem onClick={handleClose}>
          <div className={messageStyles.messageWarning}>
            <ListItemAvatar>
              <Avatar className={messageStyles.icon}>
                <Warning />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={dummy.text.subtitle} className={classes.textNotif} secondary={dummy.text.date} />
          </div>
        </MenuItem>
        <Divider variant="inset" />
        <MenuItem onClick={handleClose}>
          <div className={messageStyles.messageError}>
            <ListItemAvatar>
              <Avatar className={messageStyles.icon}>
                <Error />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Suspendisse pharetra pulvinar sollicitudin. Aenean ut orci eu odio cursus lobortis eget tempus velit. " className={classes.textNotif} secondary="Jan 9, 2016" />
          </div>
        </MenuItem>
      </Menu>
      <Button onClick={handleMenu('user-setting')}>
        <Avatar
          alt="avatar"
          src={avatar}
        />
      </Button>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={openMenu === 'user-setting'}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} component={Link} to={link.profile}>
          <FormattedMessage {...messages.profile} />
        </MenuItem>
        <MenuItem onClick={handleClose} component={Link} to={link.task}>
          <FormattedMessage {...messages.task} />
        </MenuItem>
        <MenuItem onClick={handleClose} component={Link} to={link.email}>
          <FormattedMessage {...messages.email} />
          <ListItemIcon>
            <Badge className={cx(classes.badge, classes.badgeMenu)} badgeContent={2} color="secondary">&nbsp;</Badge>
          </ListItemIcon>
        </MenuItem>
        <Divider />
        <MenuItem onClick={signOut}>
          <ListItemIcon>
            <ExitToApp />
          </ListItemIcon>
          <FormattedMessage {...messages.logout} />
        </MenuItem>
      </Menu>
    </div>
  );
}

UserMenu.propTypes = {
  signOut: PropTypes.func.isRequired,
  avatar: PropTypes.string.isRequired,
  dark: PropTypes.bool,
};

UserMenu.defaultProps = {
  dark: false
};

export default injectIntl(UserMenu);
