import { useState } from "react";
import "../index.css"
import initialContacts from "../contacts.json"
import ContactList from "./ContactList/ContactList"
import ContactForm from "./ContactForm/ContactForm";


const App = () => {

  const [contacts, setContacts] = useState(initialContacts);

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

    return (
    <div className="container">
  <h1 className="title">Phonebook</h1>
  <ContactForm onAdd={addContact} />
  {/* <SearchBox /> */}
        <ContactList contacts={contacts} onDelete={deleteContact} />
    </div>
  );
};

export default App;

