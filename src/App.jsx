import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { useSelector } from "react-redux";
import { selectContacts } from "./redux/contactsSlice";
import { selectNameFilter } from "./redux/filtersSlice";

const App = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList contacts={getFilteredContacts()} />
    </div>
  );
};

export default App;
