// // import { nanoid } from 'nanoid'
// import {useFormik} from 'formik';
// import { FormPhBS, AddContact, Label } from './FormPhB.styled';

// // import { addContact, getContacts } from "redux/contacts/contactsSlice";
// import { useDispatch, useSelector } from "react-redux";
// import { selectContactsItems} from 'redux/services/selector';
// import { addContact } from 'redux/services/operations';
// import Notiflix from "notiflix";
// // , selectShowingContacts 
// export const FormPhB = () => {
//   const dispatch = useDispatch();
//     // const contacts = useSelector(selectShowingContacts);
//   const contacts = useSelector(selectContactsItems);
//   const handleSubmit = ({name, number}, { resetForm}) => {
//     const contact = {
//       name,
//       phone: number,
//     }
//     const isNameInContacts = contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase());
//     if (isNameInContacts) return Notiflix.Notify.failure(`${name} is already in contacts!`);
//     dispatch(addContact(contact));
//     resetForm();
//   }
//   const formik = useFormik({
//     initialValues: {
//       name: '',
//       number: '',
//     },
//     onSubmit: (values, { resetForm }) =>  {
//       // const contact = {
//       //   id: nanoid(),
//       //   name: values.name,
//       //   phone: values.number,
//       // };
//       const isName = contacts.some(contact => contact.name.toLowerCase() === values.name.toLowerCase()); 
//       if (isName) {
//         return alert(`${values.name} is already in contacts`);
//       }
//       // dispatch(addContact(contact));
//       resetForm();
//     },
//     validate: (values) => {
//       const errors = {};
//       if (!values.name) {
//         errors.name = 'Name is required';
//       }
//       if (!values.number) {
//         errors.number = 'Number is required';
//       }
//       return errors;
//     },
//   });

//     return (
//         <FormPhBS  
//           // initialValues={{ name: '', number: '' }}
//           onSubmit={formik.handleSubmit}>

//             <Label>
//                 Name
//                 <input
//                     type="text"
//                     name="name"
//                     value={formik.values.name}
//                     onChange={formik.handleChange}
//                     //onChange={ e => setName( e.currentTarget.value )}
//                 />
//             </Label>

//             <Label>
//                 Number
//                 <input
//                     type="tel"
//                     name="number"
//                     pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                     title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                     required
//                     value={formik.values.number}
//                     onChange={formik.handleChange}
//                         // onChange={e => {
//                         //   setNumber( e.currentTarget.value );    
//                     // }
//                 />
//             </Label>

//             <AddContact type="submit">Add contact</AddContact>
//         </FormPhBS>
//     );
// }

    // const onSubmit = ({ name, number }, { resetForm }) => {
    //     const isName = contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase());
    //     const contact = {
    //       id: nanoid(),
    //       name,
    //       number,
    //     };
    //     if (isName) return window.alert(`${name} is allready in contacts`);
    //       dispatch(addContact(contact));
    //       resetForm();
    //   };
        //  <FormPhBS onSubmit={onSubmit}>   

