import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import brand from 'enl-api/dummy/brand';
import { withStyles } from '@material-ui/core/styles';
import { SourceReader, PapperBlock } from 'enl-components';
import ReduxFormDemo from './ReduxFormDemo';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

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
  const { classes } = props;
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
        title="Redux Form"
        icon="library_books"
        desc="This is a simple demonstration of how to connect all the standard material-ui form elements to redux-form."
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

ReduxForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ReduxForm);
