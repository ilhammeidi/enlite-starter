/*
 *
 * LanguageToggle
 *
 */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeDirectionAction } from 'enl-redux/modules/ui';
import Toggle from './Toggle';
import messages from './messages';
import { appLocales } from '../../i18n';
import { changeLocale } from '../LanguageProvider/reducer';

function LocaleToggle() {
  const dispatch = useDispatch();
  const locale = useSelector((state) => state.language.locale);

  const handleLocalToggle = event => {
    // Change Language
    const lang = event.target.value;
    dispatch(changeLocale(lang));

    // Change Theme Direction
    if (event.target.value === 'ar') {
      document.dir = 'rtl';
      dispatch(changeDirectionAction('rtl'));
    } else {
      document.dir = 'ltr';
      dispatch(changeDirectionAction('ltr'));
    }
  };

  return (
    <Toggle
      value={locale}
      values={appLocales}
      messages={messages}
      onToggle={(e) => handleLocalToggle(e)}
    />
  );
}

export default LocaleToggle;
