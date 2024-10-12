import { useSelector, useDispatch } from "react-redux";
import { selectContacts, deleteContact } from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  return (
      <ul className={styles.contactList}>
        {contacts.map((contact) => (
            <li key={contact.id} className={styles.contactListItem}>
              <Contact
                  id={contact.id}
                  name={contact.name}
                  number={contact.number}
                  onDelete={() => dispatch(deleteContact(contact.id))}
              />
            </li>
        ))}
      </ul>
  );
};

export default ContactList;
