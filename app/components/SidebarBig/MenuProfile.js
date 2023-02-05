import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ButtonBase from '@mui/material/ButtonBase';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import dummy from 'enl-api/dummy/dummyContents';
import { injectIntl, FormattedMessage } from 'react-intl';
import messages from 'enl-api/ui/menuMessages';
import useStyles from './sidebarBig-jss';

function MenuProfile(props) {
  const { userAttr } = props;
  const { classes, cx } = useStyles();
  const [status, setStatus] = useState(dummy.user.status);
  const [anchorEl, setAnchorEl] = useState(null);

  const setStatusIntoClass = st => {
    switch (st) {
      case 'online':
        return classes.online;
      case 'idle':
        return classes.idle;
      case 'bussy':
        return classes.bussy;
      default:
        return classes.offline;
    }
  };

  const handleOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeStatus = newStatus => {
    setStatus(newStatus);
    handleClose();
  };

  return (
    <div>
      <ButtonBase className={classes.avatarHead} onClick={handleOpen}>
        <Avatar
          alt={userAttr.name}
          src={userAttr.avatar}
          className={cx(classes.avatar, classes.bigAvatar)}
        />
        <i className={cx(classes.dotStatus, classes.pinned, setStatusIntoClass(status))} />
      </ButtonBase>
      <Menu
        id="status-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className={classes.statusMenu}
      >
        <MenuItem className={classes.profile}>
          <Avatar
            alt={userAttr.name}
            src={userAttr.avatar}
            className={cx(classes.avatar, classes.bigAvatar)}
          />
          <div className={classes.name}>
            <h5>{userAttr.name}</h5>
            <i className={cx(classes.dotStatus, setStatusIntoClass(status))} />
            <FormattedMessage {...messages[status]} />
          </div>
        </MenuItem>
        <MenuItem onClick={() => handleChangeStatus('online')}>
          <i className={cx(classes.dotStatus, classes.online)} />
          <FormattedMessage {...messages.online} />
        </MenuItem>
        <MenuItem onClick={() => handleChangeStatus('idle')}>
          <i className={cx(classes.dotStatus, classes.idle)} />
          <FormattedMessage {...messages.idle} />
        </MenuItem>
        <MenuItem onClick={() => handleChangeStatus('bussy')}>
          <i className={cx(classes.dotStatus, classes.bussy)} />
          <FormattedMessage {...messages.bussy} />
        </MenuItem>
        <MenuItem onClick={() => handleChangeStatus('offline')}>
          <i className={cx(classes.dotStatus, classes.offline)} />
          <FormattedMessage {...messages.offline} />
        </MenuItem>
      </Menu>
    </div>
  );
}

MenuProfile.propTypes = {
  userAttr: PropTypes.object.isRequired,
};

MenuProfile.defaultProps = {
  anchorEl: null,
  isLogin: false,
};

export default injectIntl(MenuProfile);
