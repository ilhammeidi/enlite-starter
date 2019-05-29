

/*
 * Error Messages
 *
 * This contains all the text for the Error.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Error';

export default defineMessages({
  title404: {
    id: `${scope}.title404`,
    defaultMessage: 'Oops, Page Not Found :(',
  },
  title502: {
    id: `${scope}.title502`,
    defaultMessage: 'Sorry, server goes wrong',
  },
  button: {
    id: `${scope}.button`,
    defaultMessage: 'Go to Dashboard',
  },
});
