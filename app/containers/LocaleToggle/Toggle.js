/**
 *
 * LocaleToggle
 *
 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import useStyles from 'enl-components/Header/header-jss.js';

function Toggle(props) {
  const { classes } = useStyles();
  const {
    value,
    values,
    onToggle,
    messages,
    intl,
  } = props;
  const [lang, setLang] = useState(value);

  const handleChange = event => {
    setLang(event.target.value);
    onToggle(event);
  };

  return (
    <form>
      <FormControl variant="standard">
        <Select
          variant="standard"
          className={classes.inputLang}
          classes={{
            root: classes.selectbox
          }}
          value={lang}
          name="lang"
          onChange={(e) => handleChange(e)}>
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
  onToggle: PropTypes.func.isRequired,
  values: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  messages: PropTypes.object.isRequired,
  intl: PropTypes.object.isRequired,
};

export default injectIntl(Toggle);
