import styles from "./Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPhone } from "@fortawesome/free-solid-svg-icons";

// eslint-disable-next-line react/prop-types
const Contact = ({ id, name, number, onDelete }) => {
  return (
    <li className={styles.contactItem}>
      <div className={styles.contactInfo}>
        <div className={styles.contactDetail}>
          <FontAwesomeIcon icon={faUser} className={styles.icon} />
          <span className={styles.name}>{name}</span>
        </div>
        <div className={styles.contactDetail}>
          <FontAwesomeIcon icon={faPhone} className={styles.icon} />
          <span className={styles.number}>{number}</span>
        </div>
      </div>
      <button className={styles.deleteButton} onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
