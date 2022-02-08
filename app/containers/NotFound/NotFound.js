import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { Route } from 'react-router-dom';
import { ErrorWrap } from 'enl-components';
import { injectIntl } from 'react-intl';
import messages from 'enl-components/Error/messages';

const title = brand.name + ' - Page Not Found';
const description = brand.desc;

const NotFound = (props) => (
  <Route
    render={({ staticContext }) => {
      if (staticContext) {
        staticContext.status = 404; // eslint-disable-line
      }
      const { intl } = props;
      return (
        <div>
          <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
          </Helmet>
          <ErrorWrap title="404" desc={intl.formatMessage(messages.title404)} />
        </div>
      );
    }}
  />
);

NotFound.propTypes = {
  intl: PropTypes.object.isRequired
};

export default injectIntl(NotFound);
