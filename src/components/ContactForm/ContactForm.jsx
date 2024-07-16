import { Field, Form, Formik } from "formik";
import s from "./ContactForm.module.css";
import { nanoid } from "nanoid"

const ContactForm = ({ onAdd }) => {
    const initialValues = {
        name: "",
        number: "",
    }

    const handleSubmit = data => {
        console.log(data);
        return onAdd({
            id: nanoid(),
            name: data.name,
            number: data.number,
            }
        );
    }

    return (
        <div>
            <Formik initialValues={{initialValues}} onSubmit={handleSubmit}>
                <Form className={s.form}>
                    <label className={s.dataFielf}>
                        <span>Name</span>
                        <Field type="text" name="name"></Field>
                    </label>
                    <label className={s.dataFielf}>
                        <span>Number</span>
                        <Field  type="text" name="number"></Field>
                    </label>
                    <button type="submit" className={ s.addContactBtn}>Add contact</button>
                </Form>
            </Formik>
        </div>

    );
};
 
export default ContactForm;