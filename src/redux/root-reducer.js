import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import contactsReducer from './contactsSlice/contactsSlice';
import filterReducer from './filterSlice/filterSlice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: 'filter',
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);
