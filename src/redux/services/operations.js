import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = "https://647796839233e82dd53be43a.mockapi.io";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", 
   async (_, thunkAPI) => {
      try {
         const response = await axios.get("/contacts");
         return response.data;
      } catch (err) {
         return thunkAPI.rejectWithValue(err.message);
      }
   }
);

export const addContact = createAsyncThunk('contacts/addContact',
   async (contact, thunkAPI) => {
      try {
         const { data } = await axios.post('/contacts', contact);
         return data;
      } catch (err) {
         return thunkAPI.rejectWithValue(err.message);
      }
   }
);

export const delContact = createAsyncThunk ('contacts/deleteContact',
   async (contactId, thunkAPI) => {
      try {
         const {data} = await axios.delete(`/contacts/${contactId}`);
         return data;
      }  catch (err) {
         return thunkAPI.rejectWithValue(err.message);
      }
   }
);

