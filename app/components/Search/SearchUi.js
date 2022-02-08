import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';
import { NavLink } from 'react-router-dom';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import { injectIntl } from 'react-intl';
import suggestionsApi from 'enl-api/ui/menu';
import messages from '../Header/messages';
import styles from './search-jss';

const menu = [];

function renderInput(inputProps) {
  const { classes, ref, ...other } = inputProps;

  return (
    <TextField
      className={classes.inputHeader}
      fullWidth
      InputProps={{
        inputRef: ref,
        ...other,
      }}
    />
  );
}

function renderSuggestion(suggestion, { query, isHighlighted }) {
  const matches = match(suggestion.name, query);
  const parts = parse(suggestion.name, matches);
  return (
    <MenuItem button selected={isHighlighted} component={NavLink} to={suggestion.link}>
      <div>
        {parts.map((part, index) => (
          part.highlight ? (
            <span key={String(index)} style={{ fontWeight: 700 }}>
              {part.text}
            </span>
          ) : (
            <strong key={String(index)} style={{ fontWeight: 300 }}>
              {part.text}
            </strong>
          )
        ))}
      </div>
    </MenuItem>
  );
}

function renderSuggestionsContainer(options) {
  const { containerProps, children } = options;

  return (
    <Paper {...containerProps}>
      {children}
    </Paper>
  );
}

function getSuggestionValue(suggestion) {
  return suggestion.name;
}

function getSuggestions(value) {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;
  return inputLength === 0 ? [] : menu.filter(suggestion => {
    const keep = (!inputValue || suggestion.name.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1) && count < 5;

    if (keep) {
      count += 1;
    }

    return keep;
  });
}

function SearchUi(props) {
  const { classes, intl, history } = props;
  const [suggestions, setSuggestions] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const handleSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const handleChange = (event, { newValue }) => {
    setInputValue(newValue);
  };

  const handleSuggestionSelected = (event, { suggestion, method }) => {
    if (method === 'enter') {
      history.push(suggestion.link);
    }
  };

  useEffect(() => {
    suggestionsApi.map(item => {
      if (item.child) {
        item.child.map(itemChild => {
          if (itemChild.link) {
            menu.push(itemChild);
          }
          return menu;
        });
      }
      return false;
    });
  }, []);

  return (
    <Autosuggest
      theme={{
        container: classes.containerSearch,
        suggestionsContainerOpen: classes.suggestionsContainerOpen,
        suggestionsList: classes.suggestionsList,
        suggestion: classes.suggestion,
      }}
      renderInputComponent={renderInput}
      suggestions={suggestions}
      onSuggestionsFetchRequested={handleSuggestionsFetchRequested}
      onSuggestionsClearRequested={handleSuggestionsClearRequested}
      renderSuggestionsContainer={renderSuggestionsContainer}
      getSuggestionValue={getSuggestionValue}
      onSuggestionSelected={handleSuggestionSelected}
      renderSuggestion={renderSuggestion}
      className={classes.autocomplete}
      inputProps={{
        classes,
        placeholder: intl.formatMessage(messages.search),
        value: inputValue,
        onChange: handleChange,
      }}
    />
  );
}

SearchUi.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  intl: PropTypes.object.isRequired
};

export default withStyles(styles)(injectIntl(SearchUi));
