import { useSelector, useDispatch } from 'react-redux';
import ItemContactsList from './ItemContactsList/ItemContactsList';
import styles from './ContactList.module.css';
import { useEffect } from 'react';
import { fetchAllContacts } from 'redux/contactsSlice/contactsOperations';
import { selectFilteredContacts } from 'redux/contactsSlice/contactsSelector';


const ContactsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts())
  }, [dispatch]);
  console.log(useSelector(selectFilteredContacts))

  return (
    <ul className={styles.ul}>
      {useSelector(selectFilteredContacts).map(({ id, name, number }) => {
        return (
          <ItemContactsList
            key={id}
            name={name}
            number={number}
            deleteId={id}
          />
        );
      })}
    </ul>
  );
};

export default ContactsList;
