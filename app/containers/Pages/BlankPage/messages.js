/*
 * Blank Page Messages
 *
 * This contains all the text for the Blank Page.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.Blank';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Blank Page',
  },
  paperTitle: {
    id: `${scope}.paper.title`,
    defaultMessage: 'Blank Page',
  },
  paperSubtitle: {
    id: `${scope}.paper.subtitle`,
    defaultMessage: 'Some text description',
  },
  content: {
    id: `${scope}.paper.content`,
    defaultMessage: 'Content',
  },
});
