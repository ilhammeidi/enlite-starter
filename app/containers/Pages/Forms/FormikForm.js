import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from 'tss-react/mui';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { SourceReader, PapperBlock } from 'enl-components';
import { injectIntl } from 'react-intl';
import messages from './messages';
import FormikFormDemo from './FormikFormDemo';

const useStyles = makeStyles()(() => ({
  root: {
    flexGrow: 1,
  }
}));

function ReduxForm(props) {
  const title = brand.name + ' - Form';
  const description = brand.desc;
  const docSrc = 'containers/Forms/demos/';
  const { intl } = props;
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>
      <PapperBlock
        title={intl.formatMessage(messages.formTitle)}
        icon="library_books"
        desc={intl.formatMessage(messages.formDesc)}
      >
        <div>
          <FormikFormDemo />
          <SourceReader componentName={docSrc + 'FormikFormDemo.js'} />
        </div>
      </PapperBlock>
    </div>
  );
}

ReduxForm.propTypes = { intl: PropTypes.object.isRequired, };

export default injectIntl(ReduxForm);
