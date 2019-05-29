/*
 * Sidebar Component
 *
 * This contains all the text for the Sidebar Componen.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Sidebar';

export default defineMessages({
  online: {
    id: `${scope}.status.online`,
    defaultMessage: 'Oniine',
  },
  idle: {
    id: `${scope}.status.idle`,
    defaultMessage: 'Idle',
  },
  bussy: {
    id: `${scope}.status.bussy`,
    defaultMessage: 'Bussy',
  },
  offline: {
    id: `${scope}.status.offline`,
    defaultMessage: 'Offline',
  },
  dashboard: {
    id: `${scope}.home.dashboard`,
    defaultMessage: 'Dashboard',
  },
  tables: {
    id: `${scope}.tables`,
    defaultMessage: 'Tables Charts',
  },
  basic_table: {
    id: `${scope}.tables.basic_table`,
    defaultMessage: 'Basic',
  },
  pages: {
    id: `${scope}.pages`,
    defaultMessage: 'Pages',
  },
  account_page: {
    id: `${scope}.pages.account_page`,
    defaultMessage: 'Auth Page',
  },
  login: {
    id: `${scope}.pages.login`,
    defaultMessage: 'Login',
  },
  register: {
    id: `${scope}.pages.register`,
    defaultMessage: 'Register',
  },
  reset: {
    id: `${scope}.pages.reset`,
    defaultMessage: 'Reset Password',
  },
  generic_page: {
    id: `${scope}.pages.generic_page`,
    defaultMessage: 'Generic',
  },
  blank: {
    id: `${scope}.pages.blank`,
    defaultMessage: 'Blank Page',
  },
  maintenance: {
    id: `${scope}.pages.maintenance`,
    defaultMessage: 'Maintenance',
  },
  coming_soon: {
    id: `${scope}.pages.coming_soon`,
    defaultMessage: 'Coming Soon',
  },
  errors: {
    id: `${scope}.pages.errors`,
    defaultMessage: 'Errors',
  },
  not_found_page: {
    id: `${scope}.pages.not_found_page`,
    defaultMessage: 'Not Found Page',
  },
  error_page: {
    id: `${scope}.pages.errors`,
    defaultMessage: 'Error Page',
  },
  menu_levels: {
    id: `${scope}.menu_levels`,
    defaultMessage: 'Menu Levels',
  },
  level_1: {
    id: `${scope}.level_1`,
    defaultMessage: 'Level 1',
  },
  level_2: {
    id: `${scope}.level_2`,
    defaultMessage: 'Level 2',
  },
  sub_menu_1: {
    id: `${scope}.sub_menu_1`,
    defaultMessage: 'Sub Menu 1',
  },
  sub_menu_2: {
    id: `${scope}.sub_menu_2`,
    defaultMessage: 'Sub Menu 2',
  },
});
