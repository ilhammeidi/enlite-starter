/*
 * LocaleToggle Messages
 *
 * This contains all the text for the LanguageToggle component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.LocaleToggle';

export default defineMessages({
  en: {
    id: `${scope}.en`,
    defaultMessage: 'English',
  },
  de: {
    id: `${scope}.de`,
    defaultMessage: 'Deutsch',
  },
  id: {
    id: `${scope}.id`,
    defaultMessage: 'Bahasa Indonesia',
  },
  es: {
    id: `${scope}.es`,
    defaultMessage: 'Español',
  },
  zh: {
    id: `${scope}.zh`,
    defaultMessage: '简体中文',
  },
  ar: {
    id: `${scope}.ar`,
    defaultMessage: 'العربيّة',
  },
});
