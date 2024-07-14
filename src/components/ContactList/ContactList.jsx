import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = ({ contacts }) => {
    return (
        <ul className={s.listWrapper }>
            {contacts.map((contact) => (<li className={s.contactItem } key={contact.id}>
                <Contact data={ contact } />
            </li>))}
        </ul>
    );
};

export default ContactList;