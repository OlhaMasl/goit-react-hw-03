import s from "./Contact.module.css"

const Contact = ({ data: {id, name, number}, onDelete}) => {
    return (
        <div className={s.wrapper }>
            <div className={s.contactData}>
            <div className={s.contactDataItem}>
                <span className={s.icons}>Name:</span>
                <p className={s.contactEl}>{name}</p>
            </div>
            <div className={s.contactDataItem}>
                <span className={s.icons}>Tell:</span>
                <p className={s.contactEl}>{number}</p>
                </div>
            </div>
            <button className={s.deleteBtn} type="button" onClick={() => { onDelete(id) }}>Delete</button>
        </div>
    );
};

export default Contact;