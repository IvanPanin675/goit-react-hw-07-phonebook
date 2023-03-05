import FormAddContact from './FormAddContact/FormAddContact';
import FilterSearch from './FilterSearch/FilterSearch';
import ContactsList from './ContactsList/ContactsList';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllContacts } from 'redux/contactsSlice/contactsSelector';
import { useEffect } from 'react';
import { fetchAllContacts } from 'redux/contactsSlice/contactsOperations';
import Loader from 'modules/Loader/Loader';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const contacts = useSelector(selectAllContacts);
  const loader = useSelector(state => state.contacts.isLoading);

  return (
    <>
      <h1>Phonebook</h1>
      <FormAddContact />
      {(loader && <Loader/>) || (contacts.length > 0 && (
        <>
          <h2>Contacts</h2>
          <FilterSearch />
          <ContactsList />
        </>
      ))}
    </>
  );
}
