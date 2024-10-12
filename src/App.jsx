import { useSelector, useDispatch } from "react-redux";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { addContact, deleteContact, selectContacts } from "./redux/contactsSlice";
import { changeFilter, selectNameFilter } from "./redux/filtersSlice";
import { nanoid } from "nanoid";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

const App = () => {
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectNameFilter);
    const dispatch = useDispatch();

    const handleAddContact = (newContact) => {
        dispatch(addContact({ ...newContact, id: nanoid() }));
    };

    const handleDeleteContact = (id) => {
        dispatch(deleteContact(id));
    };

    const handleFilterChange = (e) => {
        dispatch(changeFilter(e.target.value));
    };

    const getFilteredContacts = () => {
        const normalizedFilter = filter.toLowerCase();
        return contacts.filter((contact) =>
            contact.name.toLowerCase().includes(normalizedFilter)
        );
    };

    return (
        <div>
            <h1>Phonebook</h1>
            <ContactForm addContact={handleAddContact} />
            <SearchBox filter={filter} onFilterChange={handleFilterChange} />
            <ContactList
                contacts={getFilteredContacts()}
                onDeleteContact={handleDeleteContact}
            />
        </div>
    );
};

const AppWrapper = () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
);

export default AppWrapper;
