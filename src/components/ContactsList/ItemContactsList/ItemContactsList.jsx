import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { fetchDeleteContact } from 'redux/contactsSlice/contactsOperations';

import styles from './ItemContacts.module.css';

const ItemContactsList = ({ name, number, deleteId }) => {
  const dispatch = useDispatch();

  const onDelete = id => {
    dispatch(fetchDeleteContact(id));
  };
  
  return (
    <li className={styles.item}>
      {name}: {number}
      <button className={styles.btn} onClick={() => onDelete(deleteId)}>
        Delete
      </button>
    </li>
  );
};

ItemContactsList.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteId: PropTypes.string.isRequired,
};

export default ItemContactsList;
