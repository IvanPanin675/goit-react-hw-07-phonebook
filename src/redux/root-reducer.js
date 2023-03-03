import { combineReducers } from '@reduxjs/toolkit';

import contactsReducer from './contactsSlice/contactsSlice';
import filterReducer from './filterSlice/filterSlice';

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});


