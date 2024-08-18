/**
 * Combine all reducers in this file and export the combined reducers.
 */
import { combineSlices } from '@reduxjs/toolkit';
import language from 'containers/LanguageProvider/reducer';
import uiReducer from './modules/ui';
import authReducer from './modules/auth';

/**
 * Creates the main reducer with the dynamically injected ones
 */

export default combineSlices({
  ui: uiReducer,
  auth: authReducer,
  language
});
