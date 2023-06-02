//Файл оголошеня стор Redux
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import { configureStore } from '@reduxjs/toolkit';

import { storeContactsReducer } from './contacts/contactsSlice';
import initContacts from "./constants";
import { filterSlice } from './filter/filterSlice';

export const initialState = {
   contacts: initContacts,
}

export const store = configureStore({
   reducer: {
      contacts: storeContactsReducer,
      filter: filterSlice.reducer,
   },
   middleware: getDefaultMiddleware =>
   getDefaultMiddleware({
     serializableCheck: {
       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
     },
   }),
   
});

export const persistor = persistStore(store);

