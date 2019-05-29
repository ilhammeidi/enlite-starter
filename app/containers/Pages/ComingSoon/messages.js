/*
 * CommingSoon Messages
 *
 * This contains all the text for the CommingSoon.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.CommingSoon';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Coming Soon',
  },
  subtitle: {
    id: `${scope}.subtitle`,
    defaultMessage: 'Will come with performance in design',
  },
  field: {
    id: `${scope}.field`,
    defaultMessage: 'Email',
  },
  button: {
    id: `${scope}.button`,
    defaultMessage: 'Notify Me',
  },
});
