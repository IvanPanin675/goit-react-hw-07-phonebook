import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from 'services/API';

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await API.getAllContacts();
      return contacts;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);

export const fetchAddContact = createAsyncThunk(
  'contacts/addContact',
  async (data, { rejectWithValue }) => {
    try {
      const result = await API.addContact(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);

export const fetchDeleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await API.deleteContact(id);
      return id;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);