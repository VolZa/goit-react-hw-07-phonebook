//Файл оголошеня стор
import { persistStore } from 'redux-persist'
import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './filter/filterSlice';
import { contactsReducer } from './contacts/contactsSlice';


export const store = configureStore({
   reducer: {
      contacts: contactsReducer,
      filter: filterSlice.reducer,
   },   
});

export const persistor = persistStore(store);

