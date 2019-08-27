/*
 * User Messages
 *
 * This contains all the text for the User page.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.Users';

export default defineMessages({
  welcomeTitle: {
    id: `${scope}.Welcome.title`,
    defaultMessage: 'Welcome to',
  },
  welcomeSubtitle: {
    id: `${scope}.Welcome.subtitle`,
    defaultMessage: 'Please sign in to continue',
  },
  greetingTitle: {
    id: `${scope}.Greeting.title`,
    defaultMessage: 'Hi...nice to meet you',
  },
  greetingSubtitle: {
    id: `${scope}.Greeting.subtitle`,
    defaultMessage: 'Just register to join with us',
  },
});
