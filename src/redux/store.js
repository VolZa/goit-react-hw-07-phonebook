//Файл оголошеня стор Redux
// import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import { persistStore } from 'redux-persist'
import { configureStore } from '@reduxjs/toolkit';

// import { storeContactsReducer } from './contacts/contactsSlice';
import initContacts from "./constants";
import { filterSlice } from './filter/filterSlice';
import { contactsApi } from './contacts/contactsAPI';

export const initialState = {
   contacts: initContacts,
}

export const store = configureStore({
   reducer: {
      // contacts: storeContactsReducer,
      // Add the generated reducer as a specific top-level slice
      [contactsApi.reducerPath]: contactsApi.reducer,
     
      filter: filterSlice.reducer,
   },

   //middleware concat from contactsApi
   middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(contactsApi.middleware),
   
});

export const persistor = persistStore(store);

