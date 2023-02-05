/*
 * Layout Messages
 *
 * This contains all the text for the Tables page.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.Tables';

export default defineMessages({
  basicTitle: {
    id: `${scope}.Basic.title`,
    defaultMessage: 'Basic Table',
  },
  strippedTableTitle: {
    id: `${scope}.Basic.stripped.title`,
    defaultMessage: 'Stripped Table',
  },
  strippedTableDesc: {
    id: `${scope}.Basic.stripped.desc`,
    defaultMessage: 'They (allegedly) aid usability in reading tabular data by offering the user a coloured means of separating and differentiating rows from one another',
  },
  hoverTableTitle: {
    id: `${scope}.Basic.hover.title`,
    defaultMessage: 'Hover Table',
  },
  hoverTableDesc: {
    id: `${scope}.Basic.hover.desc`,
    defaultMessage: 'Hover tables is addition option that allows you to see what row you selected',
  },
  borderedTableTitle: {
    id: `${scope}.Basic.bordered.title`,
    defaultMessage: 'Bordered Table',
  },
  borderedTableDesc: {
    id: `${scope}.Basic.bordered.desc`,
    defaultMessage: 'Old is gold, here is old fashion bordered table, we tweaked it a bit so that the headings looks more prominent.',
  },
  statusTableTitle: {
    id: `${scope}.Basic.status.title`,
    defaultMessage: 'Status Table With Label',
  },
  statusTableDesc: {
    id: `${scope}.Basic.status.desc`,
    defaultMessage: '',
  },
  colouredTableTitle: {
    id: `${scope}.Basic.coloured.title`,
    defaultMessage: 'Coloured Row',
  },
  colouredTableDesc: {
    id: `${scope}.Basic.coloured.desc`,
    defaultMessage: '',
  },
  emptyTableTitle: {
    id: `${scope}.Basic.empty.title`,
    defaultMessage: 'Empty Table',
  },
  emptyTableDesc: {
    id: `${scope}.Basic.empty.desc`,
    defaultMessage: 'UI Table when no data to be shown',
  },
  dataTableTitle: {
    id: `${scope}.DataTable.title`,
    defaultMessage: 'Data Table',
  },
  advancedTitle: {
    id: `${scope}.DataTable.advanced.title`,
    defaultMessage: 'Advanced Data Table',
  },
  advancedDesc: {
    id: `${scope}.DataTable.advanced.desc`,
    defaultMessage: 'It uses npm mui-datatables. It\'s easy to use, you just describe columns and data collection. After that it will magically build features such as filtering, viewing / hiding columns, exporting to CSV downloads, printing, and more. It uses npm mui-datatables. It\'s easy to use, you just describe columns and data collection. After that it will magically build features such as filtering, viewing / hiding columns, exporting to CSV downloads, printing, and more.',
  },
  playgroundTitle: {
    id: `${scope}.Playground.title`,
    defaultMessage: 'Table Playground',
  },
  editTitle: {
    id: `${scope}.Edit.title`,
    defaultMessage: 'Editable Cell',
  },
  inRowEditTitle: {
    id: `${scope}.Edit.inRow.title`,
    defaultMessage: 'In-Row Editable Cell',
  },
  inRowEditDesc: {
    id: `${scope}.Edit.inRow.desc`,
    defaultMessage: 'The Editable Table Cell supports editing features including creating, updating and deleting rows. The editing state contains information about rows currently being edited, changes applied to a particular row, and rows that have been deleted and created.',
  },
});
