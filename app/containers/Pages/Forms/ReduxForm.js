import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from 'tss-react/mui';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { SourceReader, PapperBlock } from 'enl-components';
import { injectIntl } from 'react-intl';
import messages from './messages';
import ReduxFormDemo from './ReduxFormDemo';

const useStyles = makeStyles()(() => ({
  root: {
    flexGrow: 1,
  }
}));

function ReduxForm(props) {
  const [valueForm, setValueForm] = useState();
  const showResult = (values) => {
    setTimeout(() => {
      setValueForm(values);
    }, 500); // simulate server latency
  };

  const title = brand.name + ' - Form';
  const description = brand.desc;
  const docSrc = 'containers/Forms/demos/';
  const { intl } = props;
  const {
    classes
  } = useStyles();
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
          <ReduxFormDemo onSubmit={(values) => showResult(values)} />
          {valueForm && (
            <p>
              You submitted:
              <br />
              { JSON.stringify(valueForm) }
            </p>
          )}
          <SourceReader componentName={docSrc + 'ReduxFormDemo.js'} />
        </div>
      </PapperBlock>
    </div>
  );
}

ReduxForm.propTypes = { intl: PropTypes.object.isRequired, };

export default injectIntl(ReduxForm);
