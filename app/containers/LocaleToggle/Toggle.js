/**
 *
 * LocaleToggle
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import styles from 'enl-components/Header/header-jss.js';

function Toggle(props) {
  const {
    value,
    values,
    onToggle,
    messages,
    intl,
    classes
  } = props;
  const [lang, setLang] = useState(value);

  const handleChange = event => {
    setLang(event.target.value);
    onToggle(event);
  };

  return (
    <form>
      <FormControl>
        <Select
          className={classes.inputLang}
          classes={{
            root: classes.selectbox
          }}
          value={lang}
          name="lang"
          onChange={(e) => handleChange(e)}
        >
          {values && values.map(val => (
            <MenuItem key={val} className={classes.langItem} value={val}>
              <i className={val} />
              {messages[val] ? intl.formatMessage(messages[val]) : val}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </form>
  );
}

Toggle.propTypes = {
  classes: PropTypes.object.isRequired,
  onToggle: PropTypes.func.isRequired,
  values: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  messages: PropTypes.object.isRequired,
  intl: PropTypes.object.isRequired,
};

export default withStyles(styles)(injectIntl(Toggle));
