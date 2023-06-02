// import  PropTypes from 'prop-types'
import { Contacts, Contact } from './ContactList.styled';

// import { delContact, getContacts } from 'redux/contacts/contactsSlice';
// import { getFilter } from 'redux/filter/filterSlice';
// import { useDispatch, useSelector } from 'react-redux';
import { useDeleteContactsMutation, useGetContactsQuery } from 'redux/contacts/contactsAPI';

// { delContact }
export const ContactList = () => {
   const { isLoading, data:contacts, isError } =useGetContactsQuery();
   console.log(contacts);
   const [deleteContacts, delInfo] = useDeleteContactsMutation(); 
  

   // console.log('contactList= ',contactsData);
   // const contacts = useSelector(getContacts);
   // const filter = useSelector(getFilter);

   // const dispatch = useDispatch();
//    const getFilteredContacts = () => 
//       contacts.filter(contact => 
//          contact.name.toLowerCase().includes(filter.toLowerCase()
//    ));
//    const sortedFilteredContacts = getFilteredContacts().sort((a, b) =>
//     a.name.toLowerCase().localeCompare(b.name.toLowerCase())
//   );
// {sortedFilteredContacts.map(contact => {
   return (
      <Contacts>
         {delInfo.isLoading&&<h2>Deleting...</h2>}
         { isLoading && (
            <div>...Завантаження</div>
         )}
         {contacts.map(contact => {
            return(
               <Contact key={contact.id}>
                  <span>{contact.name}: </span>
                  <span>{contact.phone}</span>
                  <button type="button" onClick={
                     ()=>deleteContacts(contact.id)} >Delete</button>
               </Contact>
            );
         })} 
         {isError && <h2>error</h2>}        
      </Contacts>
   );
};




//  const filterContacts = contacts.filter(contact => contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()));

// ContactList.propTypes = {
//    contacts: PropTypes.array.isRequired,
//    delContact: PropTypes.func.isRequired
// };