
import { selectError, selectIsLoading, selectShowingContacts } from 'redux/services/selector';
import { Contacts, Contact } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { delContact, fetchContacts } from 'redux/services/operations';
import { useEffect } from 'react';

export const ContactList = () => {
   const contacts = useSelector(selectShowingContacts);
   const isLoading = useSelector(selectIsLoading);
   const isError = useSelector(selectError);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchContacts())
   }, [dispatch])

   return (
      <Contacts>
         { isLoading && (
            <div>...Завантаження</div>
         )}
         {isError && <h2>error</h2>}  
         {contacts.map(contact => {
            return(
               <Contact key={contact.id}>
                  <span>{contact.name}: </span>
                  <span>{contact.phone}</span>
                  <button type="button" onClick={
                     ()=>dispatch(delContact(contact.id))} >Delete</button>
               </Contact>
            );
         })} 

      </Contacts>
   );
};
