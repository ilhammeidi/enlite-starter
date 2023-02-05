/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for redux-saga es6 generator support
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// Import all the third party stuff
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter } from 'connected-react18-router';
import history from 'utils/history';
import 'react-18-image-lightbox/style.css';
import 'sanitize.css/sanitize.css';

// Import root app
import App from 'containers/App';
import './styles/layout/base.scss';

// Import Language Provider
import LanguageProvider from 'containers/LanguageProvider';

// Load the favicon and the .htaccess file
/* eslint-disable import/no-unresolved, import/extensions */
/* eslint-enable import/no-unresolved, import/extensions */
import configureStore from './redux/configureStore';

// Import i18n messages
import { translationMessages } from './i18n';

// Create redux store with history
const initialState = {};
const { store, persistor } = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('app');

const root = createRoot(MOUNT_NODE);
const render = messages => {
  root.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <LanguageProvider messages={messages}>
          <ConnectedRouter history={history}>
            <App history={history} />
          </ConnectedRouter>
        </LanguageProvider>
      </PersistGate>
    </Provider>
  );
};

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['./i18n', 'containers/App'], () => {
    // root.unmount();
    render(translationMessages);
  });
}

// Chunked polyfill for browsers without Intl support

if (!window.Intl) {
  new Promise(resolve => {
    resolve(import('intl'));
  })
    .then(() => Promise.all([
      import('intl/locale-data/jsonp/en.js'),
      import('intl/locale-data/jsonp/de.js'),
    ]))
    .then(() => render(translationMessages))
    .catch(err => {
      throw err;
    });
} else {
  render(translationMessages);
}

/**
Offline access for production mode.
Uncomment this code bellow to register Service Worker.
* */

//  if ('serviceWorker' in navigator) {
//    window.addEventListener('load', () => {
//      navigator.serviceWorker.register('/service-worker.js').then(registration => {
//        console.log('SW registered: ', registration);
//      }).catch(registrationError => {
//        console.log('SW registration failed: ', registrationError);
//      });
//    });
//  }
