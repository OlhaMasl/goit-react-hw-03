import s from "./Contact.module.css"

const Contact = ({ data }) => {
    return (
        <div className={s.wrapper }>
            <div className={s.contactData}>
            <div className={s.contactDataItem}>
                <span className={s.icons}>Name:</span>
                <p className={s.contactEl}>{data.name}</p>
            </div>
            <div className={s.contactDataItem}>
                <span className={s.icons}>Tell:</span>
                <p className={s.contactEl}>{data.number}</p>
                </div>
            </div>
            <button className={s.deleteBtn } type="button">Delete</button>
        </div>
    );
};

export default Contact;