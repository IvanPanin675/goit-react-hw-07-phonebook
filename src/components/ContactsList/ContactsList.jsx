import { useSelector } from 'react-redux';
import ItemContactsList from './ItemContactsList/ItemContactsList';
import styles from './ContactList.module.css';

import { selectFilteredContacts } from 'redux/contactsSlice/contactsSelector';


const ContactsList = () => {

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
