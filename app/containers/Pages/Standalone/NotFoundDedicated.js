import React from 'react';
import { PropTypes } from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import styles from 'containers/Templates/appStyles-jss';
import { ErrorWrap } from 'enl-components';
import { injectIntl } from 'react-intl';
import messages from 'enl-components/Error/messages';

function NotFoundDedicated(props) {
  const { classes, intl } = props;
  return (
    <div className={classNames(classes.appFrameOuter, classes.solidBg)}>
      <main className={classes.outerContent} id="mainContent">
        <ErrorWrap title="404" invert desc={intl.formatMessage(messages.title404)} />
      </main>
    </div>
  );
}

NotFoundDedicated.propTypes = {
  classes: PropTypes.object.isRequired,
  intl: PropTypes.object.isRequired
};

export default (withStyles(styles)(injectIntl(NotFoundDedicated)));
