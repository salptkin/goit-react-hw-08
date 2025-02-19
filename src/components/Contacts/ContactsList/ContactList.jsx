import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContact } from "../../../redux/contacts/operations";
import { selectFilteredContacts } from "../../../redux/contacts/selectors";
import ContactItem from "../ContactItem/ContactItem";
import styles from "./ContactList.module.css";

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    <div className={styles.contactListContainer}>
      <h2 className={styles.contactListTitle}>Contact List</h2>
      <ul className={styles.contactList}>
        {filteredContacts?.length > 0 ? (
          filteredContacts.map((contact) => (
            <ContactItem contact={contact} key={contact.id} />
          ))
        ) : (
          <p className={styles.emptyMessage}>No contacts available</p>
        )}
      </ul>
    </div>
  );
}
