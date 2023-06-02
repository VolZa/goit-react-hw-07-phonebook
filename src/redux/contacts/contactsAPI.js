import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react' 

// Define a service using a base URL and expected endpoints
export const contactsApi = createApi({
   reducerPath: 'contacts',
   baseQuery: fetchBaseQuery({ baseUrl: 'https://647796839233e82dd53be43a.mockapi.io' }),
   endpoints: (builder) => ({
     getContacts: builder.query({
      query: () => `contacts`,
     }),
   }),
 })