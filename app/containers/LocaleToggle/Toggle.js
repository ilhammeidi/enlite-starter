/**
 *
 * LocaleToggle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import styles from 'enl-components/Header/header-jss.js';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: props.value,
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    this.props.onToggle(event); // eslint-disable-line
  };

  render() {
    const { lang } = this.state;
    const {
      values,
      messages,
      intl,
      classes
    } = this.props;

    return (
      <form>
        <FormControl>
          <Select
            className={classes.inputLang}
            value={lang}
            name="lang"
            onChange={this.handleChange}
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
}

Toggle.propTypes = {
  classes: PropTypes.object.isRequired,
  onToggle: PropTypes.func.isRequired,
  values: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  messages: PropTypes.object.isRequired,
  intl: intlShape.isRequired,
};

export default withStyles(styles)(injectIntl(Toggle));
