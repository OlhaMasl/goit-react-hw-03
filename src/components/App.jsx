import { useEffect, useState } from "react";
import "../index.css";
import initialContacts from "../contacts.json";
import ContactList from "./ContactList/ContactList";
import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";


const App = () => {

  const [contacts, setContacts] = useState(() => {
    const savedContacts = JSON.parse(window.localStorage.getItem("contacts"));
    if (savedContacts !== null) {
      return savedContacts;
    };
    return initialContacts;
  });
  
  const [filter, setFilter] = useState("");
  
  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

 const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = (contactId) => {
   setContacts((prevContacts) => {
     return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };
  const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));

    return (
      <div className="container">
        <h1 className="title">Phonebook</h1>
        <ContactForm onAdd={addContact} />
        <SearchBox value={filter} onFilter={setFilter} />
        <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
};

export default App;

