import React from 'react';
import { PropTypes } from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import styles from 'containers/Templates/appStyles-jss';
import { ErrorWrap } from 'enl-components';
import { injectIntl, intlShape } from 'react-intl';
import messages from 'enl-components/Error/messages';

class NotFoundDedicated extends React.Component {
  render() {
    const { classes, intl } = this.props;
    return (
      <div className={classNames(classes.appFrameOuter, classes.solidBg)}>
        <main className={classes.outerContent} id="mainContent">
          <ErrorWrap title="404" invert desc={intl.formatMessage(messages.title404)} />
        </main>
      </div>
    );
  }
}

NotFoundDedicated.propTypes = {
  classes: PropTypes.object.isRequired,
  intl: intlShape.isRequired
};

export default (withStyles(styles)(injectIntl(NotFoundDedicated)));
