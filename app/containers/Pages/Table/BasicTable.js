import React from 'react';
import { Helmet } from 'react-helmet';
import { makeStyles } from 'tss-react/mui';
import brand from 'enl-api/dummy/brand';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import { SourceReader, PapperBlock, EmptyData } from 'enl-components';
import { injectIntl } from 'react-intl';
import messages from './messages';
import StrippedTable from './StrippedTable';

const useStyles = makeStyles()(() => ({
  root: {
    flexGrow: 1,
  }
}));

function BasicTable(props) {
  const { intl } = props;
  const {
    classes
  } = useStyles();
  const title = brand.name + ' - Table';
  const description = brand.desc;
  const docSrc = 'containers/Tables/';
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
      <PapperBlock
        title={intl.formatMessage(messages.strippedTableTitle)}
        whiteBg
        icon="view_headline"
        desc={intl.formatMessage(messages.strippedTableDesc)}
      >
        <div>
          <StrippedTable />
          <SourceReader componentName={docSrc + 'StrippedTable.js'} />
        </div>
      </PapperBlock>
      <PapperBlock
        title={intl.formatMessage(messages.emptyTableTitle)}
        whiteBg
        icon="crop_5_4"
        desc={intl.formatMessage(messages.emptyTableDesc)}
      >
        <div>
          <EmptyData />
          <SourceReader componentName="components/Tables/EmptyData.js" />
        </div>
      </PapperBlock>
    </div>
  );
}

BasicTable.propTypes = {
  intl: PropTypes.object.isRequired
};

export default injectIntl(BasicTable);
