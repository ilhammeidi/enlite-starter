import React from 'react';
import { PropTypes } from 'prop-types';
import useStyles from 'containers/Templates/appStyles-jss';
import { ErrorWrap } from 'enl-components';
import { injectIntl } from 'react-intl';
import messages from 'enl-components/Error/messages';

function NotFoundDedicated(props) {
  const { intl } = props;
  const { classes, cx } = useStyles();
  return (
    <div className={cx(classes.appFrameOuter, classes.solidBg)}>
      <main className={classes.outerContent} id="mainContent">
        <ErrorWrap title="404" invert desc={intl.formatMessage(messages.title404)} />
      </main>
    </div>
  );
}

NotFoundDedicated.propTypes = {
  intl: PropTypes.object.isRequired
};

export default injectIntl(NotFoundDedicated);
