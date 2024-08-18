/**
 * Create the store with dynamic reducers
 */

import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore, persistReducer,
  FLUSH, REHYDRATE, PAUSE,
  PERSIST, PURGE, REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers';

const persistConfig = {
  key: 'enlite',
  storage,
  whitelist: []
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [
        FLUSH, REHYDRATE, PAUSE,
        PERSIST, PURGE, REGISTER
      ],
      ignoredPaths: ['auth.user', 'crudTable.crudTableDemo', 'email', 'calendar'],
      ignoredActionPaths: ['payload']
    },
  }),
});

export const persistor = persistStore(store);

export default store;
