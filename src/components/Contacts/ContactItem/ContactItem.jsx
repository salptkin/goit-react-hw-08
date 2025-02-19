import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../../redux/contacts/operations";
import styles from "./ContactItem.module.css";

export default function ContactItem({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li className={styles.contactItem}>
      <div className={styles.contactDetails}>
        <p>{contact.name}</p>
        <p>{contact.number}</p>
      </div>
      <button onClick={handleDelete} className={styles.deleteButton}>
        Delete
      </button>
    </li>
  );
}
