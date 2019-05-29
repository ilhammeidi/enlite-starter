/*
 * Blank Page Messages
 *
 * This contains all the text for the Maintenance.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.Maintenance';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Under maintenance',
  },
  paperTitle: {
    id: `${scope}.subtitle`,
    defaultMessage: 'Our website is under maintenance. We will be back shortly.',
  },
});
